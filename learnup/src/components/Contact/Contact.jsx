import { Container, VStack, Heading, FormLabel, Input, Box, Button, Textarea } from '@chakra-ui/react'
import { React, useState } from 'react'
import { Link } from "react-router-dom"
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    return (
        <Container h="92vh">
            <VStack h="full" justifyContent={"center"}>
                <Heading children="Contact Us" />
                <form style={{ width: "100%" }}>
                    <Box my="4" >
                        <FormLabel htmlFor='name' children="Name " />
                        <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="ABC" type={"text"} focusBorderColor="green.500" />
                    </Box>
                    <Box my="4" >
                        <FormLabel htmlFor='message' children="Message " />
                        <Textarea required id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message..." focusBorderColor="green.500" />
                    </Box>
                    <Box my="4" >
                        <FormLabel htmlFor='email' children="Email Address" />
                        <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" type={"email"} focusBorderColor="green.500" />
                    </Box>


                    <Button my="4" type='submit' colorScheme={"green"}>Send Mail</Button>
                    <Box my="4">
                        Request For a Course ?{" "}
                        <Link to="/request">
                            <Button colorScheme={"green.500"} variant="link">
                                Click
                            </Button>
                        </Link>{" "} Here
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Contact
