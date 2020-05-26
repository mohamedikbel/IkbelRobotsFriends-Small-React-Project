import React , {Component} from 'react';
import {robots} from '../components/robots'
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{

constructor(){

super()
this.state = {
robots : [],
shearchfield: ''
}

}


componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users =>this.setState({robots:users}))



}

onSearchChange = (event) => {

this.setState({shearchfield : event.target.value })


}
render(){
const filtredrobots= this.state.robots.filter(robots => {
return robots.name.toLowerCase().includes(this.state.shearchfield.toLowerCase())


})




return (<div className='tc'> 
  <h1>  Ikbel Robots  </h1>
    <SearchBox searchChange = {this.onSearchChange}/> 

<Scroll>
  <Cardlist robots ={filtredrobots} /> 
</Scroll>



 </div>


	);

}

}
export default App ;