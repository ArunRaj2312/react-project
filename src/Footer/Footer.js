import { Autocomplete, Grid, Typography } from "@mui/material";
import React from "react";
import './Footer.scss'
export const Footer=()=>{
    return(
        <Grid>
            <Grid className='footer-post' container>
                <Grid className='post'>
                    <Typography component='h1' varient='h1'>Post your Property for <span>Free</span></Typography>
                    <Typography component='p' varient='p'>List it on Magicbricks and get geniune leads</Typography>
                </Grid>
                <Grid>
                    <a className='right-post' href={'https://www.magicbricks.com/'}>Post Property <span>Free</span></a>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="footer-container">
                <Grid item xs={5.5}>
                <Typography  component="h6">About Magicbricks</Typography>
                <Typography className="about"  component="p"> Magicbricks is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, packers and movers, legal assistance, property valuation, and expert advice </Typography>

                </Grid>
                <Grid item xs={5.5}>
                <Typography  component="h6">Properties in India</Typography>
                <Typography  component="p"><a href="#">Property in Mumbai</a>  | <a href="#">Property in Chennai</a>  | <a href="#">Property in Pune</a>  | <a href="#">Property in Noida</a>  | <a href="#">Property in Gurgaon</a>  | <a href="#">Property in Bangalore</a>  | <a href="#">Property in Ahmedabad</a></Typography>

                </Grid>
                <Grid item xs={6}>
                <Typography  component="h6">More from our Network</Typography>
                    <ul>
                        <li>Times of India</li>
                        <li><a href="#">Economic Times</a></li>
                        <li><a href="#">Navbharat times</a></li>
                        <li><a href="#">India Times</a></li>
                        <li><a href="#">Filmfare</a></li>
                        <li><a href="#">iDiva</a></li>
                        <li><a href="#">Mens Xp</a></li>
                        <li><a href="#">Times Jobs</a></li>
                        <li><a href="#">Gadgets Now</a> </li>
                    </ul>
                    <Grid container className="icon-container">
                        <Grid item xs={5}>
                            <Grid container className="icon-container" >
                                <Grid item xs={5} className='play-icon'>
                                    <img  src="https://www.bbassets.com/static/v2644/custPage/build/content/img/Google-App-store-icon.png"  alt= "image not found"/>
                                </Grid>
                                <Grid item xs={5} className='play-icon'>
                                    <img src="https://www.bbassets.com/static/v2644/custPage/build/content/img/Apple-App-store-icon.png"  alt= "image not found"/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container className="footer-icons">
                                <Grid  className="footer-icon facebook">
                                    <i className="fa fa-facebook"></i>
                                </Grid>
                                <Grid  className="footer-icon pinterest">
                                    <i className="fa fa-pinterest-p"></i>
                                </Grid>
                                <Grid className="footer-icon twitter">
                                    <i className="fa fa-twitter"></i>
                                </Grid>
                                <Grid  className="footer-icon instagram">
                                    <i className="fa fa-instagram"></i>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={5.5}>
                <Typography   component="h6"> New Projects in India</Typography>
                <Typography  component="p"><a href="#"> New Projects in New Delhi</a> |  <a href="#">New Projects in Mumbai</a> | <a href="#">New Projects in Chennai</a> | <a href="#">New Projects in Pune</a> | <a href="#">New Projects in Noida</a> | <a href="#">New Projects in Gurgaon</a> | <a href="#">New Projects in Bangalore</a> | <a href="#">New Projects in Ahmedabad</a></Typography>
                </Grid>
                
            </Grid>
        </Grid>
    )
}