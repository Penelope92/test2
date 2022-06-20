import Link from 'next/link';
import { Flex , Button, Box, Center} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Text,
  } from "@chakra-ui/react";
import {
    Input,
    InputGroup,
    InputAddon,
    InputLeftAddon,
    InputRightAddon,
    InputElement,
    InputLeftElement,
    InputRightElement,
  } from "@chakra-ui/react"
import {useState, useEffect} from 'react'

import {  Select, Spinner, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterDataMin, getFilterValues } from '../utils/filterDataMin';


import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg';

export default function SearchBar() {
  const [formData, setFormData] = useState({        
  location: '',
})
const [filters] = useState(filterDataMin);

const [searchTerm, setSearchTerm] = useState('');
const [locationData, setLocationData] = useState();
const [showLocations, setShowLocations] = useState(false);
const [loading, setLoading] = useState(false);
const router = useRouter();


const searchProperties = (filterValues) => {
  const path = '/search';
  const { query } = router;

  const values = getFilterValues(filterValues)


  values.forEach((item) => {
    if(item.value && filterValues?.[item.name]) {
      query[item.name] = item.value
    }
  })

  router.push({ pathname: path, query: query });
};

const searchAll = 

useEffect(() => {
  if (searchTerm !== '') {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
      setLoading(false);
      setLocationData(data?.hits);
    };

    fetchData();
  }
}, [searchTerm]);



  const onChange = (e) => {setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}) )} 
  const onSubmit = () => {}
    return (

        <Center width='100%' h={200} bg='#b2c581' p={0} color='white' >
          
          <Box >
          <Flex alignItems='center' justifyContent='center' paddingTop={5}>
        {/* <Text fontFamily="verdana" color="#FFBB33" fontWeight='black' fontSize='3xl' fontStyle='italic'>Find your dream home</Text> */}
        <Text fontFamily="Segoe UI" color="#393939" fontWeight='black' fontSize='5xl' paddingLeft={2} paddingBottom={6}>Find your dream home</Text>

      </Flex>
      {/* <Flex alignItems='center' justifyContent='center' paddingBottom={2}> */}
      {/* <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='3xl' fontStyle='italic'>to build your brand new life</Text>*/}
        {/* <Text fontFamily="verdana" color="#2F2C23" fontWeight='black' fontSize='4xl' paddingLeft={2} >Build your brand new life</Text> */}

      {/* </Flex> */}
            <Flex paddingBottom={4}>

           
                <Box key = {'locationExternalIDs'}>
                  <Select placeholder = 'Location' className='form-control' onChange={(e) => searchProperties({ ['locationExternalIDs']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'180px'} _placeholder={{ color: 'gray.400' }}>
                    <option value='thessaloniki' key='thessaloniki' >Thessaloniki</option>
                    <option value='athens' key='athens'>Athens</option>
                    <option value='heraklion' key='heraklion'>Heraklion</option>
                    <option  value='all' key='all'>Clear</option>
                  </Select>
                </Box>
             

                <Box key = {'purpose'}>
                  <Select placeholder = 'Purpose' onChange={(e) => searchProperties({ ['purpose']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'180px'} _placeholder={{ color: 'gray.400' }}>
                    <option value='for-rent' key='for-rent'>Rent</option>
                    <option value='for-sale' key='for-sale'>Buy</option>
                    <option value='all' key='all'>Clear</option>
                  </Select>
                </Box>

                <Box key = {'minPrice'}>
                  <Input placeholder = 'Min Price' type='number' onChange={(e) => searchProperties({ ['minPrice']: e.target.value })} color='#B2C581' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>

                <Box key = {'maxPrice'}>
                  <Input placeholder = 'Max Price' type='number' onChange={(e) => searchProperties({ ['maxPrice']: e.target.value })} color='#B2C581' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>

                <Box key = {'areaMin'}>
                  <Input placeholder = 'Min Area' type='number' onChange={(e) => searchProperties({ ['areaMin']: e.target.value })} color='#B2C581' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>

                <Box key = {'areaMax'}>
                  <Input placeholder = 'Max Area' type='number' onChange={(e) => searchProperties({ ['areaMax']: e.target.value })} color='#B2C581' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>

                <Box key = {'sort'}>
                  <Select placeholder = 'Sort by' onChange={(e) => searchProperties({ ['sort']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'180px'} _placeholder={{ color: 'gray.400' }}>
                    <option value='price-asc' key='price-asc'  color='#B2C581' >Lowest Price</option>
                    <option value='price-desc' key='price-desc'  color='#B2C581' >Highest Price</option>
                  </Select>
                </Box>
                



      
      

              
            </Flex>
            {/* <Center paddingTop={'20px'}>
              <Link href='search' passHref>
                    <Button size='lg' variant='outline' borderColor='#ffffff' backgroundColor="#B2C581" border='2px' color='#ffffff' _hover={{ bg: "#DACA7C", color: " white" }} fontWeight='bold'>Reset Filters</Button>
              </Link>
            </Center> */}
          </Box>
        </Center>
    )
}