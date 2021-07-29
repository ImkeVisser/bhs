import { Box, makeStyles } from "@material-ui/core"
import { FC } from "react"
import './Home.styles.css'

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        textAlign:'center',
        padding:theme.spacing(2),
        marginTop:'12rem',
    },
    title: {
        fontSize: '4rem',        
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
          },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
          },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4rem',
          },
    },
    tagline:{
        opacity: '60%',
        fontFamily: 'termina,sans-serif',
        fontWeight: 500,
        fontStyle: 'normal',
    }
  }))

const Home: FC = () => {
    const styles = useStyles()

    return(
    <>
      <Box className={styles.container}><h1 className={styles.title}>BlackHoleSounds</h1><p className={styles.tagline}>Sound Design - Music for Media Productions and Events</p></Box>
      <div className="space"></div>
      <div className="container">
        <div className="wrapper">
          <div className="blackhole">
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
