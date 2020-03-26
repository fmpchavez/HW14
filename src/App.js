import React from 'react';
import Navbar from './Components/Navbar';
import getUsers from './Utils/API';
import EmployeeCard from "./Components/EmployeeCards";
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    input: '',
    filteredUsers: []
  }

  componentDidMount =()=>{
    getUsers()
    .then(result => {
    this.setState({users: result.data.results, filteredUsers: result.data.results})
    // }).catch(err=>console.log(err))
  }).catch(err=>console.log(err))
}

  handleChange =(e)=>{
    const filtered = this.state.users.filter(user=>user.name.first.toLowerCase().includes(e.target.value) || 
    user.name.last.toLowerCase().includes(e.target.value))
    this.setState({input:e.target.value, filteredUsers:filtered})
  }

  render() {
    return (
      <>
      <Navbar />
      <div className="container">
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" value={this.state.input} onChange = {this.handleChange}></textarea>
                <label for="textarea1">Search Employee</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      
      <div className ="row">
      <EmployeeCard data = {this.state.filteredUsers}/>
      </div>
      </>
        );
  }
}

// function App() {
//   return (
//     <Navbar />
//   );
// }

export default App;
