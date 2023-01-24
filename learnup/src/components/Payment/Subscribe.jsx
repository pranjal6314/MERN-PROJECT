import React from 'react'
import { Container, VStack, Heading, Stack, Avatar, Text, Button, Box, HStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
const Subscribe = () => {
    return (
        <Container h={"88vh "} p="16">
            <Heading children="Welcome" my="8" textAlign={"center"} />
            <VStack boxShadow={"lg"} alignItems="stretch" borderRadius={"lg"} spacing='0'>
                <Box bg="green.400" p='4' css={{ borderRadius: "8px 8px 0 0" }} >
                    <Text fontWeight={'bold'} children={`Pro Pack- ₹199`} />
                </Box>
                <Box p='4'>
                    <VStack textAlign={'center'} px='8' mt='4' spacing={'8'} >
                        <Text children={`Join Pro Pack to get access to all content.`} />
                        <Heading size="md" children={'₹199 Only'} />
                    </VStack>
                    <Button my="8" w='full' colorScheme={'green'} >Buy Now</Button>
                </Box>
                <Box bg="blackAlpha.600" p='4' css={{ borderRadius: '0 0 8px 8px' }}  >
                    <Heading color={'white'} size='sm' children="100% refund ar cancellation " />
                    <Text color={'white'} fontSize="xs" children="Terms & Condition Apply" />
                </Box>
            </VStack>
        </Container>
    )
}

export default Subscribe
