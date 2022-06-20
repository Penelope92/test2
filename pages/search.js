import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/Property';
import SearchFilters from '../components/SearchFiltersMin';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg';
import SocialSection from '../components/SocialSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <div>
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        // bg='gray.200'
        borderBottom='1px'
        borderColor='white'
        p='2'
        fontWeight='black'
        fontSize='xl'
        justifyContent='center'
        alignItems='center'
        // bg='#B2C581'
      >
        <Text fontFamily="verdana" color="#404040" >More Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} color="#404040"/>
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold' fontFamily="verdana" color="#595959">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap' justify="center" p="50px">
        {properties.map((property) => <Property property={property} key={property._id} />)}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} />
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
          
        </Flex>
      )}
</Box>

<header>
          <Navbar />
        </header>
        <SocialSection />
        <footer>
          <Footer />
        </footer>
        </div>  
    
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'all';

  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '10000000';
  const roomsMin = query.roomsMin || '0';
  const roomsMax = query.roomsMax || '10';
  const bathsMin = query.bathsMin || '0';
  const bathsMax = query.bathsMax || '5';
  const levelMin = query.levelMin || '-1';
  const levelMax = query.levelMax || '15';
  const yearMin = query.yearMin || '1900';
  const yearMax = query.yearMax || '2022';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const areaMin = query.areaMin || '0';
  const locationExternalIDs = query.locationExternalIDs || 'all';
  const agency = query.agency || 'all';
  // const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/search?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&bathsMin=${bathsMin}&bathsMax=${bathsMax}&levelMin=${levelMin}&levelMax=${levelMax}&yearMin=${yearMin}&yearMax=${yearMax}&minPrice=${minPrice}&maxPrice=${maxPrice}&agency=${agency}&roomsMin=${roomsMin}&roomsMax=${roomsMax}&areaMax=${areaMax}&areaMin=${areaMin}&sort=${sort}`);

  return {
    props: {
      properties:  JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Search;