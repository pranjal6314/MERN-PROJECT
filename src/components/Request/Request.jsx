import { Container, VStack, Heading, FormLabel, Input, Box, Button, Textarea } from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { courseRequest } from '../../Redux/actions/other'
const Request = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")
    const dispatch = useDispatch();
    const {
        loading,
        error,
        message: stateMessage,
    } = useSelector(state => state.other);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(courseRequest(name, email, course));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (stateMessage) {
            toast.success(stateMessage);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, stateMessage]);
    return (
        <Container h="92vh">
            <VStack h="full" justifyContent={"center"}>
                <Heading children="Request a Course" />
                <form onSubmit={submitHandler} style={{ width: "100%" }}>
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


                    <Button isLoading={loading} my="4" type='submit' colorScheme={"green"}>Send Mail</Button>
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
