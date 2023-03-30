import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import './Card.scss';
import { Grid } from '@mui/material';
function Card() {
    const card=[{
        rupe:'30+',
        title:'Properties Within 5L -20L',
        link:'Continue last search',
        icon: <RestoreOutlinedIcon/>,
    },{
        rupe:'',
        title:'Get personalised property recommendations from us',
        link:'See all',
        icon: <VpnKeyOutlinedIcon/>,
    },{
        rupe:'',
        title:'Top Handpicked Projects for you',
        link:'See all',
        icon:<MapsHomeWorkOutlinedIcon/>,
    },{
        rupe:'',
        title:'Top Exclusive Owner Properties',
        link:'See all',
        icon:<AddLocationAltOutlinedIcon/>,
    }]
  return (
    <div className={'container-sec'}>
        <h2>Because you searched chennai</h2>
    <Grid container> 
        {card.map((e,index)=>{
            return(
            <Grid item key={index} xs={3} className={'card'}>
                <Grid className={'card-col'}>
                    <Grid>
                        <span className={'rupe'}>{e.rupe}</span>
                        <span className={'title'}>{e.title}</span>
                    </Grid>
                    <p className={'link'}>{e.link}<ArrowForwardIcon className='arrow'/></p>
                    <p className={'icon'}>{e.icon}</p>
                </Grid>
            </Grid>)
        })
    }
    </Grid>
    </div>
  )
}

export default Card