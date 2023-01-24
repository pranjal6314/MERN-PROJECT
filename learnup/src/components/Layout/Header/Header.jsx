import React from 'react'
import { Heading, VStack, DrawerOverlay, Text, Button, Drawer, useDisclosure, HStack, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { RiDashboard2Fill, RiDashboard3Fill, RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { CgLogOut } from 'react-icons/cg';

const Header = () => {
    const LinkButton = ({ url = '/', title = "Home", onClose }) => (
        <Link onClick={onClose} to={url} >
            <Button variant={"ghost"}>{title}
            </Button>
        </Link>
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user = {
        role: "admin"
    }
    const isAuthenticated = true;
    const logoutHandler = () => {
        console.log("logout");
        onClose();
    }

    return (
        <>
            <ColorModeSwitcher />
            <Button onClick={onOpen} colorScheme={"green"} height="12" width={"12"} rounded="full" position={"fixed"} top="5" left="6" zIndex={'overlay'} >
                <RiMenu5Fill />
            </Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={"blur(2px)"} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={"1px"}>Learn Up</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={"flex-start"} spacing={"5"}>
                            <LinkButton onClose={onClose} url='/' title="Home" />
                            <LinkButton onClose={onClose} url='/courses' title="All Courses" />
                            <LinkButton onClose={onClose} url='/request' title="Request a Course" />
                            <LinkButton onClose={onClose} url='/contact' title="Contact Us" />
                            <LinkButton onClose={onClose} url='/about' title="About " />
                            <HStack justifyContent={"space-evenly"} position={"absolute"} bottom="2rem" width={"80%"}>
                                {isAuthenticated ? (<>
                                    <VStack>
                                        <HStack>
                                            <Link onClick={onClose} to={"/profile"} ><Button variant={"ghost"} colorScheme={"yellow"}>Profile</Button></Link>
                                            <Button variant={"ghost"} onClick={logoutHandler}>
                                                <RiLogoutBoxLine />
                                                Logout</Button>
                                        </HStack>
                                        {
                                            user && user.role === "admin" && <Link onClick={onClose} to="/admin/disboard">
                                                <Button colorScheme={"green"}><RiDashboardFill style={{ margin: '4px' }} />Dasboard</Button>
                                            </Link>
                                        }
                                    </VStack>

                                </>) : (<>
                                    <Link onClick={onClose} to={"/login"} ><Button colorScheme={"yellow"}>Login</Button></Link>
                                    <Link onClick={onClose} to={"/signup"} ><Button colorScheme={"yellow"}>Sign Up</Button></Link>
                                </>)}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
