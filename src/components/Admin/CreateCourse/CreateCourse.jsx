import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import crusorImg from '../../../assets/images/cursor.png'
import { createCourse } from '../../../Redux/actions/admin'
import Sidebar from '../Sidebar'
export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "ECC94B",
    // backgroundColor: "white",
}


const CreateCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const categories = ['Web Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Cyber Security', 'Cloud Computing', 'Ethical Hacking', 'Programming Languages', 'Mobile Development', 'Game Development', 'Software Testing', 'Digital Marketing', 'Graphic Design', 'Business', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'Lifestyle', 'Photography', 'Health & Fitness', 'Music', 'Teaching & Academics']
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector(state => state.admin);
    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        console.log('file', file)
        reader.onload = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('title', title);
        myForm.append('description', description);
        myForm.append('category', category);
        myForm.append('createdBy', createdBy);
        myForm.append('file', image);
        dispatch(createCourse(myForm));
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
    }, [dispatch, error, message]);

    return <Grid css={{ cursor: `url(${crusorImg}), default` }} minH={"100vh"} templateColumns={['1fr', '5fr 1fr']} >
        <Container py="16">
            <form onSubmit={submitHandler}>
                <Heading textAlign={["center", "left"]} textTransform='uppercase' my={'16'} children="Create Course" />
                <VStack m={"auto"} spacing='8'>
                    <Input autoComplete="on" value={title}
                        onChange={(e) => setTitle(e.target.value)} placeholder="Title" type={"text"} focusBorderColor="green.500" />
                    <Input autoComplete="on" value={description}
                        onChange={(e) => setDescription(e.target.value)} placeholder="Description" type={"text"} focusBorderColor="green.500" />
                    <Input autoComplete="on" value={createdBy}
                        onChange={(e) => setCreatedBy(e.target.value)} placeholder="Created By" type={"text"} focusBorderColor="green.500" />
                    <Select value={category} onChange={(e) => setCategory(e.target.value)} focusBorderColor="green.500" >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => {
                            return <option key={index} value={category} >{category}</option>
                        })}
                    </Select>
                    <Input accept='image/*' required type={"file"} focusBorderColor="green.500" css={{
                        '&::file-selector-button': {
                            ...fileUploadCss, color: 'green'
                        }
                    }} onChange={changeImageHandler} />
                    {imagePrev && (
                        <Image src={imagePrev} boxSize='64' objectFit={'contain'} />
                    )}
                    <Button w='full' isLoading={loading} colorScheme={'green'} type='submit'>Create</Button>
                </VStack>
            </form>


        </Container>
        <Sidebar />
    </Grid>
}

export default CreateCourse
