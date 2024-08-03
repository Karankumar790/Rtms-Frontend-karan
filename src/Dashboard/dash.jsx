import { Typography } from '@mui/material'
import React from 'react'

function Dash() {
  const mainuItems=[
    {name:"Dashboard",path:"/Dashboard"},
    {name:"Well Monitor",path:"/Monitor"},
    {name:"Virtual Flow",path:"/Virtual"},
    {name:"Crystal Report",path:"/Crystal"},
    {name:"Complaint History",path:"/History"},
    {name:"Notification History",path:"/Notification"},
    {name:"Edit Profile",path:"/Profile"},
    {name:"Log Out",path:"/Logout"},
  ]
  return (
    <>
            <Grid container sx={{ backgroundColor: '#8590AD', height: '86.68vh' }}>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Grid>
                  {
                   mainuItems.map((v,i)=>(
                    <Grid key={i}>
                      <Typography>{v.name}</Typography>
                    </Grid>
                   )) 
                  }
                </Grid>
              </Grid>
           </Grid>
    </>
  )
}

export default Dash
