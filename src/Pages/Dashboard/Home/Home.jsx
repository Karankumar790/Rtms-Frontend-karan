import { Grid, Typography } from '@mui/material'
import React from 'react'
import PageContainer from '../../../components/HOC/PageContainer'

export default function Home() {
  return (
    <>
      <PageContainer >
        <Grid>
          <box>
            <card>
              <cardContent >
                 <Typography>hello </Typography>
              </cardContent>
            </card>
          </box>
          </Grid>
      </PageContainer>
    </>
  )
}
