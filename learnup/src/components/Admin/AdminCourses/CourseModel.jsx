import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from '../CreateCourse/CreateCourse';

const CourseModel = ({ isOpen, onClose, id, deleteButtonHandler, addLectureHandle, courseTitle, lectures = {} }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('')
    const [videoPrev, setVideoPrev] = useState('')
    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        console.log('file', file)
        reader.onload = () => {
            setVideoPrev(reader.result)
            setVideo(file)
        }
    }
    const handleClose = () => {
        setTitle('')
        setDescription('')
        setVideo('')
        setVideoPrev('')
        onClose()
    }
    return <Modal isOpen={isOpen} size='full' onClose={handleClose} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{courseTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody p='16'>
                <Grid templateColumns={['1fr', '3fr 1fr']} >
                    <Box px={['0', '16']}>
                        <Box my='5'>
                            <Heading children={courseTitle} />
                            <Heading children={`#${id}`} size='sm' opacity={'0.4'} />
                        </Box>
                        <Heading children='lectures' size={'lg'} />
                        <VideoCard title="react intro" num={1} description="intro lecture basic only" lectureId="234232" courseId={id} deleteButtonHandler={deleteButtonHandler} />
                    </Box>
                    <Box>
                        <form onSubmit={e => addLectureHandle(e, id, title, description, video)}>
                            <VStack spacing={'4'}>
                                <Heading children="Add Leacture" size={'sm'} textTransform='uppercase' />
                                <Input placeholder='Title' focusBorderColor='green.300' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                <Input placeholder='Description' focusBorderColor='green.300' value={title} onChange={(e) => { setDescription(e.target.value) }} />
                                <Input accept='video/mp4' required type={"file"} focusBorderColor="green.500" css={{
                                    '&::file-selector-button': {
                                        ...fileUploadCss, color: 'green'
                                    }
                                }} onChange={changeVideoHandler} />
                                {
                                    videoPrev && (
                                        <video controlsList='nodownload' controls src={videoPrev}></video>
                                    )
                                }
                                <Button w='full' colorScheme={'green'} type='submit'>Upload</Button>
                            </VStack>
                        </form>
                    </Box>
                </Grid>

            </ModalBody>
            <ModalFooter>
                <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
        </ModalContent>

    </Modal >
}

export default CourseModel

function VideoCard({ title, num, description, lectureId, courseId, deleteButtonHandler }) {
    return <Stack justifyContent={['flex-start', 'space-between']} p={['4', '8']} my='8' borderRadius={'lg'} boxShadow={'0 0 10px rgba(46, 255, 25, 0.8)'} direction={['column', 'row']}>
        <Box><Heading size="sm" children={`#${num} ${title}`} />
            <Text children={description} />
        </Box>
        <Button color={"green.500"} onClick={() => deleteButtonHandler(courseId, lectureId)}>
            <RiDeleteBin7Fill />
        </Button>
    </Stack>
}