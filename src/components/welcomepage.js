import render from 'dom-serializer';
import React from 'react';
import SubmitIdea from '../components/SubmitIdea/SubmitIdea';
import Grid from '@mui/material/Grid';



export default function WelcomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

        <div id="welcomeWrapper">
          <h1>DL-Ideas</h1>
          <h2>Welcome to the project</h2>
          <SubmitIdea />
        </div>

      </Grid>
    </Grid>
  )
}