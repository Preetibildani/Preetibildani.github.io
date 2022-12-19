import { Box, Center, Flex, Img, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { Fade } from 'react-reveal';

const Statistics = () => {
    const bg = useColorModeValue('black')
    const color = useColorModeValue('#5fc49a')
    return (
        <Box bg={bg} color={color} paddingY={"30px"} paddingTop={"80px"} id="stat">
            <Text textAlign={"center"}  fontSize="3xl" paddingY={"30px"} >DAYS I CODE</Text>
            <div className='calender'>
        <GitHubCalendar username="Preetibildani"
         style={{margin:"auto", padding:"20px"}}
          ><ReactTooltip delayShow={20} html/>
          </GitHubCalendar>
        {/* <ReactTooltip/> */}
        </div>
            <Fade right cascade>
                <Box margin={"auto"} width={"80%"} >
                    <SimpleGrid columns={[1, 1, 1, 2]} width={["100%", "90%", "90%"]} margin={"auto"} padding={"20px"} justifyContent={"center"} alignItems={"center"} >
                        <Img src="https://github-readme-stats.vercel.app/api?username=preetibildani&show_icons=true&locale=en&theme=tokyonight" alt="preetibildani" />
                        <Img src="https://github-readme-streak-stats.herokuapp.com/?user=preetibildani&theme=tokyonight" alt="preetibildani" />
                    </SimpleGrid>
                    <Flex width={["70%", "70%", "60%", "20%"]}  margin={"auto"} justifyContent={"center"} alignItems={"center"} textAlign={"center"} alignSelf={"center"}>
                        <Center>
                            <Img  margin={'auto'} src="https://github-readme-stats.vercel.app/api/top-langs?username=preetibildani&show_icons=true&locale=en&theme=tokyonight" alt="preetibildani" />
                        </Center>
                    </Flex>
                </Box>
            </Fade>
        </Box>
    )
}

export default Statistics