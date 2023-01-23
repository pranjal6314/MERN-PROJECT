import { Container, VStack, Heading, FormLabel, Input, Box, Button, Textarea } from '@chakra-ui/react'
import { React, useState } from 'react'
import { Link } from "react-router-dom"
const Request = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")
    return (
        <Container h="92vh">
            <VStack h="full" justifyContent={"center"}>
                <Heading children="Request a Course" />
                <form style={{ width: "100%" }}>
                    <Box my="4" >
                        <FormLabel htmlFor='name' children="Name " />
                        <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="ABC" type={"text"} focusBorderColor="green.500" />
                    </Box>
                    <Box my="4" >
                        <FormLabel htmlFor='course' children="Course " />
                        <Textarea required id="course" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Explain the course..." focusBorderColor="green.500" />
                    </Box>
                    <Box my="4" >
                        <FormLabel htmlFor='email' children="Email Address" />
                        <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" type={"email"} focusBorderColor="green.500" />
                    </Box>


                    <Button my="4" type='submit' colorScheme={"green"}>Send Mail</Button>
                    <Box my="4">
                        See Available Courses ?{" "}
                        <Link to="/courses">
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


export default Request
