// import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
// import { Avatar } from '@chakra-ui/avatar';
// import { FaBed, FaBath } from 'react-icons/fa';
// import { BsGridFill } from 'react-icons/bs';
// import { GoVerified } from 'react-icons/go';
// import millify from 'millify';

// import { baseUrl, fetchApi } from '../../utils/fetchApi';
// //import ImageScrollbar from '../../components/ImageScrollbar';

// const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
//   <Box maxWidth='1000px' margin='auto' p='4'>
//     {photos && <ImageScrollbar data={photos} />}
//     <Box w='full' p='6'>
//       <Flex paddingTop='2' alignItems='center'>
//         <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
//         <Text fontWeight='bold' fontSize='lg'>
//         € {price} {rentFrequency && `/${rentFrequency}`}
//         </Text>
//         <Spacer />
//         <Avatar size='sm' src={agency?.logo?.url}></Avatar>
//       </Flex>
//       <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
//         {rooms}<FaBed /> | {baths} <FaBath /> | {area} m2 <BsGridFill />
//       </Flex>
//     </Box>
//     <Box marginTop='2'>
//       <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
//       <Text lineHeight='2' color='gray.600'>{description}</Text>
//     </Box>
//     <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
//       <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
//         <Text>Type</Text>
//         <Text fontWeight='bold'>{type}</Text>
//       </Flex>
//       <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
//         <Text>Purpose</Text>
//         <Text fontWeight='bold'>{purpose}</Text>
//       </Flex>
//       {furnishingStatus && (
//         <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
//           <Text>Furnishing Status</Text>
//           <Text fontWeight='bold'>{furnishingStatus}</Text>
//         </Flex>
//       )}
//     </Flex>
//     {/* <Box>
//       {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
//         <Flex flexWrap='wrap'>
//           {amenities?.map((item) => (
//               item?.amenities?.map((amenity) => (
//                 <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
//                   {amenity.text}
//                 </Text>
//               ))
//           ))}
//         </Flex>
//     </Box> */}
//   </Box>
// );

// export default PropertyDetails;

// export async function getServerSideProps({ params: { _id } }) {
//   const data = await fetchApi(`${baseUrl}/api/properties/${_id}`);
  
//   return {
//     props: {
//       propertyDetails: data,
//     },
//   };
// }
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { PhoneIcon } from '@chakra-ui/icons'
import { Button, Icon } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Navbar from '../../components/Navbar';
import SocialSection from '../../components/SocialSection';
import Footer from '../../components/Footer';
import Image from 'next/image';
import DefaultImage from '../../assets/images/house.jpg';
import {useUser} from '@auth0/nextjs-auth0';


import { baseUrl, fetchApi } from '../../utils/fetchApi';
//import ImageScrollbar from '../../components/ImageScrollbar';




function myFunction() {
  document.getElementById("phone_num").innerHTML = {_id};
}

const PropertyDetails = ({ propertyDetails: { coverPhoto, _id, telNumber, price, rentFrequency, agencyUrl, rooms, title, baths, area, agency, isVerified, description, type, purpose, locationExternalIDs, year, photos, level, heat, energyClass, kitchens, livingRooms, latitude, longitude } }) => (
  
  <Box>
  <Box maxWidth='1800px' margin='auto' p='4'>

    
  <Box maxWidth='1000px' margin='auto' p='4' marginBottom={10}>
  <Image src={coverPhoto ? coverPhoto : DefaultImage} width={1100} height={650} />
    {photos && <ImageScrollbar data={photos} />}
    <Box w='full' p='6'>
      <Flex paddingTop='2' alignItems='center'>
        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
        <Text fontWeight='bold' fontSize='xl'>
        € {price} {rentFrequency && `/${rentFrequency}`}
        </Text>
        <Spacer />
        <Avatar size='md' src={agencyUrl}></Avatar>
        <Flex justifyContent='end' p='3'>
        <Text fontWeight='bold'>{agency}</Text>
      </Flex>
      </Flex>
      <Flex alignItems='center' p='1' justifyContent='space-between' w='200px' color='black'>
        {rooms}<FaBed /> | {baths} <FaBath /> | {area} m2 
      </Flex>
    </Box>
    <Box marginTop='2'>
      <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
      <Text lineHeight='2' color='gray.600'>{description}</Text>
    </Box>
    <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
     
      
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Purpose</Text>
        <Text fontWeight='bold'>{purpose}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>City</Text>
        <Text fontWeight='bold'>{locationExternalIDs}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Rooms</Text>
        <Text fontWeight='bold'>{rooms}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Baths</Text>
        <Text fontWeight='bold'>{baths}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Kitchens</Text>
        <Text fontWeight='bold'>{kitchens}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Livingrooms</Text>
        <Text fontWeight='bold'>{livingRooms}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Area</Text>
        <Text fontWeight='bold'>{area} m²</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Year</Text>
        <Text fontWeight='bold'>{year}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Level</Text>
        <Text fontWeight='bold'>{level}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Heat</Text>
        <Text fontWeight='bold'>{heat}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Energy Class</Text>
        <Text fontWeight='bold'>{energyClass}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>ID</Text>
        <Text fontWeight='bold'>{_id}</Text>
      </Flex>
      
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
      <Button onClick={() => document.getElementById("phone_num").innerHTML = telNumber} variant='outline' colorScheme="black">Phone number</Button> <Text id="phone_num"></Text>
</Flex>
      

     
    </Flex>
    {/* <Box>
      {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
        <Flex flexWrap='wrap'>
          {amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                  {amenity.text}
                </Text>
              ))
          ))}
        </Flex>
    </Box> */}
  </Box>
  </Box>
  {/* bug with rent and buy page */}
  <SocialSection />
        <footer>
          <Footer />
        </footer>
            <Navbar />
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { _id } }) {
  const data = await fetchApi(`${baseUrl}/api/properties/${_id}`);
  
  return {
    props: {
      propertyDetails: data,
    },
  };
}