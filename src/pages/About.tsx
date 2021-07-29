import { Box } from "@material-ui/core"
import { FC } from "react"

const About: FC = () => {

    return(<Box p={3} m='0 auto' maxWidth='600px'>
        <Box style={{opacity:'60%'}}>
        <h2>Biography</h2>
        <p>As a video editor, I have always been searching for suitable music To add or emphasize the atmosphere of the images.  Video editing is my job but in my heart I am a musician. I have always composed my own songs for the band or just because I like fiddling around on my guitar. It was only a small step to start creating music for the TV programs I am editing.</p>
        <p>Every sound on this site, was created by me in my self-built studio. I produce, compose, play and mix every sound myself.</p>
        <p>Most of the music is produced to support the TV programs but I also produce instrumental tracks and soundscapes which are suitable for TV or other media productions.</p>
        </Box>
        <Box py={1} style={{opacity:'86%'}}>
        <p><em>All tracks are free to use in media productions or events. Please submit them to BUMU / STEMRA.</em></p>
        </Box>
        </Box>
)
}

export default About
