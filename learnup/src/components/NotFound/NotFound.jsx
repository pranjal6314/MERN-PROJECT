import React from 'react'
import { Container, VStack, Heading, Stack, Avatar, Text, Button, Box, HStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri'
const NotFound = () => {
    return (
        <Container h="85.8vh" p='16'>
            <VStack spacing={'4'} justifyContent='center' h='full' >
                <RiErrorWarningFill size={'5rem'} />
                <Heading children="Page Not Found" />
                <Link to="/">
                    <Button variant={'ghost'} >Home</Button>
                </Link>
            </VStack>
        </Container >
    )
}

export default NotFound
