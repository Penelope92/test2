import { Box } from '@chakra-ui/layout';
import Image from 'next/image';
import logo from "../assets/images/logogreen2.png"
import { Grid, GridItem, Text, Center, Square, Circle } from '@chakra-ui/react';
import {List, ListItem, UnorderedList} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';


const Footer = () => (
  <div>
   <Grid templateColumns='repeat(4, 1fr)' color="black" gap={0}  mt="8" borderColor='gray.100' paddingLeft={12} paddingBottom={8}>
  <GridItem w='100%' p="6" paddingLeft={8} paddingTop={'45px'} >
  <Image src={logo} alt="logo"/>  
  </GridItem>
  <GridItem w='100%' p="6">
    <UnorderedList>
    <ListItem color="#404040"><Link>Property for rent</Link></ListItem>
    <ListItem color="#404040"><Link>Property for buy</Link></ListItem>
    <ListItem color="#404040"><Link>Commercial Property for Sale</Link></ListItem>
    <ListItem color="#404040"><Link>Commercial Property to Let</Link></ListItem>
  </UnorderedList>
  </GridItem>
  <GridItem w='100%' p="6">
    <UnorderedList>
    <ListItem color="#404040"><Link>Entrustment Request</Link></ListItem>
    <ListItem color="#404040"><Link>Search Request</Link></ListItem>
    <ListItem color="#404040"><Link>Move</Link></ListItem>
    <ListItem color="#404040"><Link>Renovations</Link></ListItem>
  </UnorderedList>
  </GridItem><GridItem w='100%'  p="6">
    <UnorderedList>
    <ListItem color="#404040"><Link>About us</Link></ListItem>
    <ListItem color="#404040"><Link>Cookies Policy</Link></ListItem>
    <ListItem color="#404040"><Link>Privacy Policy</Link></ListItem>
    <ListItem color="#404040"><Link>Terms of use</Link></ListItem>
  </UnorderedList>
  </GridItem> 
</Grid>

<Box textAlign='center' p='3' color='#737373'  borderTop="1px solid #737373">
  <Text color='#737373' fontSize='xs'>
   Nowayhome Copyright © 2022 All rights reserved
  </Text>
</Box>

{/* Bot  <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1%22%3E"></script>

<df-messenger
  intent="WELCOME"
  chat-title="NoWayBot"
  agent-id="0bbaa2eb-b1d4-4547-9f23-7698561c3f5d"
  language-code="en"
  expand="true"
  chat-icon="https://thodoris.eu/wp-content/uploads/2022/06/test-123-modified.png"
></df-messenger>  */}



<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1%22%3E"></script>
<df-messenger
  intent="WELCOME"
  chat-title="NoWayBot"
  agent-id="0bbaa2eb-b1d4-4547-9f23-7698561c3f5d"
  language-code="en"
  chat-icon="https://thodoris.eu/wp-content/uploads/2022/06/logo-chat-modified.png"
></df-messenger>

</div>
);

export default Footer;