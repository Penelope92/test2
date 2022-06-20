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

export default function Register() {
        const [usernameReg, setUsernameReg] = useState('');
        const [emailReg, setEmailReg] = useState('');
        const [passwordReg, setPasswordReg] = useState('');


       
     //Axios.defaults.withCredentials = true;
      const register=() => 
      {
        axios.post(`${baseUrl}/api/users`,
        { 
          name: usernameReg,
          email: emailReg,
          password: passwordReg,
        }).then((response) =>
        {
          console.log(response);
        });
      };

      // const onChange = (e) => {setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}) )} 
      const onSubmit = () => {}
  
    return (
      <Box>
        <Center width='100%' h={350} >
          <Box>
            <Flex>
            <FormControl id="email" >
            <InputGroup>
                <form  onSubmit={onSubmit} >
                  <div className='form-group'>
                    <Box paddingTop={3}>
                      <Input type='text' placeholder='Enter your name' className='form-control' id='name' name='name' onChange={(e) => setUsernameReg(e.target.value)} size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                    </Box> 
                  </div>
                  <div className='form-group'> 
                    <Box paddingTop={3}>
                      <Input type='email' placeholder='Enter an email' className='form-control' id='email' name='email' onChange={(e) => setEmailReg(e.target.value)} size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                    </Box> 
                  </div>
                  <div className='form-group'> 
                    <Box paddingTop={3}>
                      <Input type='password' placeholder='Enter your password' className='form-control' id='password' name='password' onChange={(e) => setPasswordReg(e.target.value)} size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                    </Box>
                  </div>
                  <div className='form-group'> 
                    {/* <Box paddingTop={3}>
                      <Input type='password' placeholder='Confirm your password' className='form-control' id='password2' name='password2' value={password2} size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                    </Box> */}
                  </div>              
                    <Box paddingTop={3}>
                      <Button size='lg' onClick={register} variant='outline' borderColor='#ffffff' backgroundColor="#ff8484" border='2px' color='#ffffff' _hover={{ bg: "#607196", color: " white" }} fontWeight='bold'>Submit</Button>
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

//position='fixed' top='0px'