import { Box, IconButton, makeStyles } from "@material-ui/core"
import { FC, useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Height } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    navbar: {
      display:'flex',
      alignItems:'center',
      padding: theme.spacing(2),
    },
    home:{
        width:'100%',
        '& > a':{
        fontFamily: 'ff-nuvo-mono-web-pro,sans-serif',
        fontWeight: 900,
        fontStyle: 'normal',
        color: '#ffffff',
        opacity: '87%',
        textDecoration:'none',
        }
    },
    menu: {
        color: '#ffffff',
        opacity: '87%',        
    },
    navMenu: {
        width: '100%',
        height:'100%',
        position:'absolute',
        top:0,
        zIndex:5,
        background: '#232526', 
    },
    menuList: {
        padding:0,
        listStyle:'none',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    '& > li': {
        padding: theme.spacing(3),
    },
    '& > li > a': {
        color: '#ffffff',
        opacity: '87%',
        textDecoration:'none',
        fontSize:'2rem',
    }
    }
  }))
  
const Navigation: FC = () => {
const [menuOpen, setMenuOpen] = useState<Boolean>(false)
const styles = useStyles()

    return(
    <nav>
        <Box className={styles.navbar}>
        <Box className={styles.home}>
        <Link to="/">BHS</Link>
        </Box>
        <IconButton className={styles.menu} aria-label="menu" onClick={()=> setMenuOpen(!menuOpen)} >
           <MenuIcon fontSize="large" />
        </IconButton>
        </Box>
        {menuOpen && 
        <Box className={styles.navMenu}>
        <Box display='flex' justifyContent='flex-end' p={3}>
            <IconButton className={styles.menu} aria-label="menu" onClick={()=> setMenuOpen(!menuOpen)} >
                <CloseIcon fontSize="large" />
            </IconButton>  
        </Box>         
          <ul className={styles.menuList}>
          <li onClick={()=> setMenuOpen(false)}>
              <Link to="/music">Music</Link>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>
          </ul>               
        </Box>}
    </nav>
    )
}

export default Navigation
