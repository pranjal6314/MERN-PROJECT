import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();
    return <VStack spacing={'8'} p="16  " boxShadow={'-2px 0 10px rgba(46, 255, 25, 0.8)'}>

        <LinkButton url="dashboard" title="Dashboard" Icon={RiDashboardFill} active={location.pathname === "/admin/dashboard"} />
        <LinkButton url="Courses" title="Courses" Icon={RiEyeFill} active={location.pathname === "/admin/Courses"} />
        <LinkButton url="createcourse" title="Create Course" Icon={RiAddCircleFill} active={location.pathname === "/admin/createcourse"} />
        <LinkButton url="Users" title="Users" Icon={RiUser3Fill} active={location.pathname === "/admin/Users"} />


    </VStack>
}

export default Sidebar

function LinkButton({ url, title, Icon, active }) {
    return <Link to={`/admin/${url}`} >
        <Button colorScheme={active ? "green" : ""} fontSize="larger" variant={"ghost"}>
            <Icon style={{ margin: "4px" }} />
            {`${title}`}
        </Button>
    </Link >
}