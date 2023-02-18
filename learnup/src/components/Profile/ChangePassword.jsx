import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

const ChangePassword = () => {
    const [Oldpassword, setOldPassword] = React.useState("")
    const [Newpassword, setNewPassword] = React.useState("")
    return <Container py="16" minH={'90vh'}>
        <form >
            < Heading textTransform={"uppercase"} children="Change Password" my='16' textAlign={['center', 'left']} />
            <VStack spacing={"8"}>
                <Input required autoComplete="on" value={Oldpassword}
                    onChange={(e) => setOldPassword(e.target.value)} placeholder="Enter Old Password" type={"password"} focusBorderColor="green.500" />

                <Input required autoComplete="on" value={Newpassword}
                    onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter New Password" type={"password"} focusBorderColor="green.500" />
                <Button colorScheme={"green"} w='full' type='submit'>Change</Button>
            </VStack>
        </form>

    </Container >
}

export default ChangePassword
