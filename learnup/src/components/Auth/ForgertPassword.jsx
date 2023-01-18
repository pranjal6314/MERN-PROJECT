import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

const ForgertPassword = () => {
    const [email, setEmail] = React.useState("")
    return <Container py="16" height={"90vh"}>
        <form>
            <Heading children="Forget Password" my="16" textTransform={"uppercase"} textAlign={["center", "left"]} />
            <VStack spacing={3}>
                <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" type={"email"} focusBorderColor="green.500" />
                <Button type="submit" w="full" colorScheme={"yellow"}> Send Reset Link</Button>
            </VStack>

        </form>
    </Container>
}

export default ForgertPassword
