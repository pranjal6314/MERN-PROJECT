import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import crusorImg from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
const Dashboard = () => {
    return <Grid css={{ cursor: `url(${crusorImg}), default` }} minH={"100vh"} templateColumns={['1fr', '5fr 1fr']} >
        <Box></Box>
        <Sidebar />
    </Grid>
}

export default Dashboard
