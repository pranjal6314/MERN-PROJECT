import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../../Redux/actions/profile'
const ResetPassword = () => {
    const [password, setPassword] = React.useState("")
    const params = useParams();
    const navigate = useNavigate();
    const { loading, message, error } = useSelector(state => state.profile);

    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault();
        dispatch(resetPassword(params.token, password));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            navigate('/login');
        }
    }, [dispatch, error, message]);
    return <Container py="16" height={"90vh"}>
        <form onSubmit={submitHandler}>
            <Heading children="Reset Password" my="16" textTransform={"uppercase"} textAlign={["center", "left"]} />
            <VStack spacing={3}>
                <Input required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="new password" type={"password"} focusBorderColor="green.500" />
                <Button isLoading={loading} type="submit" w="full" colorScheme={"yellow"}> Reset Password</Button>
            </VStack>

        </form>
    </Container>
}
export default ResetPassword
