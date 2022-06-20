import { Grid, Box, Flex, Center, Square, Circle } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function BuyRentSection(){
    return (
      <Box width="100%" paddingEnd="40" paddingStart="40">
        <Grid templateColumns='repeat(2, 1fr)' color="white" gap={10}  mt="10" paddingBottom={63}>
        <Center  _hover={{opacity:"0.9", textDecoration:"none"}} rounded={'2xl'} overflow={'hidden'} w='100%' objectFit='cover' backgroundImage="https://i.ibb.co/tsR9gb6/home-rent.jpg" h="350" p="6"  color='white' fontWeight='bold' fontSize='6xl' ><Link _hover={{textDecoration:"none"}} textShadow='2px 1px #000000' href='/search?purpose=for-sale'>BUY</Link></Center>
        <Center _hover={{opacity:"0.9"}} rounded={'2xl'} overflow={'hidden'} w='100%' backgroundImage="https://i.ibb.co/Pcp0xTT/home-buy.jpg" h="350" p="6"  color='white' fontWeight='bold' fontSize='6xl'><Link _hover={{textDecoration:"none"}} textShadow='2px 1px #000000' href='/search?purpose=for-rent'>RENT</Link></Center>
      {/* url: https://i.ibb.co/tsR9gb6/home-rent.jpg
          url: https://i.ibb.co/Pcp0xTT/home-buy.jpg
      */}
      </Grid>
      </Box>
    )
};


