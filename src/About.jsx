// import { Box, color, Heading, HStack, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Box, color, Heading, HStack, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import './App.css';
import { Fade } from 'react-reveal';
import { Button } from 'react-scroll';
import TypewriterComponent from 'typewriter-effect';
// import "./res/Preeti_Bildani_Resume.pdf"


function about() {
    

    const handleResume = () => {
        return window.open('https://drive.google.com/file/d/1n_wtR7GrfwU5w1E3kijo2u4ZDTggBCJs/view?usp=share_link');
    }
    return (
        <Box className='homee' bg={"https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg"} color={color} id={"Home"}>
            <Box width={"80%"}
                margin="auto" paddingTop={"60px"} >
                <Text className='Profile_Name' paddingTop={"30px"} color={color} align="center" fontSize={{ sm: '20px', md: '30px', lg: '50px' }}>Hi, I am
                    <Fade top cascade >
                        <span className='Profile_Name'> Preeti </span>
                        <span className='Profile_Name'> Bildani </span>
                    </Fade></Text>
                <Text fontSize="30px" paddingBottom={"30px"} color={color} textAlign="center"  >
                    <TypewriterComponent
                        options={{
                            strings: ['A Full Stack Web Developer', 'A Mern Stack Developer',],
                            autoStart: true,
                            loop: true,
                        }}
                    /></Text>
                <div>
                    <Box width={["100%", "80%", "60%"]} margin={"auto"} justifyContent={"flex"}>
                        <Fade top cascade >
                            <Text paddingY={"30px"} fontSize={"18px"} textAlign="center" wordBreak={"break-word"}>
                                An Inquisitive Full Stack Web Developer with knowledge of a wide
                                range of programming utilities and languages. Has a relevant hands-on experience in building websites from scratch. Seeking to leverage
                                broad development experience and hands-on technical expertise.
                            </Text>
                        </Fade>
                        {/* <Fade left cascade>
                            <Img margin={"auto"} objectFit={"croped"} width={"80%"} src={require('./res/Profile.jpg')} alt="profile" borderRadius={"20px"} />
                        </Fade> */}
                    </Box>
                </div>
            </Box>
            </Box >
    )
}

export default about;