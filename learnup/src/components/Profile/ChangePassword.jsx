import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../Redux/actions/profile';
import toast from 'react-hot-toast';
const ChangePassword = () => {
    const [Oldpassword, setOldPassword] = useState("")
    const [Newpassword, setNewPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = async e => {
        e.preventDefault();
        dispatch(changePassword(Oldpassword, Newpassword));

    };
    const { loading, message, error } = useSelector(state => state.profile);

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
    return <Container py="16" minH={'90vh'}>
        <form onSubmit={submitHandler} >
            < Heading textTransform={"uppercase"} children="Change Password" my='16' textAlign={['center', 'left']} />
            <VStack spacing={"8"}>
                <Input required autoComplete="on" value={Oldpassword}
                    onChange={(e) => setOldPassword(e.target.value)} placeholder="Enter Old Password" type={"password"} focusBorderColor="green.500" />

                <Input required autoComplete="on" value={Newpassword}
                    onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter New Password" type={"password"} focusBorderColor="green.500" />
                <Button isLoading={loading} colorScheme={"green"} w='full' type='submit'>Change</Button>
            </VStack>
        </form>

    </Container >
}

export default ChangePassword
