import { Grid } from '@mui/material'
import React from 'react'
import FireTruckIcon from '@mui/icons-material/FireTruck';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Subheader.scss'

const Subheader = () => {
  return (
    <Grid container className='Sub-header'>
        <Grid item xs={1}>
         <a className='sub-head-links' href='https://www.magicbricks.com/'>Buy <ExpandMoreIcon/></a>
        </Grid>
        <Grid item xs={1}>
         <a className='sub-head-links' href='https://www.magicbricks.com/'>Rent  <ExpandMoreIcon/></a>
        </Grid>
        <Grid item xs={1}>
         <a className='sub-head-links' href='https://www.magicbricks.com/'>Sell <ExpandMoreIcon/></a>
        </Grid>
        <Grid item xs={1.5}>
         <a className='sub-head-links' href='https://www.magicbricks.com/'>Home Loans <ExpandMoreIcon/></a>
        </Grid>
        <Grid item xs={2}>
         <a className='sub-head-links' href='https://www.magicbricks.com/'>Property Service <ExpandMoreIcon/></a>
        </Grid>
        <Grid item xs={2}>
         <a className='sub-head-links' href='https://www.magicbricks.com/'>MB Advice <span>New</span> <ExpandMoreIcon/></a>
        </Grid>
        <Grid item xs={1}>
         <a className='sub-head-links' href='https://www.magicbricks.com/'>Help <ExpandMoreIcon/></a>
        </Grid>
        <Grid item xs={2.5}>
         <a className='sub-offer-link' href='https://www.magicbricks.com/'><FireTruckIcon /> 20% OFF on Home Shifting </a>
        </Grid>
    </Grid>
  )
}

export default Subheader