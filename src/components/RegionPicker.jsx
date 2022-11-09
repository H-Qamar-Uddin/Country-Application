import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Grid,Typography } from '@mui/material';
import AfricaImage from '../Images/africa-map.png';
import AsiaImage from '../Images/asia-map.png';
import OceaniaImage from '../Images/oceania-map.png';
import EuropeImage from '../Images/europe-map.png';
import AmericasImage from '../Images/americas-map.png';
import '../styles/index.css';

const RegionPicker = ({onRegionPickHandler}) => {
  console.log('onRegionPickHandler',onRegionPickHandler)
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Grid container  Spacing={1}>
          <Grid sx={12} md={6} >
            <button className='region-container' onClick={() => onRegionPickHandler('africa')}>
              <Typography variant='h6'>Africa</Typography>
              <img src={AfricaImage} alt='#'/>
            </button>
          </Grid>
          <Grid sx={12} md={6}>
            <button className='region-container' onClick={() => onRegionPickHandler('asia')}>
              <Typography variant='h6'>Asia</Typography>
              <img src={AsiaImage} alt='Asia map'/>
            </button>
          </Grid>
          <Grid  sx={12} md={6}>
            <button className='region-container' onClick={() => onRegionPickHandler('europe')}> 
              <Typography variant='h6'>Europe</Typography>
              <img src={EuropeImage} alt='Europe map'/>
            </button>
          </Grid>
          <Grid item sx={12} md={6}>
            <button className='region-container' onClick={() => onRegionPickHandler('oceania')} >
              <Typography variant='h6'>Australia/Oceania</Typography>
              <img src={OceaniaImage} alt='Australia Map'/>
            </button>
          </Grid>
          <Grid item sx={12} md={6}>
            <button className='region-container' onClick={() => onRegionPickHandler('americas')}>
              <Typography variant='h6'>Americas</Typography>
              <img src={AmericasImage} alt='America Map'/>
            </button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div> );
}
export default RegionPicker;
