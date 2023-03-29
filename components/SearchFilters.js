'use client'
import React, { useEffect, useState } from 'react'

//chakra ui
import { Box, Flex, Text, Icon, Select, Spinner } from '@chakra-ui/react'

//Next element
import Image from 'next/image'
import { useRouter } from 'next/router'

//react-icons
import {MdCancel} from 'react-icons/md'

//filterData from utils
import { filterData, getFilterValues } from '@/utils/filterData'


const SearchFilters = () => {
    
    const rounter = useRouter();
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues) => {

    }
    
  return (
    <Flex bg="gray.100" p='4' justifyContent="center" flexWrap="wrap" >
        {
            filters.map((filter) => (
                <box key={filter.queryName}>
                    <Select
                     onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}
                     placeholder={filter.placeholder}
                     w="fit-content"
                     p='2'
                     
                     >

                    </Select>
                </box>
            ))
        }
    </Flex>
  )
}

export default SearchFilters