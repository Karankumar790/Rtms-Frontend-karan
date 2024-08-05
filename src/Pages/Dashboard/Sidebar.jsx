import { Typography,Grid } from '@mui/material'
import React from 'react'
import PageContainer from '../../components/HOC/PageContainer'
import { Link, Outlet } from 'react-router-dom'

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
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Grid item>
                  {
                   mainuItems.map((v,i)=>(

                    <Grid key={i}>
                      <Link to={v.path}><button><Typography>{v?.name}</Typography></button></Link>
                    </Grid>
                   )) 
                  }
                </Grid>
              </Grid>
              <Grid item lg={9} md={9} sm={9} xs={9}>
                  <Outlet/>
              </Grid>
           </Grid>
    </PageContainer>
  )
}

export default Dash
