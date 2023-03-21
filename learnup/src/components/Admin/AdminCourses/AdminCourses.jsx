import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { RiDeleteBin2Fill, RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import crusorImg from '../../../assets/images/cursor.png'
import { addLecture, deleteCourse, deleteLecture } from '../../../Redux/actions/admin'
import { getAllCourses, getCourseLectures } from '../../../Redux/actions/course'
import Sidebar from '../Sidebar'
import CourseModel from './CourseModel'
const AdminCourses = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [courseId, setCourseId] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const { courses, lectures } = useSelector(state => state.course);

    const { loading, error, message } = useSelector(state => state.admin);

    const dispatch = useDispatch();

    const deleteButtonHandler = courseId => {

        dispatch(deleteCourse(courseId));
    };
    const deleteLectureButtonHandler = async (courseId, lectureId) => {
        await dispatch(deleteLecture(courseId, lectureId));
        dispatch(getCourseLectures(courseId));
    };
    const courseDetailsHandler = (courseId, title) => {
        dispatch(getCourseLectures(courseId));
        onOpen();
        setCourseId(courseId);
        setCourseTitle(title);
    };
    const addLectureHandler = async (e, courseId, title, description, video) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('title', title);
        myForm.append('description', description);
        myForm.append('file', video);

        await dispatch(addLecture(courseId, myForm));
        dispatch(getCourseLectures(courseId));
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

        dispatch(getAllCourses());
    }, [dispatch, error, message, onClose]);



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
                            courses.map(item => (
                                <Row
                                    courseDetailsHandler={courseDetailsHandler}
                                    deleteButtonHandler={deleteButtonHandler}
                                    key={item._id}
                                    item={item}
                                    loading={loading}
                                />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <CourseModel isOpen={isOpen}
                onClose={onClose}
                id={courseId}
                courseTitle={courseTitle}
                deleteButtonHandler={deleteLectureButtonHandler}
                addLectureHandler={addLectureHandler}
                lectures={lectures}
                loading={loading} />
        </Box>
        <Sidebar />
    </Grid>
}

export default AdminCourses

function Row({ item, courseDetailsHandler, deleteButtonHandler, loading }) {
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
                    <Button isLoading={loading} onClick={() => courseDetailsHandler(item._id, item.title)} variant={'outline'} color="green.500">View Lectures</Button>
                    <Button isLoading={loading} onClick={() => deleteButtonHandler(item._id)} color="green.600" >
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}

