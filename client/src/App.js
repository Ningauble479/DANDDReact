import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Components/Header'
import Navigation from './Components/Navbar'
import Body from './Components/Body'
import Axios from 'axios'
import OpenScroll from './Components/openScroll'
import OpenChar from './Components/createCharScroll'


class App extends Component{
  
  constructor(props) {
    super(props);

    this.state={
      data: [],
      scrollData: null,
      open: false,
      reset: false,
      affectedCards: [],
      cardName: null,
      openChar: false
    }
    
  }

  componentDidMount(){
    Axios
    .get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes')
    .then(
      (res)=>{
        this.setState({data: res.data.results})
        console.log(res.data.results)
      }
    )
  }

  fixCard = () => {
    this.setState({affectedCards: []})
  }

  openCharScroll = () => {
    this.setState({openChar: true})
  }

  closeChar = () => {
    this.setState({openChar: false})
  }

  openScroll = (e, search) => {
    Axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co${search}`)
    .then((res)=>{
      console.log({classInfo: res})
      this.setState({scrollData: res.data})})
    this.setState({open: true, cardName: e})
  }

  closeScroll = () => {
    this.setState({open: false, reset: true})
    setTimeout(()=>{this.setState({affectedCards: [this.state.cardName], cardName: null, scrollData: null})},750)
    
  }

  changeSearch = (search) => {
    Axios
    .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/${search}`)
    .then((res)=>{
      this.setState({data: res.data.results})
    })
  }
  
  
  render(){
  return (
    <Grid container>

      <OpenScroll closeScroll={this.closeScroll} state={this.state}/>
      <OpenChar closeScroll={this.closeChar} state={this.state} />
      <Header item/>
      <Navigation openCharScroll={this.openCharScroll} changeSearch={this.changeSearch} item/>
      <Body fixCard={this.fixCard} openScroll={this.openScroll} state={this.state} item/>
    </Grid>
  );
  }
}

export default App;
