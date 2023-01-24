import React from 'react'
import { Container, VStack, Heading, Stack, Avatar, Text, Button, Box, HStack, Grid } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri'
import intro from "../../assets/videos/intro.mp4"
import { useState } from 'react'
const CoursePage = () => {

    const [lectureNumber, setlectureNumber] = useState(0);
    const lectures = [
        {
            _id: "ssdfds",
            title: "Lecture : Introduction to React",
            description: "sample secfdf ndsfsdfdsf",
            video: {
                url: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
            }
        },
        {
            _id: "ssdfds2",
            title: "Lecture : Introduction to React-2",
            description: "sample secfdf ndsfsdfdsf",
            video: {
                url: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
            }
        },
        {
            _id: "ssdfds3",
            title: "Lecture : Introduction to React-3",
            description: "sample secfdf ndsfsdfdsf",
            video: {
                url: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
            }
        }
    ]
    return (
        <Grid minH={"90vh"} templateColumns={['1fr', '3fr 1fr']}>
            <Box>
                <video width={"100%"} controls controlsList='nodownload fullscreen noremoteplayback  ' disablePictureInPicture disableRemotePlayback src={intro} ></video>
                <Heading children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
                <Heading m='4' children='Description' />
                <Text m={'4'} children={lectures[lectureNumber].description} />
            </Box>
            <VStack>
                {
                    lectures.map((item, index) => (
                        <button key={item._id} onClick={() => setlectureNumber(index)}
                            style={{ width: "100%", padding: "1rem", textAlign: "center", margin: 0, borderBottom: "1px solid rgba(0,0,0,0.2)" }}
                        >
                            <Text noOfLines={1} > #{index + 1} {item.title} </Text>
                        </button>
                    ))
                }
            </VStack>

        </Grid>
    )
}

export default CoursePage
