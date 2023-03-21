import { Box, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import crusorImg from '../../../assets/images/cursor.png'
import { getDashboardStats } from '../../../Redux/actions/admin'
import Loader from '../../Layout/Loader/Loader'
import Sidebar from '../Sidebar'
import { DoughnutChart, Graph } from './Graph'
const Dashboard = () => {
    const dispatch = useDispatch();
    const {
        loading,
        stats,
        viewsCount,
        subscriptionsCount,
        userCount,
        subscriptionPercentage,
        viewPercentage,
        userPercentage,
        subscriptionProfit,
        viewProfit,
        userProfit,
        //         userCount(pin):1
        // subscriptionsCount(pin):0
        // viewsCount(pin):27
        // userPercentage(pin):0
        // subscriptionPercentage(pin):0
        // viewPercentage(pin):2700
        // userProfit(pin):true
        // subscriptionProfit(pin):true
        // viewProfit(pin):true
    } = useSelector(state => state.admin);
    console.log(viewProfit);
    useEffect(() => {
        dispatch(getDashboardStats());
    }, [dispatch]);


    //     <Grid
    //     css={{
    //         cursor: `url(${crusorImg}), default`,
    //     }}
    //     minH={'100vh'}
    //     templateColumns={['1fr', '5fr 1fr']}
    // >
    //     {loading || !stats ? (
    //         <Loader color="purple.500" />
    //     ) : (
    //         <Box boxSizing="border-box" py="16" px={['4', '0']}>
    //             <Text
    //                 textAlign={'center'}
    //                 opacity={0.5}
    //                 children={`Last change was on ${String(new Date(stats[11].createdAt)).split('G')[0]
    //                     }`}
    //             />

    //             <Heading
    //                 children="Dashboard"
    //                 ml={['0', '16']}
    //                 mb="16"
    //                 textAlign={['center', 'left']}
    //             />

    //             <Stack
    //                 direction={['column', 'row']}
    //                 minH="24"
    //                 justifyContent={'space-evenly'}
    //             >
    //                 <Databox
    //                     title="Views"
    //                     qty={viewsCount}
    //                     qtyPercentage={viewPercentage}
    //                     profit={viewProfit}
    //                 />
    //                 <Databox
    //                     title="Users"
    //                     qty={userCount}
    //                     qtyPercentage={userPercentage}
    //                     profit={userProfit}
    //                 />
    //                 <Databox
    //                     title="Subscription"
    //                     qty={subscriptionsCount}
    //                     qtyPercentage={subscriptionPercentage}
    //                     profit={subscriptionProfit}
    //                 />
    //             </Stack>

    //             <Box
    //                 m={['0', '16']}
    //                 borderRadius="lg"
    //                 p={['0', '16']}
    //                 mt={['4', '16']}
    //                 boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    //             >
    //                 <Heading
    //                     textAlign={['center', 'left']}
    //                     size="md"
    //                     children="Views Graph"
    //                     pt={['8', '0']}
    //                     ml={['0', '16']}
    //                 />

    //                 <Graph views={stats.map(item => item.views)} />
    //             </Box>

    //             <Grid templateColumns={['1fr', '2fr 1fr']}>
    //                 <Box p="4">
    //                     <Heading
    //                         textAlign={['center', 'left']}
    //                         size="md"
    //                         children="Progress Bar"
    //                         my="8"
    //                         ml={['0', '16']}
    //                     />

    //                     <Box>
    //                         <Bar
    //                             profit={viewProfit}
    //                             title="Views"
    //                             value={viewPercentage}
    //                         />
    //                         <Bar
    //                             profit={userProfit}
    //                             title="Users"
    //                             value={userPercentage}
    //                         />
    //                         <Bar
    //                             profit={subscriptionProfit}
    //                             title="Subscription"
    //                             value={subscriptionPercentage}
    //                         />
    //                     </Box>
    //                 </Box>

    //                 <Box p={['0', '16']} boxSizing="border-box" py="4">
    //                     <Heading textAlign={'center'} size="md" mb="4" children="Users" />

    //                     <DoughnutChart
    //                         users={[subscriptionsCount, userCount - subscriptionsCount]}
    //                     />
    //                 </Box>
    //             </Grid>

    //             </Box>
    //     )}
    //             </Grid>




    return <Grid
        css={{
            cursor: `url(${crusorImg}), default`,
        }}
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
    >
        {loading || !stats ? (
            <Loader color="green.500" />
        ) : (
            <Box boxSizing="border-box" py="16" px={['4', '0']}>
                <Text
                    textAlign={'center'}
                    opacity={0.5}
                    children={`Last change was on ${String(new Date(stats[11].createdAt)).split('G')[0]
                        }`}
                />

                <Heading
                    children="Dashboard"
                    ml={['0', '16']}
                    mb="16"
                    textAlign={['center', 'left']}
                />

                <Stack
                    direction={['column', 'row']}
                    minH="24"
                    justifyContent={'space-evenly'}
                >
                    <Databox
                        title="Views"
                        qty={viewsCount}
                        qtyPercentage={viewPercentage}
                        profit={viewProfit}
                    />
                    <Databox
                        title="Users"
                        qty={userCount}
                        qtyPercentage={userPercentage}
                        profit={userProfit}
                    />
                    <Databox
                        title="Subscription"
                        qty={subscriptionsCount}
                        qtyPercentage={subscriptionPercentage}
                        profit={subscriptionProfit}
                    />
                </Stack>

                <Box
                    m={['0', '16']}
                    borderRadius="lg"
                    p={['0', '16']}
                    mt={['4', '16']}
                    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
                >
                    <Heading
                        textAlign={['center', 'left']}
                        size="md"
                        children="Views Graph"
                        pt={['8', '0']}
                        ml={['0', '16']}
                    />

                    <Graph views={stats.map(item => item.views)} />
                </Box>

                <Grid templateColumns={['1fr', '2fr 1fr']}>
                    <Box p="4">
                        <Heading
                            textAlign={['center', 'left']}
                            size="md"
                            children="Progress Bar"
                            my="8"
                            ml={['0', '16']}
                        />

                        <Box>
                            <Bar
                                profit={viewProfit}
                                title="Views"
                                value={viewPercentage}
                            />
                            <Bar
                                profit={userProfit}
                                title="Users"
                                value={userPercentage}
                            />
                            <Bar
                                profit={subscriptionProfit}
                                title="Subscription"
                                value={subscriptionPercentage}
                            />
                        </Box>
                    </Box>

                    <Box p={['0', '16']} boxSizing="border-box" py="4">
                        <Heading textAlign={'center'} size="md" mb="4" children="Users" />

                        <DoughnutChart
                            users={[subscriptionsCount, userCount - subscriptionsCount]}
                        />
                    </Box>
                </Grid>
            </Box>
        )}

        <Sidebar />
    </Grid>
}

export default Dashboard

function Databox({ title, qty, qtyPercentage, profit }) {

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