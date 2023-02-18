import { Box, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import crusorImg from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { DoughnutChart, Graph } from './Graph'
const Dashboard = () => {
    return <Grid css={{ cursor: `url(${crusorImg}), default` }} minH={"100vh"} templateColumns={['1fr', '5fr 1fr']} >
        <Box boxSizing='border-box' py="16" px={["4", "0"]}>
            <Text opacity={0.5} textAlign="center" children={`Last Change was on ${String(new Date()).split('G')[0]}`} />
            <Heading textAlign={["center", "left"]} ml={["0", "16"]} mb={'16'} children="Dashboard" />
            <Stack direction={['column', 'row']} minH="24" justifyContent={"space-evenly"} >
                <DataBox title="Views" qty={123} qtyPercentage={30} profit={true} />
                <DataBox title="Users" qty={13} qtyPercentage={60} profit={true} />
                <DataBox title="Subscription" qty={11} qtyPercentage={20} profit={false} />
            </Stack>
            <Box m={['0', '16']} borderRadius='lg' p={['0', '16']} mt={['4', '16']} boxShadow={'-2px 0 10px rgba(46, 255, 25, 0.8)'}
            >
                <Heading textAlign={['center', 'left']} size='md' pt={['8', '0']} ml={['0', '16']} children="Views Graph" />
                {/* line Graph here */}
                <Graph />
            </Box>
            <Grid templateColumns={['1fr', '2fr 1fr ']}>
                <Box p="4">
                    <Heading textAlign={['center', 'left']} size='md' my={'0'} ml={['0', '16']} children="Progress Bar" />
                    {/* Progress Bar here */}
                    <Box>
                        <Bar profit={true} title="Views" value={30} />
                        <Bar profit={true} title="Users" value={60} />
                        <Bar profit={false} title="Subscription" value={20} />
                    </Box>
                </Box>

                <Box p={['0', '16']} boxSizing="border-box" py='4'>
                    <Heading textAlign={'center'} size='md' mb={'4'} ml={['0', '16']} children="Users" />
                    {/* Doughnut graph here */}
                    <DoughnutChart />
                </Box>
            </Grid>
        </Box >
        <Sidebar />
    </Grid >
}

export default Dashboard

function DataBox({ title, qty, qtyPercentage, profit }) {

    return <Box w={['full', '20%']} boxShadow={'-2px 0 10px rgba(46, 255, 25, 0.8)'} p={'8'} borderRadius='lg'>
        <Text children={title} />
        <HStack spacing={'6'}>
            <Text fontSize={'2xl'} fontWeight='bold' children={`${qty}`} />
            <HStack>
                <Text children={`${qtyPercentage}%`} />
                {profit ? <RiArrowUpLine color='green' /> : (
                    <RiArrowDownLine color='red' />
                )}
            </HStack>
        </HStack>
        <Text opacity={0.5} children="Since last month" />
    </Box>

}

function Bar({ title, value, profit }) {
    return <Box py={'4'} px={['0', '20']}>
        <Heading size='sm' children={title} />
        <HStack w='full' alignItems='center' >
            <Text children={profit ? "0%" : `-${value}%`} />
            <Progress w='full ' value={profit ? value : '0'} colorScheme='green' />
            <Text children={`${value > 100 ? value : 100}%`} />
        </HStack>
    </Box>
}