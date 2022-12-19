import { Box, HStack, Img, Link, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-reveal';
import {ImHeart} from 'react-icons/im';

const Contact = () => {
    const bg = useColorModeValue('black')
    const color = useColorModeValue('#5fc49a')
   
    const contactImagesYellow = [
        {
            image: require('./res/yellow/linkedin.png'),
            alt: "Linkedin",
            link: "https://www.linkedin.com/in/preeti-bildani-8a8677232/"
        },
        {
            image: require('./res/yellow/github.png'),
            alt: "Github",
            link: "https://github.com/Preetibildani"
        },
        {
            image: require('./res/yellow/email.png'),
            alt: "Email",
            link: "mailto:pritibildani92@gmail.com"
        },
    ]
    //     [url=https://imgbb.com/][img]https://i.ibb.co/PYfBtPr/atom.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/4289K4T/css-3.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/LxNQYxN/email.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/0rdPJFJ/express.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/jf27KLs/github.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/Sfj8LR3/html.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/KXgBjT5/java-script.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/3yBv9h4/linkedin.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/rHjfgnF/mongodb.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/2MyRydr/node-js.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/Ld0PCpp/redux.png[/img][/url]
    const contactImagesBlue = [
        {
            image: require('./res/blue/linkedin.png'),
            alt: "Linkedin",
            link: "https://www.linkedin.com/in/preeti-bildani-8a8677232/"
        },
        {
            image: require('./res/blue/github.png'),
            alt: "Github",
            link: "https://github.com/Preetibildani"
        },
        {
            image: require('./res/blue/email.png'),
            alt: "Email",
            link: "mailto:pritibildani92@gmail.com"

        },
    ]

    return (
        <Box bg={bg} color={color} paddingY={"30px"} paddingTop={"80px"} id="Contact">
            <Text paddingY={"30px"} fontSize="3xl" color={color} textAlign={"center"}>
                Get in Touch
            </Text>
            <Fade left cascade>
                <HStack align={"center"} width={["60%", "40%", "40%", "20%"]} margin={"auto"} gap={"10px"} justifyContent={"space-between"} >
                    {(bg === 'white' ? contactImagesBlue : contactImagesYellow).map((el) => {
                        return <Link width={"15%"} justifyContent={"center"} alignItems={"center"} href={el.link} target={"_blank"}><Img width={"fit-content"} margin={"auto"} className='hvr-pop' src={el.image} alt={el.alt} /> </Link>
                    })}
                </HStack>
            </Fade>
            <Text paddingTop={"30px"} fontSize="md" color={color} textAlign={"center"}>
                Email : pritibildani92@gmail
            </Text>
            <Text paddingBottom={"30px"} fontSize="md" color={color} textAlign={"center"}>
                contact no. : +91 9130843319
            </Text>
            <Text marginLeft={"5px"} marginTop={"-10px"} marginRight={"10px"} paddingBottom={"30px"} fontSize="xl" color={color} textAlign={"center"} display={"flex"} justifyContent={"center"}>
              Made By Preeti Bildani<ImHeart  color='red'/>
            </Text> 
        </Box>
    )
}

export default Contact