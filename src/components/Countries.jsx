import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LinearProgress , Container, Grid, Button } from '@mui/material';
import {Card, CardContent,CardMedia, Typography} from '@mui/material';
import  '../styles/index.css';

const Countries = ({clearSelectedRegionHandler, selectedRegion} ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('clearSelectedRegionHandler', clearSelectedRegionHandler)
  useEffect(() => {
    setLoading(true);
    axios({
      method:'GET',
      url: `https://restcountries.com/v3.1/region/${selectedRegion}`
    })
      .then(reponse => {
        console.log('response',reponse.data);
        setData(reponse.data)
      }).catch(e => console.log(e))
      .finally(() => setLoading(false));

  }, [selectedRegion ]
  )
  return (
    <Container fixed>
      {
        loading ? <div className='progress'>
          <LinearProgress color="primary" />
        </div>: 
          <Grid container spacing={3} columns ={12} sx={{margin: '45px 0'}}>
            <Grid item sx={12} sm={12} md={12} lg={12}>
              <Button color='primary'  variant='contained' onClick={()=> clearSelectedRegionHandler()}>Pic Another Region</Button>
            </Grid>
            {
              data.map((country) => (
                <Grid item
                  sx={12}
                  md={6} 
                  key = {country.name.common}
                >
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      image={country.flags.png}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {country.name.common}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Capital: {country.capital}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Border Countries: {country.borders}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Population: {country.population}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Continenet: {country.region}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
      }
    </Container>
  )
}
export default Countries;
