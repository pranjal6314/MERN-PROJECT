// import { Container, VStack, Heading, FormLabel, Input, Box, Button, Avatar } from '@chakra-ui/react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// export const fileUploadCss = {
//     cursor: "pointer",
//     marginLeft: "-5%",
//     width: "110%",
//     border: "none",
//     height: "100%",
//     color: "ECC94B",
//     // backgroundColor: "white",
// }
// const fileUploadStyle = {
//     "&::file-selector-button": {
//         cursor: "pointer",
//         marginLeft: "-5%",
//         width: "110%",
//         border: "none",
//         height: "100%",
//         color: "ECC94B",
//         backgroundColor: "white",
//     }
// }
// const Signup = () => {

//     const [email, setEmail] = React.useState("")
//     const [name, setName] = React.useState("")
//     const [password, setPassword] = React.useState("")
//     const [imagePrev, setImagePrev] = React.useState("")
//     const [image, setImage] = React.useState("")

//     const changeImageHandler = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => {
//             setImagePrev(reader.result)
//             setImage(file)
//         }
//     }
//     return (
//         <Container h={"100vh"}>
//             <VStack h={"full"} justifyContent="center" spacing={"8"}>
//                 <Heading textTransform={"uppercase"} mt={"4"} children="REGISTRATION " />
//                 <form style={{ width: "100%" }}>
//                     <Box my="2" display={"flex"} justifyContent="center">
//                         <Avatar src={imagePrev} size="2xl" />
//                     </Box>
//                     <Box my="4" >
//                         <FormLabel htmlFor='name' children="Name" />
//                         <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="student" type={"text"} focusBorderColor="green.500" />
//                     </Box>
//                     <Box my="4" >
//                         <FormLabel htmlFor='email' children="Email Address" />
//                         <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" type={"email"} focusBorderColor="green.500" />
//                     </Box>
//                     <Box my="4" >
//                         <FormLabel htmlFor='password' children="Password" />
//                         <Input required id="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type={"password"} focusBorderColor="green.500" />
//                     </Box>
//                     <Box my="4" >
//                         <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
//                         <Input accept='image/*' required id="chooseAvatar" ty pe={"file"} focusBorderColor="green.500" css={fileUploadStyle} onChange={changeImageHandler} />
//                     </Box>

//                     <Button my="4" type='submit' colorScheme={"green"}>Sign Up</Button>
//                     <Box my="4">
//                         Already Signed Up ?{" "}
//                         <Link to="/login">
//                             <Button colorScheme={"green"} variant="link">
//                                 Login
//                             </Button>
//                         </Link>{" "} Here
//                     </Box>
//                 </form>
//             </VStack>
//         </Container >
//     )
// }

// export default Signup




import {
    Avatar,
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../Redux/actions/user'
import { useNavigate } from 'react-router-dom';

export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
};

const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
};

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeImageHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    const submitHandler = e => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('name', name);
        myForm.append('email', email);
        myForm.append('password', password);
        myForm.append('file', image);

        dispatch(register(myForm));
        setTimeout(() => {
            navigate('/login');
        }, 4000);

    };

    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent="center" spacing={'16'}>
                <Heading textTransform={'uppercase'} children={'Registration'} />

                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <Box my="4" display={'flex'} justifyContent="center">
                        <Avatar src={imagePrev} size={'2xl'} />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor="name" children="Name" />
                        <Input
                            required
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="abc"
                            type={'text'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="email" children="Email Address" />
                        <Input
                            required
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="abc@gmail.com"
                            type={'email'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="password" children="Password" />
                        <Input
                            required
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter Your Password"
                            type={'password'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
                        <Input
                            accept="image/*"
                            required
                            id="chooseAvatar"
                            type={'file'}
                            focusBorderColor="yellow.500"
                            css={fileUploadStyle}
                            onChange={changeImageHandler}
                        />
                    </Box>

                    <Button my="4" colorScheme={'yellow'} type="submit">
                        Sign Up
                    </Button>

                    <Box my="4">
                        Already Signed Up?{' '}
                        <Link to="/login">
                            <Button colorScheme={'yellow'} variant="link">
                                Login
                            </Button>{' '}
                            here
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    );
};

export default Register;
