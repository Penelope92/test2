import { Avatar, Box, Grid, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function QuoteTest() {
  return (

    <Grid templateColumns='repeat(3, 1fr)'  gap={0}  >
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        The best real estate site I have ever dealt with. Very professional, experienced and helpful. Highly recommend.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Christiana Nwamba</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        Accountant     
         </Text>
      </Box>
    </Stack>

    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        I’ve had a great experience with Nowayhome! Incredibly helpful in finding a beautiful place in Thessaloniki for my family. 
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://bit.ly/dan-abramov'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Dan Abrahmov</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        Father of two
        </Text>
      </Box>
    </Stack>

    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Had a very difficult time in finding a qualitative house at a logical price when I got into University. Nowayhome solved my problem!
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://bit.ly/ryan-florence'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Ryan Florence</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        University Student
        </Text>
      </Box>
    </Stack>
    </Grid>
  );
}