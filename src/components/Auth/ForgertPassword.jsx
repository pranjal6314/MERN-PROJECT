import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../Redux/actions/profile';
const ForgertPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState("")
    const { loading, message, error } = useSelector(state => state.profile);
    const submitHandler = e => {
        e.preventDefault();
        dispatch(forgetPassword(email));
    };
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message]);
    return <Container py="16" height={"90vh"}>
        <form onSubmit={submitHandler}>
            <Heading children="Forget Password" my="16" textTransform={"uppercase"} textAlign={["center", "left"]} />
            <VStack spacing={3}>
                <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" type={"email"} focusBorderColor="green.500" />
                <Button isLoading={loading} type="submit" w="full" colorScheme={"yellow"}> Send Reset Link</Button>
            </VStack>

        </form>
    </Container>
}

export default ForgertPassword
