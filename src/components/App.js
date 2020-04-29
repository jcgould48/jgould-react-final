import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header';
import Beers from './Beers'
import './Beers.css'


  class App extends Component{
    constructor(){
    super()
    this.state = {
        beers: [],
    };
}


loadBeers=()=>{
         
    const url = `https://api.punkapi.com/v2/beers`;
    
    axios.get(url).then((beers)=>{
        this.setState({beers: beers.data}
        //     ,()=>{console.log("test...",this.state.beers
        // )}
        )
})
}

componentDidMount(){
    this.loadBeers();
}

    render(){
      return(
     <div>
         <div className=''>
        <Header/>
        </div>
            <div>
                <Beers
                beers = {this.state.beers}
                />
            </div>
  </div>
      )
    }

  }


  export default App;