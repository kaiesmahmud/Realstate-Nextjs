//Next Elements
import Image from 'next/image';
import Link from 'next/link';

//Millify
import millify from 'millify';

//chakra UI
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

// icons 
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import { GoVerified} from 'react-icons/go'

//Default Image
import defaultImg from '../assets/images/house.jpg'

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => (
    <Link href={`/property/${externalID}`} passHref>
        {title}
        <Flex flexWrap="wrap" w="420px" p="5" pt="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : defaultImg } />
            </Box>
        </Flex>
    </Link>
  )


export default Property;