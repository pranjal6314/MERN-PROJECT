import React, { useState } from 'react'
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../Redux/actions/profile';
import { loadUser } from '../../Redux/actions/user';
const UpdateProfile = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.profile);
    const submitHandler = async e => {
        e.preventDefault();
        await dispatch(updateProfile(name, email));
        dispatch(loadUser());
        navigate('/profile');
    };
    return <Container py="16" minH={'90vh'}>
        <form onSubmit={submitHandler} >
            < Heading textTransform={"uppercase"} children="Update Profile" my='16' textAlign={['center', 'left']} />
            <VStack spacing={"8"}>
                <Input autoComplete="on" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Name" type={"text"} focusBorderColor="green.500" />

                <Input required autoComplete="on" value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="Email" type={"email"} focusBorderColor="green.500" />
                <Button isLoading={loading} colorScheme={"green"} w='full' type='submit'>Change</Button>
            </VStack>
        </form>

    </Container >
}

export default UpdateProfile
