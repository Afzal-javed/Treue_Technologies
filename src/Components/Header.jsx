import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "../Styles/Header.css";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import logo2 from "../../src/assets/logo2.jpg";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawer = () => {
        setMobileOpen(!mobileOpen);
    }
    const drawer = (
        <Box onClick={handleDrawer} sx={{ textAlign: "center" }}>

            <Typography id="typography" color={"goldenrod"}
                variant='h5'
                component={"div"}
                sx={{ flexGrow: 1, height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}
                bgcolor={"black"}
            >
                <img src={logo2} alt='logo' />
                PortFolio</Typography>
            <Divider />
            <ul className='mobile-navigation-menu'>
                <li>
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={600}>Home</Link>
                </li>

                <li>
                    <Link activeClass='active' to='skillsAbout' spy={true} smooth={true} offset={-100} duration={600}>About</Link>
                </li>
                <li>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={600}>Skill</Link>
                </li>
                <li>
                    <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={600}>Education</Link>
                </li>
                <li>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={600}>Projects</Link>
                </li>
                <li>
                    <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={600}>Contact</Link>
                </li>

            </ul>

        </Box>
    )
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar id="toolbar">
                        <IconButton color='inherit' aria-label='open drawer' edge="start"
                            sx={{
                                mr: 2,
                                display: { sm: "none" }
                            }}
                            onClick={handleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <img src={logo2} alt='logo' />
                        <Typography color={"goldenrod"}
                            variant='h5'
                            component={"div"}
                            sx={{ flexGrow: 1 }}>

                            PortFolio</Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={600}>Home</Link>
                                </li>
                                <li>
                                    <Link activeClass='active' to='skillsAbout' spy={true} smooth={true} offset={-100} duration={600}>About</Link>
                                </li>
                                <li>
                                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={600}>Skill</Link>
                                </li>
                                <li>
                                    <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={600}>Education</Link>
                                </li>
                                <li>
                                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={600}>Projects</Link>
                                </li>
                                <li>
                                    <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={5} duration={600}>Contact</Link>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component={"nav"}>
                    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawer}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "240px",
                            },
                        }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box >
                    <Toolbar />
                </Box>
            </Box>
        </>
    )
}

export default Header