import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Button, Card, CardContent, CardActionArea, Container, Grid } from '@material-ui/core';
// import Notification from "./Notification.js";
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { notifData: []}
  }

  componentDidMount(){
    fetch('http://localhost:3001/')
        .then(response => {
          return response.json();
        })
        .then(data =>
        {
          this.setState(state => {
            return { notifData: data}
          });
        })
  }

  // extract to new component as complexity grows
  // sort processed notifications first
  notifCards() {
    return this.state.notifData.map( data =>
      <Grid item> 
      <div ></div>
        <Card variant="outlined" >
          <CardContent>
            <h2> {data.name}</h2>
            <p> {data.taxId}</p>
            <h5> {data.contact}</h5>
          </CardContent>
          <CardActionArea>
            {data.processed? 
              <Button color="primary" disabled>Process</Button>:
              <Button color="primary" variant="contained" >Process</Button>
            }
          </CardActionArea>
          <br/ >
          </Card>
        </Grid>
      )

  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Resilia Internal Dashboard</h2>
        </div>
        <br />

        <Container>
          <Grid container spacing={3}>
            {this.notifCards()}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
