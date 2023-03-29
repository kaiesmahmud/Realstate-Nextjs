'use client'
import React, { useEffect, useState } from 'react'

//chakra ui
import { Box, Flex, Text, Icon, Select, Spinner } from '@chakra-ui/react'

//Next element
import Image from 'next/image'
import { useRouter } from 'next/router'

//react-icons
import {MdCancel} from 'react-icons/md'


const SearchFilters = () => {
    const rounter = useRouter();
    const [filters, setFilters] = useState({})
  return (
    <Flex bg="gray.100" p='4' justifyContent="center" flexWrap="wrap" >
        
    </Flex>
  )
}

export default SearchFilters