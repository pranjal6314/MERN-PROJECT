import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
const ResetPassword = () => {
    const [password, setPassword] = React.useState("")
    const params = useParams();
    return <Container py="16" height={"90vh"}>
        <form>
            <Heading children="Reset Password" my="16" textTransform={"uppercase"} textAlign={["center", "left"]} />
            <VStack spacing={3}>
                <Input required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="new password" type={"password"} focusBorderColor="green.500" />
                <Button type="submit" w="full" colorScheme={"yellow"}> Reset Password</Button>
            </VStack>

        </form>
    </Container>
}
export default ResetPassword
