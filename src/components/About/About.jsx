import React from 'react'
import { Container, VStack, Heading, Stack, Avatar, Text, Button, Box, HStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import intro from "../../assets/videos/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'
import termAndCondition from '../../assets/doc/termsAndCondition'
const Founder = () => {
    <Stack direction={['column', 'row']} padding="8" spacing={['4', '16']}>
        <VStack>
            <Avatar boxSize={['40', '48']} />
            <Text children="co-founder" opacity={0.7} />
        </VStack>
        <VStack>
            <Heading children="Pranjal Choudhary" />
            <Text children="Hey! I'm a full-stack developer and You Teacher :)" />
        </VStack>
    </Stack>
}

const About = () => {
    const TandC = ({ termAndCondition }) => {
        <Box>
            <Text size={'md'} children="Term & Condition" textAlign={['center', 'left']} my='4' />
            <Box h='sm' p='4'>
                <Text fontFamily={'heading'} textAlign={['center', 'left']} letterSpacing='widest' >{termAndCondition}</Text>
                <Heading my='4' size={'sm'} children="Refund is only applicable for cancellation within 7 days." />
            </Box>

        </Box >
    }
    return (
        <Container maxW={"container.lg"} boxShadow="lg" padding="16" >
            <Heading children="About Us" textAlign={['center', 'left']} />
            {/* <Founder /> */}
            <Stack direction={['column', 'row']} padding="8" spacing={['4', '16']}>
                <VStack>
                    <Avatar src='https://avatars.githubusercontent.com/u/77271332?s=400&u=eb7ededaa6f7648f0b298cddff282495f40e281e&v=4' boxSize={['40', '48']} />
                    <Text children="co-founder" opacity={0.7} />
                </VStack>
                <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
                    <Heading children="Pranjal Choudhary" />
                    <Text textAlign={['center', 'left']} children="Hey! I'm a full-stack developer and You Teacher :)" />
                </VStack>
            </Stack>
            <Stack direction={['column', 'row']} m="8" alignItems={['center']}>
                <Text fontFamily={'cursive'} textAlign={['center', 'left']} >We are a Video Streaming Platform and We provide some Premium Courses .</Text>
                <Link to="/subscribe">
                    <Button colorScheme="green" variant="ghost" >Check Your Courses</Button>
                </Link>
            </Stack>

            <Box>
                <video autoPlay muted controls controlsList='nodownload nofullscreen noremoteplayback  ' disablePictureInPicture disableRemotePlayback src={intro} ></video>

            </Box>


            <HStack my='4' p='4'>
                <RiSecurePaymentFill />
                <Text size="xs" fontFamily={'sans-serif'} textTransform="uppercase" children="100% Secure Payment by Razorpay" />
            </HStack>

            {/* <TandC termAndCondition={'termAndCondition'} /> */}
            <Box>
                <Text size={'md'} children="Term & Condition" textAlign={['center', 'left']} my='4' />
                <Box h='sm' p='4' overflowY={"scroll"}>
                    <Text fontFamily={'heading'} textAlign={['center', 'left']} letterSpacing='widest' >{termAndCondition}</Text>
                    <Heading my='4' size={'sm'} children="Refund is only applicable for cancellation within 7 days." />
                </Box>

            </Box >
        </Container >
    )
}

export default About
