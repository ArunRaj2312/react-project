import React from 'react'
import { Grid } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Explore.scss'
function Explore() {
  return (
    <div className='explo-container'>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Grid className='explo-col'>
                    <h1>Explore</h1>
                    <p>Popular Localities in Chennai</p>
                </Grid>
            </Grid>
            <Grid item xs={9} container spacing={2}>
                <Grid item xs={4}>
                    <Grid className='gallery-col'>
                        <Grid className='gal-head'>
                            <h3>Tambaram<LaunchIcon/></h3>
                            <p>₹3,908 - ₹5,846 per sqft</p>
                        </Grid>
                        <Grid className='gal-review'>
                            <div>
                                <p>4.0<StarIcon/></p>
                            </div>
                            <div>
                                <p>76 Reviews</p>
                            </div>
                        </Grid>
                        <Grid className='gal-link'>
                            <img src='https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality00.png' alt='no image'></img>
                            <p>1395 Properties for sale <ArrowForwardIcon className='arrow'/></p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid className='gallery-col'>
                        <Grid className='gal-head'>
                            <h3>Ambattur<LaunchIcon/></h3>
                            <p>₹4,315 - ₹5,846 per sqft</p>
                        </Grid>
                        <Grid className='gal-review'>
                            <div>
                                <p>3.9<StarIcon/></p>
                            </div>
                            <div> 
                                <p>147 Reviews</p>
                            </div>
                        </Grid>
                        <Grid className='gal-link'>
                            <img src='https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality01.png' alt='no image'></img>
                            <p>967 Properties for sale <ArrowForwardIcon className='arrow'/></p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid className='gallery-col'>
                        <Grid className='gal-head'>
                            <h3>SholingaNallur<LaunchIcon/></h3>
                            <p>₹4,785 - ₹5,846 per sqft</p>
                        </Grid>
                        <Grid className='gal-review'>
                            <div>
                                <p>3.9<StarIcon/></p>
                            </div>
                            <div>
                                <p>128 Reviews</p>
                            </div>
                        </Grid>
                        <Grid className='gal-link'>
                            <img src='https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality02.png' alt='no image'></img>
                            <p>746 Properties for sale <ArrowForwardIcon className='arrow'/></p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Explore