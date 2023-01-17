import React from 'react'
import { Button, Container, Text, Heading, HStack, Input, Stack, VStack, Image, Link, Box } from '@chakra-ui/react'
import { TiSocialYoutubeCircular, TiSocialLinkedinCircular, TiSocialInstagramCircular } from "react-icons/ti"
import { DiGithub } from 'react-icons/di'
const Footer = () => {
    return <Box padding={'4'} bg='blackAlpha.700' minH='10vh'>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={['center', 'flex-start']} width='full'>
                <Heading children="All Rights Reserved" color={"white"} />
                <Heading size="sm" fontFamily={"body"} color={"green.300"} children="@Pranjal6314" />
            </VStack>
            <HStack spacing={['2', '10']} justifyContent={"center"} color="white" fontSize={"50"}>
                <a href='/' target={"_blank"}>
                    <TiSocialInstagramCircular />
                </a>
                <a href='/' target={"_blank"}>
                    <TiSocialYoutubeCircular />
                </a>
                <a href='/' target={"_blank"}>
                    <TiSocialLinkedinCircular />
                </a>
                <a href='/' target={"_blank"}>
                    <DiGithub />
                </a>

            </HStack>
        </Stack>
    </Box>

}

export default Footer
