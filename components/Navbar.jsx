import Link from 'next/link';
import { Center, Menu, Text,  MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { BsFillHouseDoorFill, BsCashCoin, BsFillPersonFill } from "react-icons/bs";
import logo from "../assets/images/logogreen2.png"
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'
import {useUser} from '@auth0/nextjs-auth0';

export default function Navbar() {
  const { 
    isOpen: isOpenReportModal, 
    onOpen: onOpenReportModal, 
    onClose: onCloseReportModal 
  } = useDisclosure()
  

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {user, error, isLoading} = useUser();

  console.log(user);
  
  return (
  <Flex>

   <Box bg='white' w='100%' p={30} color='white' position='fixed' top='0' right='0' left='0' height='40px'  >

 
    <Box fontSize='4xl' color='#607196' fontWeight='bold' fontStyle='italic' position='fixed' top='0'  paddingTop='8px'>
      <Link  href='/'>
        <Image src={logo} alt="logo" height='38' width='251' />
      </Link>

    </Box>
    <Center>
    {user && (
            <Text fontSize='2xl' color='#393939' fontWeight='bold' fontStyle='italic' position='fixed' top='0'  paddingTop='12px'  height ="5px"> Hello {user.name}!</Text> 
        )}
</Center>    
  

    <Spacer />
    {/* { <Box p={14} paddingRight="8px">
    <Select value={'option1'}>
      <option value='option1'>el</option>
      <option value='option2'>en</option>
    </Select>
    </Box> } */}
    
    <Box p={2} paddingRight="4px" position='fixed' right='4' top='0'>
    {!user && (
      <Menu isOpen={isOpen}>
        <MenuButton as={IconButton} icon={<BsFillPersonFill />} variant='outline' color='#607196' borderRadius={20} onMouseEnter={onOpen} onMouseLeave={onClose}/> 
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Link href={`/api/auth/login`} passHref>
            <MenuItem color='#607196'>Login/Register</MenuItem>
          </Link>
          {/* <Link href={`/register`} passHref>
            <MenuItem color='#607196'>Register</MenuItem>
          </Link> */}
          </MenuList>
      </Menu>
    )}
    {user && (
      <Menu isOpen={isOpen}>
        <MenuButton as={IconButton} icon={<BsFillPersonFill />} variant='outline' color='#607196' borderRadius={20} onMouseEnter={onOpen} onMouseLeave={onClose}/> 
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Link href={`/api/auth/logout`} passHref>
            <MenuItem color='#607196'>Logout</MenuItem>
          </Link>
          {/* <Link href={`/favorites`} passHref>
            <MenuItem color='#607196'>Favorites</MenuItem>
          </Link> */}
          </MenuList>
      </Menu>
    )}
      
      &nbsp;
      &nbsp;
      <Menu isOpen={isOpenReportModal}>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='#607196' onMouseEnter={onOpenReportModal} onMouseLeave={onCloseReportModal} /> 
        <MenuList onMouseEnter={onOpenReportModal} onMouseLeave={onCloseReportModal}>
          <Link href='/' passHref>
            <MenuItem color='#607196' icon={<BsFillHouseDoorFill color='#607196'/>}>Home</MenuItem>
          </Link>
          <Link href='search' passHref>
            <MenuItem color='#607196' icon={<BsSearch color='#607196'/>}>Search</MenuItem>
          </Link>
          <Link href='search?purpose=for-sale' passHref>
            <MenuItem color='#607196' icon={<BsCashCoin color='#607196'/>}>Buy Property</MenuItem>
          </Link>
          <Link href='search?purpose=for-rent' passHref>
            <MenuItem color='#607196' icon={<FiKey color='#607196'/>}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>

      
    </Box>
    </Box>
  </Flex>
  )
};

// export default Navbar;
