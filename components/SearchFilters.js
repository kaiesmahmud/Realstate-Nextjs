'use client'
import  { useState } from 'react'

//chakra ui
import { Box, Flex, Select } from '@chakra-ui/react'

//Next element
import { useRouter } from 'next/router'

//filterData from utils
import { filterData, getFilterValues } from '@/utils/filterData'


const SearchFilters = () => {
    
    const router = useRouter();
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues) => {
        const path = router.pathname ;
        const {query} = router;
        const values = getFilterValues(filterValues);
        values?.forEach(item => {
            if(item.value && filterValues?.[item.name]){
                query[item.name] = item.value ;
            }
            
        })
        router.push({pathname: path , query})
    }
    
  return (
    <Flex bg="gray.100" p='4' justifyContent="center" flexWrap="wrap" >
        {
            filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                     onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}
                     placeholder={filter.placeholder}
                     w="fit-content"
                     p='2'
                     >
                        {
                            filter?.items?.map((item) =>  (
                                <option value={item.value} key={item.value} >
                                    {item.name}
                                </option>
                            ))
                        }
                    </Select>
                </Box>
            ))
        }
    </Flex>
  )
}

export default SearchFilters