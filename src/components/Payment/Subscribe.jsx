import React, { useEffect, useState } from 'react'
import { Container, VStack, Heading, Stack, Avatar, Text, Button, Box, HStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { buySubscription } from '../../Redux/actions/user'
import { server } from '../../Redux/Store'; import toast from 'react-hot-toast';
const Subscribe = ({ user }) => {
    const dispatch = useDispatch();
    const [key, setKey] = useState('');
    const { loading, error, subscriptionId } = useSelector(
        state => state.subscription
    );
    const { error: courseError } = useSelector(state => state.course);

    const subscribeHandler = async () => {
        const {
            data: { key },
        } = await axios.get(`${server}/razorpaykey`);

        setKey(key);
        dispatch(buySubscription());
    };
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (courseError) {
            toast.error(courseError);
            dispatch({ type: 'clearError' });
        }
        if (subscriptionId) {
            const openPopUp = () => {
                const options = {
                    key,
                    name: 'CourseBundler',
                    description: 'Get access to all premium content',
                    // image: logo,
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill: {
                        name: user.name,
                        email: user.email,
                        contact: '',
                    },
                    notes: {
                        address: '6 pack programmer at youtube',
                    },
                    theme: {
                        color: '#FFC800',
                    },
                };

                const razor = new window.Razorpay(options);
                razor.open();
            };
            openPopUp();
        }
    }, [
        dispatch,
        error,
        courseError,
        user.name,
        user.email,
        key,
        subscriptionId,
    ]);

    return (
        <Container h={"88vh "} p="16">
            <Heading children="Welcome" my="8" textAlign={"center"} />
            <VStack boxShadow={"lg"} alignItems="stretch" borderRadius={"lg"} spacing='0'>
                <Box bg="green.400" p='4' css={{ borderRadius: "8px 8px 0 0" }} >
                    <Text fontWeight={'bold'} children={`Pro Pack- ₹199`} />
                </Box>
                <Box p='4'>
                    <VStack textAlign={'center'} px='8' mt='4' spacing={'8'} >
                        <Text children={`Join Pro Pack to get access to all content.`} />
                        <Heading size="md" children={'₹199 Only'} />
                    </VStack>
                    <Button my="8" w='full' colorScheme={'green'} onClick={subscribeHandler}>Buy Now</Button>
                </Box>
                <Box bg="blackAlpha.600" p='4' css={{ borderRadius: '0 0 8px 8px' }}  >
                    <Heading color={'white'} size='sm' children="100% refund ar cancellation " />
                    <Text color={'white'} fontSize="xs" children="Terms & Condition Apply" />
                </Box>
            </VStack>
        </Container>
    )
}

export default Subscribe
