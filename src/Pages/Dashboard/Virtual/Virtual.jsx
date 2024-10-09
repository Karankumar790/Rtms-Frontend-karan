import React from 'react'
import {  Grid,  Typography } from '@mui/material'
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import GeoIcon from '@mui/icons-material/Place';


function Virtual() {
  return (
    <div>
      <Grid container gap={1}>
        <Box display='flex'>
          <IconButton>
            <GeoIcon sx={{ fontSize: 35, color:"red" }} />
          </IconButton>
          <Typography mt={1} variant='h4'>Geo-Location </Typography>
        </Box>
       
        <Grid container textAlign={'center'} mt={2} display={'block'}>
          <Grid item md={12} border={"1px solid black"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14320.173463053277!2d77.44117713469225!3d28.679632098106314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bc3b6220c5%3A0x80c87fb76576da30!2sRDC%2C%20Sector%2015%2C%20Sector%2010%2C%20Raj%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201002!5e0!3m2!1sen!2sin!4v1723781951900!5m2!1sen!2sin"
              style={{ border: 0 ,width:"100%",height:"70vh" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </Grid>

        </Grid>
      </Grid>


    </div>
  )
}

export default Virtual