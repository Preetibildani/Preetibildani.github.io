import { Box, Button, Flex, HStack, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaLink } from 'react-icons/fa'
import { Fade } from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {


    const projectsArr = [
        {
            title: "ShopBop Clone",
            banner: require('./res/other/shopbop.png'),
            description: " It is a clone of the daily Accessories e-commerce user-friendly. A collaborative project built by a team of 5 in 5 days.In this we put Login and Signup authentication, Project management Users can sort and filter prices, Payment methods.",
            techBlue: [
                {
                    image: require('./res/yellow/java-script.png'),
                    alt: "Javascript"
                },
                {
                    image: require('./res/yellow/html.png'),
                    alt: "HTML"
                },
                {
                    image: require('./res/yellow/css-3.png'),
                    alt: "CSS"
                },
            ],
            
            github: 'https://github.com/Anumulaashok/Shopbop-project',
            live: 'https://elegant-empanada-5cef80.netlify.app/'
        },
        {
            title: "Expedia Clone",
            banner: require('./res/other/Expedia.png'),
            description: "This was my first React project Which was lead by me, We were five members assigned for the project. It took around 5 days to complete the task. In this project, my contribution was I had to build the Admin panel with full functionality and Home Page Component.",
         
            techBlue: [{
                image: require('./res/yellow/atom.png'),
                alt: "React"
            }, {
                image: require('./res/yellow/chakra-ui.png'),
                alt: "Chakra UI"
            },{
                image: require('./res/yellow/java-script.png'),
                alt: "Javascript"
            },{
                image: require('./res/yellow/redux.png'),
                alt: "redux"
            },],
            github: 'https://github.com/Preetibildani/average-pig-3056',
            live: ''
        },
        {
            title: "Mytheresa Clone",
            banner: require('./res/other/mytheresa.png'),
            description: "This was our first React collaborative project, there were four members assigned for the project. It took around 5 days to complete the task. In this project, my contribution was I had to build the Women-Home page and also Mens-page with full functionality.",
        
            techBlue: [{
                image: require('./res/yellow/atom.png'),
                alt: "React"
            }, {
                image: require('./res/yellow/chakra-ui.png'),
                alt: "Chakra UI"
            },{
                image: require('./res/yellow/java-script.png'),
                alt: "Javascript"
            },{
                image: require('./res/yellow/redux.png'),
                alt: "redux"
            },],
            github: 'https://github.com/omkundu/affable-fang-3484',
            live: ''
        },
        {
            title: "leadIq Clone",
            banner: require('./res/other/leadIQ.png'),
            description: "This was our first collaborative project in react, there were six members assigned for the project. It took around 5 days to complete the task. In this project, my contribution was I had to build the Home page, navbar page and also signup page with full functionality.",
      
            techBlue: [{
                image: require('./res/yellow/java-script.png'),
                alt: "Javascript"
            },
            {
                image: require('./res/yellow/html.png'),
                alt: "HTML"
            },
            {
                image: require('./res/yellow/css-3.png'),
                alt: "CSS"
            },],

            github: 'https://github.com/Rohit9252/-fluent-wilderness-1844',
            live: "https://darling-monstera-c7dcbc.netlify.app/"
        },
      

    ]
    
    const bg = useColorModeValue('black')
    const color = useColorModeValue('#5fc49a', 'white')
    return (
        <Box paddingY={"30px"} paddingTop={"80px"} bg={bg} color={color} id="Projects">
            <Text textAlign={"center"} fontSize="3xl" color={color} >
                Projects
            </Text>
            <VStack paddingY={"30px"} width={"70%"} margin={"auto"} gap={"50px"}>
                {projectsArr.map((elem) => {
                    return <HStack className='hvr-grow-shadow' >
                        <SimpleGrid columns={[1, 1, 1, 2]} padding={"40px"} justifyContent={"center"} alignItems={"center"} gap={"20px"} border={"3px solid"} borderColor={color} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"15px"}>
                            <Fade left cascade >
                                <Box overflowY={"hidden"} height={"300px"}>
                                    <Img border="3px solid" borderColor={color} borderRadius={"10px"} width={"2500px"} src={elem.banner} alt={elem.title} />
                                </Box>
                            </Fade>
                            <VStack alignSelf={"flex-start"}>
                                <Fade right cascade>
                                    <Text fontSize="2xl" color={"color"} textAlign={"center"}>
                                        {elem.title}
                                    </Text>
                                </Fade>
                                <Text color={"white"} fontSize={"18px"} align={"center"}>
                                    {elem.description}
                                </Text>
                                <Flex flexWrap={'wrap'} justifyContent={"center"} gap={"10px"} paddingY={"20px"} alignSelf={"center"}>{(bg === 'black' ? elem.techBlue : elem.techYellow).map((el) => <Img className='hvr-pop' alignSelf={"start"} width={"30px"} src={el.image} alt={el.alt} />)} </Flex>
                                <HStack align={"end"}>
                                    <a href={elem.github} target={"_blank"} ><Button className='hvr-underline-from-center' leftIcon={<FaLink />}>Github</Button></a>
                                    <a href={elem.live} target={"_blank"} ><Button className='hvr-underline-from-center' leftIcon={<FaLink />}>Live</Button></a>
                                </HStack>
                            </VStack>
                        </SimpleGrid>
                    </HStack>
                })}
            </VStack>
        </Box >
    )
}

export default Projects