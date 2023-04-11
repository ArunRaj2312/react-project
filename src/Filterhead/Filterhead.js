import React,{useState,useContext} from "react";
import { Grid,Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { mainContext } from "../Context";
import './Filterhead.scss'

const Filterhead=()=>{
    const [price,showPrice]=useState(false)
    const budget=[1000000,2000000,3000000,4000000,5000000,6000000,7000000,8000000,9000000,10000000];
    const {state,dispatch}=useContext(mainContext)
    const min=state.minValue;
    const max=state.maxValue;
    const [minPriceBox,changeMinPriceBox]=useState(true)
    const [maxPriceBox,changeMaxPriceBox]=useState(false)
    const [flat,showFlat]=useState(false)
    const [home,showHome]=useState(false)
    const Residentials=state.residential
    const  bhks=state.bhk
    const [flats,flatsChangeBox]=useState('Flats')
    const [priceChange,priceChangeBox]=useState('Budget')
    return(
        <Grid container className="filter-sub-head" >
            <Grid item className="filter-options" >
                <span className='filter-row' href='https://#'>Buy <ExpandMoreIcon/></span>
                <span className='search-loction'>Chennai</span>
                <input  placeholder="Add more..." />
            </Grid>
            <Grid item className="filter-options" >
                <span className=''>Top Localities</span>
                <ExpandMoreIcon />
            </Grid>
            <Grid item className='filter-options search-price'>
                <Grid onClick={()=>{showPrice(!price);showFlat(false);showHome(false)}} style={{width:'100%',display:'flex',alignItems:'center'}}>
                    <span >Budget</span>
                    <ExpandMoreIcon />
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
                                    return(<Typography component='span' varient='span' key={index} onClick={()=>{dispatch({type:'minValue',payload:e})}}>{'₹'+e/100000+'Lac'}</Typography>)
                                })}
                                </Grid>:null}
                                </Grid>
                                {maxPriceBox ?<Grid className='max-price' item xs={6} onClick={()=>{showPrice(false);changeMaxPriceBox(false);changeMinPriceBox(true)}}>
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
            <Grid item className='filter-options search-flat'>
                <Grid onClick={()=>{showFlat(!flat);showPrice(false);showHome(false)}} style={{width:'100%',display:'flex',alignItems:'center'}}>
                    <span >Property Type</span>
                    <ExpandMoreIcon />
                </Grid>
                {flat ? <Grid className='bhk-drop' container>
                            <Grid item xs={12} className='flat'>
                                <Grid>
                                {Residentials.map((e,index)=>{
                                    return(<Typography component='span' varient='span' key={index} style={Residentials[index].check===true ? {background:'pink',border:'none'}:{background:'white'}} onClick={()=>{dispatch({type:'resident',payload:{residential:e,check:!Residentials[index].check,index:index}})}}>{e.residential}</Typography>)
                                })}
                                </Grid>
                            </Grid>
                        </Grid>
                        :null}
            </Grid>
            <Grid item className='filter-options search-flat'>
                <Grid onClick={()=>{showHome(!home);showPrice(false);showFlat(false)}} style={{width:'100%',display:'flex',alignItems:'center'}}>
                    <span>BHK </span>
                    <ExpandMoreIcon />
                </Grid>
                {home ? <Grid className='bhk-drop bhk-drop-1' container>
                            <Grid item xs={12} className='bhk'>
                                {bhks.map((e,index)=>{
                                    return(<Typography component='span' varient='span' key={index} style={bhks[index].check===true ? {background:'pink',border:'none'}:{background:'white'}} onClick={()=>{dispatch({type:'place',payload:{bhk:e,check:!bhks[index].check,index:index}})}}>{e.bhk} Bhk</Typography>)
                                })}
                            </Grid>
                        </Grid>
                        :null}
            </Grid>
            <Grid item className='filter-options'>
                <span >Posted by </span>
                <ExpandMoreIcon />
            </Grid>
            <Grid item className='filter-options'>
                <span >5 More Filters </span>
                <ExpandMoreIcon />
            </Grid>
        </Grid>
    )
}
export default Filterhead