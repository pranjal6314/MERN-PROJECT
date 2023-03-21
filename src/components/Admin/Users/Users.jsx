import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiDeleteBin2Fill, RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import crusorImg from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import {
    deleteUser,
    getAllUsers,
    updateUserRole,
} from '../../../Redux/actions/admin';
import toast from 'react-hot-toast';
const Users = () => {
    const { users, loading, error, message } = useSelector(state => state.admin);
    console.log(users)
    const dispatch = useDispatch();
    const updateHandler = userId => {
        dispatch(updateUserRole(userId));
    };
    const deleteButtonHandler = userId => {
        dispatch(deleteUser(userId));
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

        dispatch(getAllUsers());
    }, [dispatch, error, message]);

    return <Grid css={{ cursor: `url(${crusorImg}), default` }} minH={"100vh"} templateColumns={['1fr', '5fr 1fr']} >
        {/* <Box overflowX={'auto'} p={['0', '16']}>
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
        </Box> */}
        <Box p={['0', '16']} overflowX="auto">
            <Heading
                textTransform={'uppercase'}
                children="All Users"
                my="16"
                textAlign={['center', 'left']}
            />

            <TableContainer w={['100vw', 'full']}>
                <Table variant={'simple'} size="lg">
                    <TableCaption>All available users in the database</TableCaption>

                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Subscription</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {users &&
                            users.map(item => (
                                <Row
                                    updateHandler={updateHandler}
                                    deleteButtonHandler={deleteButtonHandler}
                                    key={item._id}
                                    item={item}
                                    loading={loading}
                                />
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        <Sidebar />
    </Grid>
}

export default Users

function Row({ item, updateHandler, deleteButtonHandler, loading }) {
    return (
        <Tr>
            <Td>#{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription && item.subscription.status === 'active' ? "Active" : "Not Active"}</Td>
            {/* <Td>{item.subscription}</Td> */}
            {/* <Td>{item.password}</Td> */}
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