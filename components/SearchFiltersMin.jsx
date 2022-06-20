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

        <Center width='100%' h={100} p={0} color='white' >
          <Box >
            <Flex>
        
           
                <Box key = {'bathsMin'}>
                  <Input placeholder = 'Min Baths' type='number' className='form-control' onChange={(e) => searchProperties({ ['bathsMin']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>
                <Box key = {'bathsMax'}>
                  <Input placeholder = 'Max Baths' type='number' className='form-control' onChange={(e) => searchProperties({ ['bathsMax']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>

                <Box key = {'roomsMin'}>
                  <Input placeholder = 'Min Rooms' type='number' className='form-control' onChange={(e) => searchProperties({ ['roomsMin']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'180px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>
                <Box key = {'roomsMax'}>
                  <Input placeholder = 'Max Rooms' type='number' className='form-control' onChange={(e) => searchProperties({ ['roomsMax']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'180px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>
                <Box key = {'levelMin'}>
                  <Input placeholder = 'Min Level' type='number' className='form-control' onChange={(e) => searchProperties({ ['levelMin']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>
                <Box key = {'levelMax'}>
                  <Input placeholder = 'Max Level' type='number' className='form-control' onChange={(e) => searchProperties({ ['levelMax']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>
                <Box key = {'yearMin'}>
                  <Input placeholder = 'Min Year' type='number' className='form-control' onChange={(e) => searchProperties({ ['yearMin']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>
                <Box key = {'yearMax'}>
                  <Input placeholder = 'Max Year' type='number' className='form-control' onChange={(e) => searchProperties({ ['yearMax']: e.target.value })} color='gray.400' size="lg" marginRight={1}  bg='white' width={'120px'} _placeholder={{ color: 'gray.400' }}>
                  </Input>
                </Box>




            </Flex>
          </Box>
        </Center>
    )
}