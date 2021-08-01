import { Box, makeStyles } from "@material-ui/core"
import { FC } from "react"
import '../styles/Home.styles.css'

const useStyles = makeStyles(theme => ({
    containerTitle: {
      textAlign:'center',
      padding:theme.spacing(2),
      marginTop:'12rem',
  },
    title: {
      fontFamily: 'CodePredators-Regular',
      fontWeight: 700,
      fontStyle: 'normal',
      opacity: .6,
      fontSize: '8rem', 
        [theme.breakpoints.down('lg')]: {
          fontSize: '6rem',
        },       
        [theme.breakpoints.down('md')]: {
            fontSize: '5rem',
          },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
          },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
          },
    },
    tagline:{
      marginTop: theme.spacing(6),
      opacity:.8,
      fontSize: '1.6rem',
        [theme.breakpoints.down('lg')]: {
          fontSize: '1.4rem',
        },       
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
          },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
          },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8rem',
          },
    }
  }))

const Home: FC = () => {
    const styles = useStyles()

    return(
      <Box className="background">
      <Box className={styles.containerTitle}><h1 className={styles.title}>BlackHoleSounds</h1><p className={styles.tagline}>Sound Design - Music for Media Productions and Events</p></Box>
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
    </Box>
  )
}

export default Home
