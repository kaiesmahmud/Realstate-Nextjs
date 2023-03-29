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
                <Image src={coverPhoto ? coverPhoto.url : defaultImg } height={260} width={400} alt="house" />
            </Box>
            <Box w="full">
                <Flex pt={2} alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box>
                            {
                                isVerified && <GoVerified/>
                            }
                        </Box>
                        <Text fontWeight="bold" fontSize="lg">
                            AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
                        </Text>
                    </Flex>
                    <box>
                        <Avatar size="md" src={agency?.logo?.url} />
                    </box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250" color="blue.400">
                    <Flex gap={3} alignItems="center">{rooms} <FaBed/> </Flex>|
                    <Flex gap={3} alignItems="center"> {baths} <FaBath/> </Flex>|
                    <Flex gap={3} alignItems="center">{millify(area)} sqft <BsGridFill/></Flex>
                </Flex>
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substr(0,30)}...` : title }
                </Text>
            </Box>
        </Flex>
    </Link>
  )


export default Property;