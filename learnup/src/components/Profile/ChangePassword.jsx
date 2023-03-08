import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../Redux/actions/profile';

const ChangePassword = () => {
    const [Oldpassword, setOldPassword] = useState("")
    const [Newpassword, setNewPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = async e => {
        e.preventDefault();
        dispatch(changePassword(Oldpassword, Newpassword));

    };

    return <Container py="16" minH={'90vh'}>
        <form onSubmit={submitHandler} >
            < Heading textTransform={"uppercase"} children="Change Password" my='16' textAlign={['center', 'left']} />
            <VStack spacing={"8"}>
                <Input required autoComplete="on" value={Oldpassword}
                    onChange={(e) => setOldPassword(e.target.value)} placeholder="Enter Old Password" type={"password"} focusBorderColor="green.500" />

                <Input required autoComplete="on" value={Newpassword}
                    onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter New Password" type={"password"} focusBorderColor="green.500" />
                <Button colorScheme={"green"} w='full' type='submit'>Change</Button>
            </VStack>
        </form>

    </Container >
}

export default ChangePassword
