import Image from 'next/image'
import { Flex, Text, Box, Icon, Button, Link, Center, Grid } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs';
import DataFetching, { baseUrl, fetchApi } from '../utils/fetchApi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Property from '../components/Property';
import noresult from '../assets/images/noresult.svg';
import {useUser} from '@auth0/nextjs-auth0';

import BuyRentSection from '../components/BuyRentSection';
import { Divider } from "@chakra-ui/react";
import SearchBar from '../components/SearchBar';
import VideoSection from '../components/VideoSection';
import QuoteTest from '../components/QuoteTest';
import SocialSection from '../components/SocialSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={600} height={400} alt="banner"/>
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="red.600" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
)



const Search = ({ properties }) => {
  const [searchBar, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box > 
      <Flex
        onClick={() => setSearchFilters(!searchBar)}
        cursor='pointer'
        borderBottom='1px'
        borderColor='gray.100'
        p='2'
        fontWeight='black'
        fontSize='xl'
        justifyContent='center'
        alignItems='center'
        bgGradient='linear(to-r, #ffe6e6, #ff0000, #ffe6e6)'
      >
        <Text fontFamily="verdana" color="#f2f2f2" >Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} color="#f2f2f2"/>
      </Flex>
      {searchBar && <SearchBar />}
    </Box>
  );
};



const Home = ({ properties }) => {
  
  const {user, error, isLoading} = useUser();

  console.log(user);
  return(
  <Box paddingBottom={1}> 
  
      {/* <Flex alignItems='center' justifyContent='center' paddingTop={5}> */}
        {/* <Text fontFamily="verdana" color="#FFBB33" fontWeight='black' fontSize='3xl' fontStyle='italic'>Find your dream home</Text> */}
        {/* <Text fontFamily="verdana" color="#2F2C23" fontWeight='black' fontSize='5xl'  paddingLeft={2}>Find your dream home</Text> */}

      {/* </Flex> */}
      {/* <Flex alignItems='center' justifyContent='center' paddingBottom={2}> */}
      {/* <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='3xl' fontStyle='italic'>to build your brand new life</Text>*/}
        {/* <Text fontFamily="verdana" color="#2F2C23" fontWeight='black' fontSize='4xl' paddingLeft={2} >Build your brand new life</Text> */}

      {/* </Flex> */}
      {/* &nbsp;
      &nbsp; */}
    <BuyRentSection />
    <br></br>
    <Flex p={2} paddingBottom={12} paddingTop={2} >
      <Center height="40px"  paddingLeft={9}  paddingTop={4}  >
        <Divider orientation="vertical" borderColor="#B2C581" borderWidth={4} paddingTop={2}/>
      </Center>
      <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='4xl' paddingLeft={2}>Featured Listings</Text>
      <Text fontFamily="verdana" color="gray.700" fontSize='2xl' paddingLeft={4} paddingTop={2}>residential properties in your areas of interest</Text>
    </Flex>
    { <Flex flexWrap='wrap' justify="center" paddingBottom={4}>
      {properties.map((property) => <Property property={property} key={property._id} />)}
    </Flex> }
    <Divider orientation="horizontal" borderColor="#B2C581" borderWidth={4} width='-moz-initial'/>
    <Flex p={2} paddingBottom={12} paddingTop={12}>
      <Center height="40px"  paddingLeft={8}  paddingTop={4}  >
        <Divider orientation="vertical" borderColor="#B2C581"  borderWidth={4} paddingTop={2}/>
      </Center>
      <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='4xl' paddingLeft={2}>Featured Professionals</Text>
    </Flex>

    <Box width="100%" paddingEnd="60" paddingStart="60" >
        <Grid templateColumns='repeat(6, 1fr)' color="white" gap={10}  paddingBottom={63}>
        <Box>
        <Link href='/search?agency=Olive%20Tree%20Realty '>
        <Image src="https://thodoris.eu/wp-content/uploads/2022/06/olive.png" width="256px" height="205px"></Image>
        </Link>
        </Box>
        <Box>
        <Link href='/search?agency=Stellar%20Property%20Advisors'>
        <Image src="https://thodoris.eu/wp-content/uploads/2022/06/stellar.png" width="256px" height="205px"></Image>
        </Link>
        </Box>
        <Box>
        <Link href='/search?agency=Picket%20Fence%20Realty'>
        <Image src="https://thodoris.eu/wp-content/uploads/2022/06/picket.png" width="256px" height="205px"></Image>
        </Link>
        </Box>
        <Box>
        <Link href='/search?agency=Bold%20Realty'>
        <Image src="https://thodoris.eu/wp-content/uploads/2022/06/bold.png" width="256px" height="205px"></Image>
        </Link>
        </Box>
        <Box>
        <Link href='/search?agency=Anchor%20Group%20Real%20Estate'>
        <Image src="https://thodoris.eu/wp-content/uploads/2022/06/anchor.png" width="256px" height="205px"></Image>
        </Link>
        </Box>
        <Box>
        <Link href='/search?agency=Equinox%20Realty%20Advisors'>
        <Image src="https://thodoris.eu/wp-content/uploads/2022/06/equinox.png" width="256px" height="205px"></Image>
        </Link>
        </Box>
      </Grid>
      </Box>
  
        {/* New section */}
        <Divider orientation="horizontal" borderColor="#B2C581" borderWidth={4} width='-moz-initial'/>
        <VideoSection />
        <Divider orientation="horizontal" borderColor="#B2C581" borderWidth={4} width='-moz-initial'/>
        <QuoteTest />
        <SocialSection />
        <footer>
          <Footer />
        </footer>
        <Box maxWidth='1400px' m='auto' >
        <header>
          <Navbar />
        </header>
        </Box>
    
  </Box>
  )
};

export async function getStaticProps() {
  const properties = await fetchApi(`${baseUrl}/search?limit=6`);
  // const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      properties
    }
   
  };
}


export default Home;

