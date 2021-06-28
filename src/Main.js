import React from 'react';
import {Link} from 'react-router-dom';

import Context from './helper/Context';

import { Grid, Button, Box, Typography, Paper, Grow, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Block, Translate } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import mainVideo from './assets/videoQuoWeb.mp4';
//import mainPicture from'./assets/FotoQuoReduc.jpg';
//import mobilePicture from'./assets/FotoQuoMobile3.jpg';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MyComponent from './MyComponent';

const useStyles = makeStyles( (mainTheme) => ({
  contentStyle: {
    position: 'absolute',
    top: '65px'
  },
  buttonStyle:{
    color: "white",
    backgroundColor:mainTheme.palette.secondary.main,
    textTransform:"none",
    width: "290px",
    margin: "2px",
    "&:hover": {
      color:mainTheme.palette.secondary.main,
      backgroundColor:mainTheme.palette.primary.main,
    },
  },
  inputStyle: {
    background: "white",
  },
  formStyle:{
    backgroundColor:'orange'
  },
  socialNetworkBox:{
    position:'fixed',
    marginTop:'160px',
    color:mainTheme.palette.secondary.main,
    backgroundColor:'none',
    width:'100%',
    textAlign: 'center',
    AlignItems: 'center',
  }, 
  iconStyle:{
    color: mainTheme.palette.secondary.main, 
    backgroundColor: 'none',  
    margin:'5px',
  }
}))

export default function Main () {

  const classes = useStyles();  

  return (
    <div>
      <Header />

        <div className="video-container">
           <video autoPlay loop muted
           >
            <source src={mainVideo} type="video/mp4"/>
          </video>
        </div>

        <div className="video-section-info">
         <Grid container direction="row" alignItems="center" justify="center" style={{ minHeight:'30vh'}} /> 

         <Grid container direction="row" alignItems="center" justify="center" style={{minHeight:'35px'}}>
           <div style={{backgroundColor:'white'},{height:'20vh'}}></div>
             <Grid item container direction="column" alignItems="center" justify="center" spacing={2} >
               <MyComponent />
             </Grid>
             <Slide in direction = "up" timeout = {1000}>
             <Grid item container direction="row" alignItems="center" justify="center" spacing={2} xs={12} sm={6}> 
               <Button className={classes.buttonStyle} component={Link} to={'/contact'} variant="outlined" size ="large" disableRipple>Me interesa ! Quiero catastrarme</Button>
               <Button className={classes.buttonStyle} component={Link} to={'/login'}variant="contained" size ="large"disableRipple>Ya soy cliente, quiero conectarme</Button>
             </Grid>
             </Slide>
        </Grid>

        <Slide in direction = "up" timeout = {1600}>
        <Box className={classes.socialNetworkBox}>
          <Typography>Seguinos en nuestras redes sociales</Typography>
          <LinkedInIcon className={classes.iconStyle} style={{ fontSize: 30 }}/>
          <TwitterIcon className={classes.iconStyle} style={{ fontSize: 30 }}/>
          <FacebookIcon className={classes.iconStyle} style={{ fontSize: 30 }}/>
          <InstagramIcon className={classes.iconStyle} style={{ fontSize: 30 }}/>
        </Box>
        </Slide>
      <Footer />
      </div>
    </div>
  )
}