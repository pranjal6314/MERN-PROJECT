import { Container, VStack, Heading, FormLabel, Input, Box, Button, Textarea } from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { contactUs } from '../../Redux/actions/other.js';
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const dispatch = useDispatch();

    const {
        loading,
        error,
        message: stateMessage,
    } = useSelector(state => state.other);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(contactUs(name, email, message));
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
                <Heading children="Contact Us" />
                <form onSubmit={submitHandler} style={{ width: "100%" }}>
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


                    <Button isLoading={loading} my="4" type='submit' colorScheme={"green"}>Send Mail</Button>
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
