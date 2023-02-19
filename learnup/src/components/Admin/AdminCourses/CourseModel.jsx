import { Box, Button, Grid, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const CourseModel = ({ isOpen, onClose, id, deleteButtonHandler, addLectureHandle, courseTitle, lectures = {} }) => {

    return <Modal isOpen={isOpen} size='full'>
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
                </Grid>

            </ModalBody>
        </ModalContent>

    </Modal>
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