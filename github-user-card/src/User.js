import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    constructor() {
        super();
        this.state = {
          data: {}
        }
      }
      
      componentDidMount() {
        this.userData()
      }
    
      userData = () => {
        axios.get(`https://api.github.com/users/barbara-mayfield`) 
          .then(res => {
            console.log(res.data)
            this.setState({
              data: res.data
            })
          })
      }

    render() {
        return (
            <div className="user-card">
            <h1>User Card</h1>
            <img src={this.state.data.avatar_url} />
            <h2>{this.state.data.login}</h2>
            <h2>{this.state.data.name}</h2>
            <h4>{this.state.data.company}</h4>
            <a href={this.state.data.url}>Profile</a>
            <p>{this.state.data.bio}</p>
            
            </div>
        )
    }
}

export default User;