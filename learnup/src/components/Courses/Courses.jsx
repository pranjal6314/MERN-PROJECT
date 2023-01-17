import { Button, Container, Text, Heading, HStack, Input, Stack, VStack, Image } from '@chakra-ui/react'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({ view, title, imageSrc, id, addToPlaylistHandler, creator, discription, lectureCount }) => {
    return (
        <VStack className='Course' alignItems={['center', 'flex-start']} >
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
            <Heading fontFamily={'sans-serif'} noOfLines='3' maxW={'200px'} size={'sm'} textAlign={['center', 'left']} children={title} />
            <Text noOfLines='2' children={discription} />
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
                <Button colorScheme={'yellow'} variant='ghost' onClick={() => addToPlaylistHandler(id)}>Add To Playlist</Button>
            </Stack>
        </VStack>

    )
}
const Courses = () => {
    const addToPlaylistHandler = (id) => {
        console.log(id);
    }
    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState('')
    const catergories = ['Web Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Cyber Security', 'Cloud Computing', 'Ethical Hacking', 'Programming Languages', 'Mobile Development', 'Game Development', 'Software Testing', 'Digital Marketing', 'Graphic Design', 'Business', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'Lifestyle', 'Photography', 'Health & Fitness', 'Music', 'Teaching & Academics']
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
                <Course
                    title={'Web Development'}
                    discription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                    creator={"Pranjal"}
                    lectureCount={'10'}
                    view={'100'}
                    imageSrc={'https://media.istockphoto.com/id/1389287506/photo/react-inscription-against-laptop-and-code-background.jpg?s=1024x1024&w=is&k=20&c=E8im8d3k0ng5M8eXChH6YKd8aaT81yaRHFHrnCFCUfw='}
                    id={'1'}
                    addToPlaylistHandler={addToPlaylistHandler}
                />
            </Stack>

        </Container>
    )
}

export default Courses
