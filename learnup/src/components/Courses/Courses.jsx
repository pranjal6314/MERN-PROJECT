import { Button, Container, Text, Heading, HStack, Input, Stack, VStack, Image } from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCourses } from '../../Redux/actions/course'
import { addToPlaylist } from '../../Redux/actions/profile'
import { loadUser } from '../../Redux/actions/user'

const Course = ({ loading, view, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount }) => {
    return (
        <VStack className='Course' alignItems={['center', 'flex-start']} >
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
            <Heading fontFamily={'sans-serif'} noOfLines='3' maxW={'200px'} size={'sm'} textAlign={['center', 'left']} children={title} />
            <Text noOfLines='2' children={description} />
            <HStack>
                <Text fontWeight={'bold'} textTransform='uppercase' children={'Created By :'} />
                <Text fontFamily={'fantasy'} textTransform='uppercase' children={creator} />
            </HStack>
            <Heading textAlign={'center'} size='xs' textTransform='uppercase' children={`Lectures - ${lectureCount}`} />
            <Heading size='xs' textTransform='uppercase' children={`Views - ${view}`} />
            <Stack alignItems={'center'} direction={['column', 'row']}>
                <Link to={`/courses/${id}`}>
                    <Button colorScheme={'yellow'}>Enroll Now</Button>
                </Link>
                <Button isLoading={loading} colorScheme={'yellow'} variant='ghost' onClick={() => addToPlaylistHandler(id)}>Add To Playlist</Button>
            </Stack>
        </VStack>

    )
}
const Courses = () => {

    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState('')
    const dispatch = useDispatch();
    const addToPlaylistHandler = async couseId => {
        await dispatch(addToPlaylist(couseId));
        dispatch(loadUser());
    };

    const catergories = ['Web Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Cyber Security', 'Cloud Computing', 'Ethical Hacking', 'Programming Languages', 'Mobile Development', 'Game Development', 'Software Testing', 'Digital Marketing', 'Graphic Design', 'Business', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'Lifestyle', 'Photography', 'Health & Fitness', 'Music', 'Teaching & Academics']
    const { loading, courses, error, message } = useSelector(
        state => state.course
    );
    useEffect(() => {
        dispatch(getAllCourses(category, keyword));

        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [category, keyword, dispatch, error, message]);
    return (
        <Container minH={"95vh"} maxW={"container.lg"} paddingY={'8'} >
            <Heading children="All Courses" m={'8'} />
            <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder={"Search a Course..."} type='text' focusBorderColor='green.300' />
            <HStack overflowX={"auto"} paddingY={"6"}>
                {catergories.map((item, index) => (
                    <Button onClick={() => { setCategory(item) }} key={index} minW={'60'}>
                        <Text children={item}></Text>
                    </Button>
                ))}
            </HStack>
            <Stack direction={['column', 'row']} flexWrap="wrap" justifyContent={['flex-start', 'space-evenly']} alignItems={['center', 'flex-start']}>
                {courses.length > 0 ? (
                    courses.map(item => (
                        <Course
                            key={item._id}
                            title={item.title}
                            description={item.description}
                            views={item.views}
                            imageSrc={item.poster.url}
                            id={item._id}
                            creator={item.createdBy}
                            lectureCount={item.numOfVideos}
                            addToPlaylistHandler={addToPlaylistHandler}
                            loading={loading}
                        />
                    ))
                ) : (
                    <Heading mt="4" children="Courses Not Found" />
                )}
            </Stack>

        </Container>
    )
}

export default Courses
