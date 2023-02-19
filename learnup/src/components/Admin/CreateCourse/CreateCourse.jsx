import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import crusorImg from '../../../assets/images/cursor.png'
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
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [createdby, setCreatedby] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [image, setImage] = React.useState('')
    const [imagePrev, setImagePrev] = React.useState('')
    const categories = ['Web Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Cyber Security', 'Cloud Computing', 'Ethical Hacking', 'Programming Languages', 'Mobile Development', 'Game Development', 'Software Testing', 'Digital Marketing', 'Graphic Design', 'Business', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'Lifestyle', 'Photography', 'Health & Fitness', 'Music', 'Teaching & Academics']

    return <Grid css={{ cursor: `url(${crusorImg}), default` }} minH={"100vh"} templateColumns={['1fr', '5fr 1fr']} >
        <Container py="16">
            <form>
                <Heading textAlign={["center", "left"]} textTransform='uppercase' my={'16'} children="Create Course" />
                <VStack m={"auto"} spacing='8'>
                    <Input autoComplete="on" value={title}
                        onChange={(e) => setTitle(e.target.value)} placeholder="Title" type={"text"} focusBorderColor="green.500" />
                    <Input autoComplete="on" value={description}
                        onChange={(e) => setDescription(e.target.value)} placeholder="Description" type={"text"} focusBorderColor="green.500" />
                    <Input autoComplete="on" value={createdby}
                        onChange={(e) => setCreatedby(e.target.value)} placeholder="Created By" type={"text"} focusBorderColor="green.500" />
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
                    <Button w='full' colorScheme={'green'} type='submit'>Create</Button>
                </VStack>
            </form>


        </Container>
        <Sidebar />
    </Grid>
}

export default CreateCourse
