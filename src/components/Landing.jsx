import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import{ Button, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TitleIcon from '@material-ui/icons/Title';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
export default function Landing() {
    const classes = useStyles();

    return (
        <Box>
            <AppBar style={{ background: '#b39ddb' }} position="static">
                <Toolbar>
                <IconButton edge="start" href="/" className={classes.menuButton} color="inherit" aria-label="menu">
                    <TitleIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Talent Invest
                </Typography>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/profile">Students</Button>
                <Button color="inherit" href="/search">Investors</Button>
                <Button color="inherit">Testimonials</Button>
                <Button color="inherit">About Us</Button>
                <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>

              

            <Box fontSize={32} fontWeight="bold" length={50} width={600} margin={10}>
                Better Student Financing with Income Sharing Agreements - The new Investment Class
                <Box fontSize={12} color="gray.200" marginTop={3} marginBottom={2} width={450}>
                    Affordable access to higher education remains the foundation for a more sustainable future. At Talent Invest we want to be part of the revolution necessary to drive this goal.
                </Box>
                <Button style={{ background: '#b39ddb' }} variant="contained">
                    <Box color="white">
                        Start a New Profile Today
                    </Box>
        
                </Button>        
            </Box>

            <Box fontSize={40} fontWeight={30} margin={10} textAlign="center">
                Our Services
            </Box>

            <Box fontSize={12} border={1} height={200} margin={10} textAlign="center" >
                    We provide a marketplace to
                
                <Box fontSize={12} border={1} marginTop={10}>
                    Test
                </Box>
            </Box>

           
     

        </Box>

    )
}
