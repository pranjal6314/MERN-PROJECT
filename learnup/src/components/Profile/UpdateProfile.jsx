import React, { useState } from 'react'
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'

const UpdateProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return <Container py="16" minH={'90vh'}>
        <form >
            < Heading textTransform={"uppercase"} children="Update Profile" my='16' textAlign={['center', 'left']} />
            <VStack spacing={"8"}>
                <Input autoComplete="on" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Name" type={"text"} focusBorderColor="green.500" />

                <Input required autoComplete="on" value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="Email" type={"email"} focusBorderColor="green.500" />
                <Button colorScheme={"green"} w='full' type='submit'>Change</Button>
            </VStack>
        </form>

    </Container >
}

export default UpdateProfile
