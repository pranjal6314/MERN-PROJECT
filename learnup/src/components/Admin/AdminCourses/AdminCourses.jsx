import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin2Fill, RiDeleteBin7Fill } from 'react-icons/ri'
import crusorImg from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import CourseModel from './CourseModel'
const AdminCourses = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const courseDetailsHandler = (id) => {
        onOpen();
    };
    const deleteButtonHandler = (id) => {
        console.log(id);
    };
    const deleteLectureButtonHandler = (courseId, e, title, video, discription) => {
        e.preventDefault();
        console.log(courseId);
    }
    const addLectureHandle = (courseId, lectureId) => { }
    const Courses = [{
        "_id": "60e1f1b0b0b5a8a0b4b0b5b1",
        "title": "React Course",
        "category": "Web Development",
        "role": "student",
        "poster": {
            "url": "https://media.istockphoto.com/id/1389287506/photo/react-inscription-against-laptop-and-code-background.jpg?s=1024x1024&w=is&k=20&c=E8im8d3k0ng5M8eXChH6YKd8aaT81yaRHFHrnCFCUfw=",
        },
        "createdBy": "pranjal",
        "views": 100,
        "numOfVideos": 10,


    }
    ]

    return <Grid css={{ cursor: `url(${crusorImg}), default` }} minH={"100vh"} templateColumns={['1fr', '5fr 1fr']} >
        <Box overflowX={'auto'} p={['0', '8']}>
            <Heading textAlign={["center", "left"]} textTransform='uppercase' my={'16'} children="All User" />
            <TableContainer w={['100vh', 'full']} >
                <Table variant={'simple'} size='lg' >
                    <TableCaption>All Available Users</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Poster</Th>
                            <Th>Title</Th>
                            <Th>Category</Th>
                            <Th>Creater</Th>
                            <Th isNumeric>Views</Th>
                            <Th isNumeric>Lectures</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            Courses.map(item => (
                                <Row key={item._id} item={item} courseDetailsHandler={courseDetailsHandler}
                                    deleteButtonHandler={deleteButtonHandler} />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <CourseModel isOpen={isOpen} onClose={onClose} addLectureHandle={addLectureHandle} courseTitle="React Course" id={'2342'} deleteButtonHandler={deleteLectureButtonHandler} />
        </Box>
        <Sidebar />
    </Grid>
}

export default AdminCourses

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
    return (
        <Tr>
            <Td>#{item._id}</Td>
            <Td><Image src={item.poster.url} /></Td>
            <Td>{item.title}</Td>
            <Td textTransform={'uppercase'} >{item.category}</Td>
            <Td>{item.createdBy}</Td>
            <Td isNumeric>{item.views}</Td>
            <Td isNumeric>{item.numOfVideos}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => courseDetailsHandler(item._id)} variant={'outline'} color="green.500">View Lectures</Button>
                    <Button onClick={() => deleteButtonHandler(item._id)} color="green.600" >
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}

