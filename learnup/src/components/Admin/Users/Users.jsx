import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin2Fill, RiDeleteBin7Fill } from 'react-icons/ri'
import crusorImg from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
const Users = () => {
    const updateHandler = (id) => {
        console.log(id);
    };
    const deleteButtonHandler = (id) => {
        console.log(id);
    };
    const users = [{
        "_id": "60e1f1b0b0b5a8a0b4b0b5b1",
        "name": "Aman",
        "email": "abc@gmail.com",
        "role": "student",
        "subscription": {
            "status": "active",
        },
        "password": "$2b$10$Q8"

    }, {
        "_id": "60e1f1b0b0b5a8a0b4b0b5b2",
        "name": "pranjal",
        "email": "abc@gmail.com",
        "role": "Admin",
        "subscription": {
            "status": "not active",
        },
        "password": "admin@$123"

    }
    ]
    return <Grid css={{ cursor: `url(${crusorImg}), default` }} minH={"100vh"} templateColumns={['1fr', '5fr 1fr']} >
        <Box overflowX={'auto'} p={['0', '16']}>
            <Heading textAlign={["center", "left"]} textTransform='uppercase' my={'16'} children="All User" />
            <TableContainer w={['100vh', 'full']} >
                <Table variant={'simple'} size='lg' >
                    <TableCaption>All Available Users</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Subscription</Th>
                            <Th>Password</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            users.map(item => (
                                <Row key={item._id} item={item} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        <Sidebar />
    </Grid>
}

export default Users

function Row({ item, updateHandler, deleteButtonHandler }) {
    return (
        <Tr>
            <Td>#{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription.status === 'active' ? "Active" : "Not Active"}</Td>
            <Td>{item.password}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => updateHandler(item._id)} variant={'outline'} color="green.500">Change Role</Button>
                    <Button onClick={() => deleteButtonHandler(item._id)} color="green.600" >
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}