'use client'
//chakra ui
import { Box} from '@chakra-ui/react'
//next element
import Image from 'next/image'

import HorizontalScroll from 'react-scroll-horizontal'

const ImageScrollBar = ({data}) => {
    
  return (
    <Box width="100%" height={500}>
        <HorizontalScroll reverseScroll={true} >
            {
            data.map((item) => (
                <Box minWidth={500} itemId={item.id} overflow='hidden' p='1'>
                    <Image placeholder="blur" 
                    blurDataURL={item.url} 
                    src={item.url} 
                    width={700} 
                    height={300}  
                    sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                    alt='nothing' />
                </Box>
                ))
            }
        </HorizontalScroll>
    </Box>

      
  )
}

export default ImageScrollBar