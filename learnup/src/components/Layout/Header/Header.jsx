import React from 'react'
import { Heading, VStack, DrawerOverlay, Text, Button, Drawer, useDisclosure, HStack, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { RiMenu5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
const LinkButton = ({ url = '/', title = "Home" }) => (
    <Link to={url} >
        <Button variant={"ghost"}>{title}
        </Button>
    </Link>
)
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <ColorModeSwitcher />
            <Button onClick={onOpen} colorScheme={"blue"} height="12" width={"12"} rounded="full" position={"fixed"} top="5" left="6">
                <RiMenu5Fill />
            </Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={"blur(2px)"} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={"1px"}>Learn Up</DrawerHeader>
                    <DrawerBody>
                        <VStack>
                            <LinkButton url='/' title="Home" />
                            <LinkButton url='/courses' title="All Courses" />
                            <LinkButton url='/req' title="Request a Course" />
                            <LinkButton url='/contact' title="Contact Us" />

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
