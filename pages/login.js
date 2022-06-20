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
import {FaUser} from 'react-icons/fa'
import { baseUrl, fetchApi } from '../utils/fetchApi';
import axios, { Axios } from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialSection from "../components/SocialSection";

export default function Login() {



  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const login=() => 
  {
    axios.post(`${baseUrl}/api/users/login`,
    { 
      email: email,
      password: password,
    }).then((response) =>
    {
      console.log(response);
    });
  };

      //const onChange = (e) => {setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}) )} 
      const onSubmit = () => {}
  
    return (
    <Box>
        <Center width='100%' h={250} >
          <Box>
            <Flex>
            <FormControl id="email" >
            <InputGroup>
                <form>
                <div className='form-group'> 
                <Box paddingTop={3}>
                <Input type='email' placeholder='Enter your email' className='form-control' id='email' name='email' onChange={(e) => setEmail(e.target.value)} size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                </Box> 
                </div>
                <div className='form-group'> 
                <Box paddingTop={3}>
                <Input type='password' placeholder='Enter your password' className='form-control' id='password' name='password' onChange={(e) => setPassword(e.target.value)} size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                </Box>
                </div>          
                <Box paddingTop={3}>
                <Button size='lg' onClick={login} variant='outline' borderColor='#ffffff' backgroundColor="#ff8484" border='2px' color='#ffffff' _hover={{ bg: "#607196", color: " white" }} fontWeight='bold'>Login</Button>
                </Box>
                </form>
                </InputGroup>
            </FormControl>
            </Flex>
            </Box>
        </Center>
        <header>
          <Navbar />
        </header>
        <SocialSection />
        <footer>
          <Footer />
        </footer>
        </Box>
    )
}