import { Box } from "@material-ui/core"
import { FC } from "react"

const Contact: FC = () => {

return(
    <Box display='flex' justifyContent='center' alignItems='center' style={{opacity:'60%'}}>
        <Box mt={16}>
            <h2 >Contact</h2>
            <Box mt={3}>
            <p>Dave Kooyman</p>
            </Box>
            <p>Blackholesounds.com</p>
            <p>Kvknr: 34317982</p>
            <p>info@blackholesounds.com</p>
        </Box>
    </Box>
    )
}

export default Contact
