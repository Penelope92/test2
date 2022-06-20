import { Grid, GridItem, Text, Center, Square, Circle, Image } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function SocialSection(){
    return (
<Grid templateColumns='repeat(2, 1fr)' color="white" gap={0} height='150'  mt="0" mb="5"  bg='#B2C581' >
{/* <Grid templateColumns='repeat(2, 1fr)' color="white" gap={0} height='150'  mt="0" mb="5"  bgGradient="linear(to-r, #B2C581, #FFCC83, #DACA7C)" > */}

<GridItem w='100%' p="6" paddingLeft={200}>
  <Text fontSize='2xl' color='white'>Be a friend, be social</Text>
  <Text fontSize='4xl' color='white'>Follow Nowayhome on</Text>
</GridItem>
<GridItem w='100%' p="6" >
  <Grid templateColumns='repeat(3, 1fr)' color="white" gap={0}  mt="5">
    <GridItem w='100%' p="" align='center'><Link>
    <Image  w="40px"  src='https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png' />
      <Text fontSize='2xl' color='white'>Facebook</Text></Link>
    </GridItem>
    <GridItem w='100%' p="" align='center'><Link>
    <Image  w="40px"  src='https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png' />
      <Text fontSize='2xl' color='white'>Instagram</Text></Link>
    </GridItem>
    <GridItem w='100%' p="" align='center'><Link>
      <Image  w="40px"  src='https://pnggrid.com/wp-content/uploads/2021/07/White-YouTube-Logo-Transparent.png' />
      <Text fontSize='2xl' color='white'>Youtube</Text></Link>
      
    </GridItem>
  </Grid>
</GridItem> 
</Grid>
    )
};