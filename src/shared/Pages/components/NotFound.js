import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

// I got this from semantic-ui sample pages
const NotFound = () => (
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' color='orange' textAlign='center'>
          404 ¯\_(ツ)_/¯
        </Header>
      </Grid.Column>
    </Grid>
  </div>
)

export default NotFound
