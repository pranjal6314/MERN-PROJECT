import { Container, VStack, Heading, FormLabel, Input, Box, Button, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "ECC94B",
    backgroundColor: "white",
}
const fileUploadStyle = {
    "&::file-selector-button": {
        fileUploadCss,
    }
}
const Signup = () => {

    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [imagePrev, setImagePrev] = React.useState("")
    const [image, setImage] = React.useState("")

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }
    return (
        <Container h={"100vh"}>
            <VStack h={"full"} justifyContent="center" spacing={"8"}>
                <Heading textTransform={"uppercase"} mt={"4"} children="REGISTRATION " />
                <form style={{ width: "100%" }}>
                    <Box my="2" display={"flex"} justifyContent="center">
                        <Avatar src={imagePrev} size="2xl" />
                    </Box>
                    <Box my="4" >
                        <FormLabel htmlFor='name' children="Name" />
                        <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="student" type={"text"} focusBorderColor="green.500" />
                    </Box>
                    <Box my="4" >
                        <FormLabel htmlFor='email' children="Email Address" />
                        <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" type={"email"} focusBorderColor="green.500" />
                    </Box>
                    <Box my="4" >
                        <FormLabel htmlFor='password' children="Password" />
                        <Input required id="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type={"password"} focusBorderColor="green.500" />
                    </Box>
                    <Box my="4" >
                        <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
                        <Input accept='image/*' required id="chooseAvatar" type={"file"} focusBorderColor="green.500" css={fileUploadStyle} onChange={changeImageHandler} />
                    </Box>

                    <Button my="4" type='submit' colorScheme={"green"}>Sign Up</Button>
                    <Box my="4">
                        Already Signed Up ?{" "}
                        <Link to="/login">
                            <Button colorScheme={"green.500"} variant="link">
                                Login
                            </Button>
                        </Link>{" "} Here
                    </Box>
                </form>
            </VStack>
        </Container >
    )
}

export default Signup
