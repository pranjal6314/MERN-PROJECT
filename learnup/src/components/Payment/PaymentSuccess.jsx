import React from 'react'
import { Container, VStack, Heading, Stack, Avatar, Text, Button, Box, HStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { RiCheckboxCircleFill } from 'react-icons/ri'
const PaymentSuccess = () => {
    return (
        <Container h="88vh" p='16'>
            <Heading my={'8'} textAlign='center'> You Have Pro Pack</Heading>
            <VStack boxShadow={"lg"} alignItems='center' borderRadius={"lg"} spacing='0' p='4' >
                <Box w='full' bg='green.400' p='4' css={{ borderRadius: "8px 8px 0 0 " }}>
                    <Text color={'black'}>Payment Success </Text>
                </Box>
                <Box p='4'>
                    <VStack textAlign={'center'} px='8' spacing={'8'} mt='4'>
                        <em>Thank you for your payment. <b>Congratulation</b>  You're a pro member . You have access to Premium</em>
                        <Heading size='4xl'>
                            <RiCheckboxCircleFill />
                        </Heading>

                    </VStack>
                </Box>
                <Link to="/profile">
                    <Button variant={'ghost'} >Go To Profile</Button>
                </Link>
                <Heading size='xs'>Reference : Pranjal </Heading>
            </VStack>
        </Container >
    )
}

export default PaymentSuccess
