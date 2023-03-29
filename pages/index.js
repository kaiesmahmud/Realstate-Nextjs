//Next elements
import Image from 'next/image'
import Link from 'next/link'
//components
import Property from '@/components/Property'
//fetchapi from utils
import { baseUrl, fetchApi } from '@/utils/fetchApi'
//chakra ui
import { Box, Button, Flex, Text } from '@chakra-ui/react'

const Banner = ({purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize={'sm'} fontWeight="medium" >{purpose}</Text>
      <Text fontSize={'3xl'} fontWeight="bold" >{title1} <br />{title2} </Text>
      <Text fontSize={'lg'} pt="3" pb="3" color="gray.700">{desc1} <br />{desc2}</Text>
      <Button fontSize="xl" bg="blue.500" color={"gray.500"} >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
      
    </Box>
  </Flex>
)

export default function Home({propertiesForSale, propertiesForRent }) {
  console.log(propertiesForRent)
  console.log(propertiesForSale)
  return (
    <>
      <main>
        <Box>
          <Banner
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Villas, Homes"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          />
          <Flex flexWrap="wrap" alignItems={'center'} justifyContent="center" >
            {/* Fetch properties For Rent and map over them */}
            {
              propertiesForRent.map((property)=> <Property property={property} key={property.id} />) 
            }
          </Flex>
          <Banner
          purpose="BUY A HOME"
          title1="Find Buy & own your"
          title2="Dream Home"
          desc1="Explore Apartments, Villas, Homes"
          desc2="and more"
          buttonText="Explore Buying"
          linkName="/search?purpose=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          />
          <Flex flexWrap="wrap" alignItems={'center'} justifyContent="center" >
            {/* Fetch properties For Sale and map over them */}
            {
              propertiesForSale.map((property)=> <Property property={property} key={property.id} />) 
            }
          </Flex>
        </Box>
      </main>
    </>
  )
}

export const getStaticProps = async() => {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props:{
      propertiesForSale : propertyForSale?.hits,
      propertiesForRent : propertyForRent?.hits
    }
  }
}