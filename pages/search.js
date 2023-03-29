import React, { useState } from 'react'
//Nextjs element
import Image from 'next/image'
import { useRouter } from 'next/router'

//chakra ui
import { Box, Flex, Text, Icon } from '@chakra-ui/react'

//icons
import { BsFilter } from 'react-icons/bs'

//components
import SearchFilters from '@/components/SearchFilters'
import Property from '@/components/Property'

//image
import noResult from '../assets/images/noresult.svg'

//fetch api from utils
import { baseUrl, fetchApi } from '@/utils/fetchApi'

const search = ({properties}) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const rounter = useRouter();
  return (
    <Box>
        <Flex 
         cursor="pointer"
         bg="gray.100"
         borderBottom="1px"
         borderColor="gray.200"
         p='2'
         fontWeight="black"
         fontSize="lg"
         justifyContent="center"
         alignItems="center"
         onClick={()=> setSearchFilters(!searchFilters)}
        >
            <Text>
                Search Property by Filters
            </Text>
            <Icon paddingLeft='2' w='7' as={BsFilter} />
        </Flex>
        {
            searchFilters && "hello"
        }
        {
            searchFilters && <SearchFilters />
        }
        <Text fontSize="2xl" p="4" fontWeight="bold" >
            Properties { rounter.query.purpose}
        </Text>
        <Flex flexWrap="wrap" alignSelf="center" alignItems="center" justifyContent="center">
            {
                properties.map((property)=> <Property property={property} />)
            }
        </Flex>
        {
            properties.length === 0 && (
                <Flex
                 justifyContent="center"
                 alignItems="center"
                 flexDirection="column"
                 mt={5}
                 mb={5}
                >
                    <Image src={noResult} alt="noresult" />
                    <Text fontSize="2xl" mt="3">
                        No Results Found !
                    </Text>
                </Flex>
            )
        }
    </Box>
  )
}

export default search;

export const getServerSideProps  = async({query}) => {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
      props:{
        properties: data?.hits,
      }
    }
  }