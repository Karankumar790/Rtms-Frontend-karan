import { Typography,Grid } from '@mui/material'
import React from 'react'
import PageContainer from '../../components/HOC/PageContainer'

function Dash() {
  const mainuItems=[
    {name:"Dashboard",path:"/Dashboard"},
    {name:"Well Monitor",path:"/Monitor"},
    {name:"Virtual Flow",path:"/Virtual"},
    {name:"Crystal Report",path:"/Crystal"},
    {name:"Complaint History",path:"/History"},
    {name:"Notification History",path:"/Notification"},
    {name:"Edit Profile",path:"/Profile"},
    {name:"Log Out",path:"/Logout"}
  ]
  return (
    <PageContainer bgcolor='#8590AD' showheader showfooter>
            <Grid container>
              <Typography>hello</Typography>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Grid item>
                  {
                   mainuItems.map((v,i)=>(

                    <Grid key={i}>
                      <Typography>{v?.name}</Typography>
                    </Grid>
                   )) 
                  }
                </Grid>
              </Grid>
           </Grid>
    </PageContainer>
  )
}

export default Dash
