import { Container, VStack, Heading, FormLabel, Input, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    return <Container height={"95vh"}>
        <VStack height={"full"} justifyContent="center" spacing={"16"}>
            <Heading children="Welcome To LearnUp" />
            <form style={{ width: "100%" }}>
                <Box my="4" >
                    <FormLabel htmlFor='email' children="Email Address" />
                    <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" type={"email"} focusBorderColor="green.500" />
                </Box>
                <Box my="4" >
                    <FormLabel htmlFor='password' children="Password" />
                    <Input required id="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type={"password"} focusBorderColor="green.500" />
                </Box>
                <Box >
                    <Link to="/forgetpassword"> <Button fontSize={"sm"} variant="link">Forget Password?</Button></Link>
                </Box>
                <Button my="4" type='submit' colorScheme={"green"}>Login</Button>
                <Box my="4">
                    New User ?{" "}
                    <Link to="/signup">
                        <Button colorScheme={"green.500"} variant="link">
                            Sign Up
                        </Button>
                    </Link>{" "} Here
                </Box>
            </form>
        </VStack>
    </Container >
}

export default Signup
