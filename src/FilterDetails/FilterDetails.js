import { Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { mainContext } from '../Context'
import './FilterDetails.scss'

function FilterDetails() {
    const Navigate=useNavigate()
    const allstate=useContext(mainContext)
    const apistate=allstate.state.gallery
    const minstate=allstate.state.minValue
    const maxstate=allstate.state.maxValue
    const bhkstate=allstate.state.bhk
    const residentstate=allstate.state.residential
    // console.log('api',minstate)

    const handleFilter=()=>{
       var filterDetails=[...apistate].filter((e)=>{
            return(Number(minstate)<=Number(e['house_price'])*100000 && Number(e['house_price'])*100000<=Number(maxstate)
            )
        }).filter((element)=>{
                        var returnchecker=[...bhkstate].every((value)=>value.bhk==='');
                        // console.log(bhkstate.bhk);
                        // console.log(element.flat);
                        [...bhkstate].forEach((ele)=>{
                            // console.log("bhk",ele.bhk)
                            // console.log('element',element.flat);
                            if (element.flat === ( ele.check ? ele.bhk : null)){
                                returnchecker=true
                                // console.log('flat',ele.bhk)
                            }
                        })
                        return returnchecker
                    }).filter((element)=>{
                        var returnchecker=[...residentstate].every((value)=>value.residential==='');
                        [...residentstate].forEach((ele)=>{
                            // console.log(element.resident,ele.resident)
                            if(element.resident===(ele.check ? ele.residential:null)){
                                returnchecker=true
                            }
                        })
                        return returnchecker
                    })
                    // console.log(filterDetails);
                    return filterDetails
    }
    const filteredData = handleFilter()
    // console.log('date',filteredData)
    return(
        <Grid className='filter-container'>
            <Grid className='filter-content'>
                <Typography className="   " component={'h2'}>{filteredData.length} results | Residential Properties for Sale in Chennai</Typography>
                {[...filteredData].map((ele,ind)=>{
                    return(
                        <Grid key={ind} container className="filter-elements">
                            <Grid item xs={2} className='house-img-container' >
                                <Grid className='house-img'>
                                    <img src={ele.house_img} alt='image not found'/>
                                </Grid>
                                <Typography component={'p'} className='filter-owner' >Owner : {ele.owner_name}</Typography>
                            </Grid>
                            <Grid item xs={8} className='filter-Detail'>
                                <Typography className="filter-label" component={'span'}>Only on magicbricks</Typography>
                                <Typography component={'h6'}>{ele.house_address}</Typography>
                                <Typography component={'a'}>{ele.house_area}</Typography>
                                <Grid container className="filter-details-container" >
                                    <Grid item xs={4} className='filter-item'>
                                        <span>SUPER AREA</span>
                                        <Typography component={'p'}>{ele.super_area}sqft</Typography>
                                    </Grid>
                                    <Grid item xs={4} className='filter-item'>
                                        <span>UNDER CONSTRUCTION</span>
                                        <Typography component={'p'}>Poss. by {ele.under_construction}</Typography>
                                    </Grid>
                                    <Grid item xs={4} className='filter-item'>
                                        <span>TRANSACTION</span>
                                        <Typography component={'p'}>{ele.transaction}</Typography>
                                    </Grid>
                                    { ele.car_parking  !=='' ?
                                    <Grid item xs={4} className='filter-item'>
                                        <span>CAR PARKING</span>
                                        <Typography component={'p'}>{ele.car_parking} </Typography>
                                    </Grid>
                                    : null 
                                    }
                                <Grid item xs={4} className='filter-item'>
                                        <span>BATHROOM</span>
                                        <Typography component={'p'}>{ele.bathroom} </Typography>
                                    </Grid>
                                    <Grid item xs={4} className='filter-item'>
                                        <span>FURNISHING</span>
                                        <Typography component={'p'}>{ele.furnishing} </Typography>
                                    </Grid>
                                </Grid>  
                                <Grid item xs={12}>
                                        <span>Welcome to thoughtfully designed Super Smart Homes. Control your home at the click of a button. Yes! Every home at Navin's Starwood Towers.</span>
                                </Grid>
                            </Grid>
                            <Grid item xs={2} className='view-button'>
                                    <Grid item xs={12}  >
                                        <Typography  component={'p'}>₹{ele.house_price} Lacs</Typography>
                                        <Typography component={'span'}>₹{Math.round(ele.house_price*100000/ele.super_area)} per sqft</Typography>
                                        <Button onClick={()=>{Navigate(`/unicdata/${ele.house_id}`)}} className=''>View Details</Button>
                                    </Grid>
                                </Grid>
                            
                        </Grid>
                    )
                })
                }
            </Grid>
        </Grid>
    )
  
}

export default FilterDetails