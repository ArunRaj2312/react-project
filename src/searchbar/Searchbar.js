import { Autocomplete, Button, FormControl, Grid, Input, Select, TextField, Typography,  } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import './searchbar.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
// import { CheckBox } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { ShowChartOutlined } from '@mui/icons-material';
import { mainContext } from '../Context';
import FilterDetails from '../FilterDetails/FilterDetails';
import { useNavigate } from 'react-router-dom';
const Seachbar = () => {
    const [price,showPrice]=useState(false)
    const [flat,showFlat]=useState(false)
    const budget=[1000000,2000000,3000000,4000000,5000000,6000000,7000000,8000000,9000000,10000000];
    const {state,dispatch}=useContext(mainContext)
    const min=state.minValue;
    const max=state.maxValue;
    const [minPriceBox,changeMinPriceBox]=useState(true)
    const [maxPriceBox,changeMaxPriceBox]=useState(false)
    const [flats,flatsChangeBox]=useState('Flats')
    const [priceChange,priceChangeBox]=useState('Budget')
    const Residentials=state.residential
    const  bhks=state.bhk
    const navigate=useNavigate()
    
  return (
    <Grid container className='search-container'>
        <Grid item xs={9}>
            <Grid className='search-head '>Welcome back! Let’s continue your search </Grid>
            <Grid container className='search-links'>
                <Grid item xs={.5}>
                    <a href='' >Buy</a>
                </Grid>
                <Grid item xs={.5}>
                    <a href='' >Rent</a>
                </Grid>
                <Grid item xs={.5}>
                    <a href='' >PG</a>
                </Grid>
                <Grid item xs={.5}>
                    <a href='' >Plot</a>
                </Grid>
                <Grid item xs={1.5}>
                    <a href='' >Commercial</a>
                </Grid>
                <Grid item xs={2}>
                    <a href='' >Post Free Property Ad</a>
                </Grid>
            </Grid>
            <Grid container className='Search-bar'>
                <Grid   item xs={4.5} >
                    <LocationOnIcon/>
                    <span className='search-loction'>Chennai <CloseIcon /></span>
                    <input  placeholder="Add more..." />
                </Grid>
                    <Grid  item xs={2} className='search-flat'>
                        <Grid onClick={()=>{showFlat(!flat);showPrice(false)}} style={{width:'100%'}}>
                            <HomeIcon />
                            <span>{flats}</span>
                            <ExpandMoreIcon className='search-icon'/>
                        </Grid>
                        {flat ? <Grid className='bhk-drop' container>
                            <Grid item xs={12} className='flat'>
                                <Typography component='p' varient='p'>Residential <ExpandMoreIcon></ExpandMoreIcon></Typography>
                                <Grid>
                                {Residentials.map((e,index)=>{
                                    return(<Typography component='span' varient='span' key={index} style={Residentials[index].check===true ? {background:'pink'}:{background:'white'}} onClick={()=>{dispatch({type:'resident',payload:{residential:e,check:!Residentials[index].check,index:index}})}}>{e.residential}</Typography>)
                                })}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className='bhk'>
                                {bhks.map((e,index)=>{
                                    return(<Typography component='span' varient='span' key={index} style={bhks[index].check===true ? {background:'pink'}:{background:'white'}} onClick={()=>{dispatch({type:'place',payload:{bhk:e,check:!bhks[index].check,index:index}})}}>{e.bhk} Bhk</Typography>)
                                })}
                            </Grid>
                            <Grid>
                                <Typography component='p' varient='p'>Commercial <ExpandMoreIcon></ExpandMoreIcon></Typography>
                            </Grid>
                            <Grid>
                                <Typography component='p' varient='p'>Other Property Types <ExpandMoreIcon></ExpandMoreIcon></Typography>
                            </Grid>
                        </Grid>
                        :null}
                    </Grid>

                    <Grid  item xs={2} className='search-price'>
                        <Grid onClick={()=>{showPrice(!price);showFlat(false)}} style={{width:'100%'}}>
                            <CurrencyRupeeIcon />
                            <span>{priceChange}</span>
                            <ExpandMoreIcon className='search-icon'/>
                        </Grid>
                        {price ? <Grid className='price-drop' container> 
                            <Grid item xs={6}>
                                <input type={'text'} placeholder={'min price'} value={min===0 ? '':min} style={{marginRight:'5px'}}></input>  
                            </Grid>
                            <Grid item xs={6}>
                                <input type={'text'} placeholder={'max price'} value={max===10000000 ? '':max}></input>
                            </Grid>
                            <Grid item xs={12} container className='price-drops'>
                                <Grid  item xs={6} style={{width:'100%'}}>
                                {minPriceBox ?<Grid className='min-price' onClick={()=>{changeMinPriceBox(false);changeMaxPriceBox(true)}} style={{width:'100%'}}>
                                {budget.map((e,index)=>{
                                    return(<Typography component='span' varient='span' key={index} onClick={()=>{dispatch({type:'minValue',payload:e});priceChangeBox(`Greater ₹ ${e/100000}...`)}}>{'₹'+e/100000+'Lac'}</Typography>)
                                })}
                                </Grid>:null}
                                </Grid>
                                {maxPriceBox ?<Grid className='max-price' item xs={6} onClick={()=>{showPrice(false)}}>
                                {budget.filter((e,index)=>{
                                    return(min<e)
                                }).map((e,index)=>{
                                    return(<Typography component='span' varient='span' key={index} onClick={()=>{dispatch({type:'maxValue',payload:e});priceChangeBox(`${min/100000}-Lacs-${e/100000}`)}}>{'₹'+e/100000+'Lac'}</Typography>)
                                })}
                                </Grid>:null}
                            </Grid>
                        </Grid>
                        :null}
                    </Grid>
                    <Grid  item xs={2}>
                        <Button className='search-button' onClick={()=>navigate('/next')}><SearchIcon/> Search</Button>
                    </Grid>
                 </Grid>
        </Grid>
        
        <Grid item xs={3}>
            <img src='https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/tvc/tvc-campaign-web-pnm.png' alt="imagr not found" />
        </Grid>

    </Grid>
  )
}

export default Seachbar