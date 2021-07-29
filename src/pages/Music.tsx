import { Box } from "@material-ui/core"
import { FC } from "react"

const Music: FC = () => {

    return(<Box p={3} m='0 auto' maxWidth='600px' style={{opacity:'60%'}}>
            <h2 >Music</h2>
            <p>Composer: Dave Kooyman</p>
            <p>Performing Artist: Dave Kooyman</p>
            <p>Label: BlackHoleSounds</p>
            <p>Music Rights Organization: BUMU / STEMRA</p>
            </Box>)
}

export default Music
