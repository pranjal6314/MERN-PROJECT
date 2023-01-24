import React from 'react'
import { Container, VStack, Heading, Stack, Avatar, Text, Button, Box, HStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
const Profile = () => {
    const user = {
        name: "pranjal",
        email: "pranjalchoudhary270@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: "user",
        subscription: {
            status: undefined,
        }
    }
    return <Container minH={"95vh"} maxW="container.lg" py={"8"} >
        <Heading m="8" children="Profile" />
        <Stack justifyContent={'flex-start'} direction={['column', 'row']} alignItems={'center'} spacing={['8', '16']} padding="8">

            <VStack>
                <Avatar size={'2xl'} boxSize="48" />
                <Button colorScheme={'green'} variant='ghost'>Change Photo</Button>
            </VStack>
            <VStack spacing={'4'} alignItems={['center', 'flex-start']} >
                <HStack>
                    <Text children="Name:" fontWeight={'bold'} />
                    <Text children={user.name} />
                </HStack>{' '}
                <HStack>
                    <Text children="Email:" fontWeight={'bold'} />
                    <Text children={user.email} />
                </HStack>{' '}
                <HStack>
                    <Text children="CreatedAt:" fontWeight={'bold'} />
                    <Text children={user.createdAt.split("T")[0]} />
                </HStack>
                {
                    user.role !== "admin" && (
                        <HStack>
                            <Text children="Subscribtion" fontWeight={'bold'} />
                            {
                                user.subscription.status === 'active' ? (
                                    <Button colorScheme={'green'} variant={'ghost'} >Cancel Subscribtion</Button>
                                ) : (
                                    <Link to="/subscribe">
                                        <Button colorScheme={'green'} variant={'solid'} >Subscribe</Button>
                                    </Link>
                                )
                            }
                        </HStack>
                    )
                }
            </VStack>
        </Stack>
    </Container>
}

export default Profile
