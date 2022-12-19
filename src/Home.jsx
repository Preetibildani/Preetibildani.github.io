import { Box, color, Heading, HStack, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import './App.css';
import { Fade } from 'react-reveal';
import { Button } from 'react-scroll';
import TypewriterComponent from 'typewriter-effect';
// import "./res/Preeti_Bildani_Resume.pdf"
function Home() {
    const bg = useColorModeValue('black')
    const color = useColorModeValue('#5fc49a')
    
    // const handleResume = () => {
    //     return window.open('https://drive.google.com/file/d/1n_wtR7GrfwU5w1E3kijo2u4ZDTggBCJs/view?usp=share_link');
    // }
    return (
        <Box  bg={bg} id={"Home"}>
            <Box width={"80%"} height={"100%"}
                margin="auto" paddingTop={"60px"} >
                <Text className='Profile_Name' paddingTop={"30px"} color={color} align="center" fontSize={{ sm: '20px', md: '30px', lg: '50px' }}>Hi, I am
                    <Fade color={"white"} textAlign={"center"} top cascade >
                        <span color={"white"}  className='Profile_Name'> Preeti </span>
                        <span color={"white"} className='Profile_Name'> Bildani </span>
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
                            <Text color={"white"} paddingY={"30px"} fontSize={"22px"} textAlign="center" wordBreak={"break-word"}>
                                An Inquisitive Full Stack Web Developer with knowledge of a wide
                                range of programming utilities and languages. Has relevant hands-on experience in building websites from scratch. Seeking to leverage
                                broad development experience and hands-on technical expertise.
                            </Text>
                        </Fade>
                        {/* <Fade left cascade>
                            <Img margin={"auto"} objectFit={"croped"} width={"80%"} src={require('./res/Profile.jpg')} alt="profile" borderRadius={"20px"} />
                        </Fade> */}
                    </Box>
                </div>
            </Box>
            
            <Box width={["80%", "50%"]}
                margin="auto"
                marginTop={"100px"}
                paddingY={"20px"}>
                <HStack gap={"20px"}>
                    <SimpleGrid columns={[1, 1, 1, 2]} padding={"20px"} justifyContent={"space-between"} alignItems={"center"} gap={"20px"}>
                        {/* <Box width={"250px"} box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"> */}
                        <Fade left cascade>
                            <Img margin={"auto"} objectFit={"croped"} width={"80%"} src={require('./res/Profile.jpg')} alt="profile" borderRadius={"20px"} />
                        </Fade>
                        {/* </Box> */}
                        <VStack width={"100%"}>
                            <Fade right cascade>
                                <HStack fontSize={"33px"}
                                >
                                    <Text className='hvr-underline-from-center' color={color}>
                                        About Me
                                    </Text>
                                </HStack>
                                <Text style={{ color: "white" }} textAlign={"center"} paddingY={"10px"} fontSize={"20px"}>Hi Everyone, I am <span style={{ color: "#5fc49a" }}>Preeti Bildani</span> from <span style={{ color: "#5fc49a" }}>Wardha, Maharashtra</span>. I have doing my graduation in Bachelor of Business Administration from Sant Gadge Baba University. Amravati, Maharashtra.</Text>
                                <Box className='btn-grad' borderRadius={"5px"} border={"1px solid"} borderColor={color}>
                                <a href="preeti.pdf" target={"_blank"} download="preeti.pdf" >Resume</a>
                                </Box>
                            </Fade>
                        </VStack>
                    </SimpleGrid>
                </HStack>
            </Box>
            </Box >
    )
}

export default Home;