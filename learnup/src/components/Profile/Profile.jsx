import React, { useEffect } from 'react'
import { Container, VStack, Heading, Stack, Avatar, Text, Button, Box, HStack, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Input, ModalFooter, useDisclosure, ModalHeader } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { RiDeleteBack2Fill, RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Signup';
import { useDispatch } from 'react-redux';
import { removeFromPlaylist, updateProfilePicture } from '../../Redux/actions/profile';
import { cancelSubscription, loadUser } from '../../Redux/actions/user';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
const Profile = ({ user }) => {
    const dispatch = useDispatch();

    const removeCourseFromPlaylist = async (id) => {
        await dispatch(removeFromPlaylist(id));
        dispatch(loadUser());
    }
    const { loading, message, error } = useSelector(state => state.profile);
    const {
        loading: subscriptionLoading,
        message: subscriptionMessage,
        error: subscriptionError,
    } = useSelector(state => state.subscription);
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
        if (subscriptionMessage) {
            toast.success(subscriptionMessage);
            dispatch({ type: 'clearMessage' });
            dispatch(loadUser());
        }

        if (subscriptionError) {
            toast.error(subscriptionError);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, error, message, subscriptionError, subscriptionMessage]);

    const changeImageHandler = async (e, image) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('file', image);
        await dispatch(updateProfilePicture(myForm));
        dispatch(loadUser());
    }
    const cancelSubscriptionHandler = () => {
        dispatch(cancelSubscription());
    };
    const { isOpen, onClose, onOpen } = useDisclosure();

    return <Container minH={"95vh"} maxW="container.lg" py={"8"} >
        <Heading m="8" children="Profile" />
        <Stack justifyContent={'flex-start'} direction={['column', 'row']} alignItems={'center'} spacing={['8', '16']} padding="8">

            <VStack>
                <Avatar size={'2xl'} boxSize="48" src={user.avatar.url} />
                <Button onClick={onOpen} colorScheme={'green'} variant='ghost'>Change Photo</Button>
            </VStack>
            <VStack spacing={'4'} alignItems={['center', 'flex-start']} >
                <HStack>
                    <Text children="Name:" fontWeight={'bold'} />
                    <Text children={user.name} />
                </HStack>{' '}
                <HStack>
                    <Text children="Email:" fontWeight={'bold'} />
                    <Text children={user.email} />
                </HStack>{' '}
                <HStack>
                    <Text children="CreatedAt:" fontWeight={'bold'} />
                    <Text children={user.createdAt.split("T")[0]} />
                </HStack>
                {
                    user.role !== "admin" && (
                        <HStack>
                            <Text children="Subscribtion" fontWeight={'bold'} />
                            {
                                user.subscription && user.subscription.status === 'active' ? (
                                    <Button isLoading={subscriptionLoading} onClick={cancelSubscriptionHandler} colorScheme={'green'} variant={'ghost'} >Cancel Subscribtion</Button>
                                ) : (
                                    <Link to="/subscribe">
                                        <Button colorScheme={'green'} variant={'solid'} >Subscribe</Button>
                                    </Link>
                                )
                            }
                        </HStack>
                    )
                }
                <Stack direction={['column', 'row']} alignItems={'center'} >
                    <Link to="/updateprofile">
                        <Button colorScheme={'green'} variant={'solid'} >Update Profile</Button>
                    </Link>
                    <Link to="/changepassword">
                        <Button colorScheme={'green'} variant={'solid'} >Update Password</Button>
                    </Link>
                </Stack>
            </VStack>


        </Stack>
        <Heading children="Playlist" my='8' size={'md'} />
        {
            user.playlist.length > 0 && (
                <Stack direction={['column', 'row']} alignItems={'center'} flexWrap='wrap' p='4' >
                    {
                        user.playlist.map((item, index) => (
                            <VStack w='48' key={item.course}>
                                <Image boxSize={'full'} objectFit='contain' src={item.poster}></Image>
                                <HStack>
                                    <Link to={`/courses/${item.course}`}>
                                        <Button colorScheme={'green'} variant='ghost'>Watch Now</Button>
                                    </Link>
                                    <Button isLoading={loading} onClick={() => {
                                        removeCourseFromPlaylist(item.course)
                                    }} ><RiDeleteBin7Fill /> </Button>
                                </HStack>
                            </VStack>
                        ))
                    }
                </Stack>
            )
        }
        <ChangePhotoBox loading={loading} isOpen={isOpen} onClose={onClose} changeImageHandler={changeImageHandler} />

    </Container>
}

export default Profile
const ChangePhotoBox = ({ isOpen, onClose, changeImageHandler, loading }) => {
    const [imagePrev, setImagePrev] = React.useState("")
    const [image, setImage] = React.useState("");
    const changeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const closehandler = () => {
        onClose();
        setImagePrev('');
        setImage('');

    }
    return (
        <Modal isOpen={isOpen} onClose={closehandler}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalHeader>Change Profile Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e) => changeImageHandler(e, image)}>
                            <VStack spacing={'8'}>
                                {
                                    imagePrev && <Avatar src={imagePrev} boxSize={'48'} />
                                }
                                <Input textColor={'black'} type={'file'} css={{ '&::file-selector-button': fileUploadCss }} onChange={changeImage} />
                                <Button isLoading={loading} w='full' type='submit' colorScheme='green' >Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter mr='3'><Button onClick={closehandler}>Cancel</Button></ModalFooter>
            </ModalContent>
        </Modal>
    )
}