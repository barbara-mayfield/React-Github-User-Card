import React, { Component } from 'react';
import axios from 'axios';
import Follower from './Follower'
import styled from 'styled-components';

const CustomDiv = styled.div`
    border: 1px solid black;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    border-radius: 4rem;
    background: #BC8DA0;
`

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

      handleChange = (event) => {
        this.setState({
          data: event.target.value
        })
      }
    

    render() {
        return (
            <>
            <select value="this.state.login" onChange={this.handleChange}>
                <option value="">Select User:</option>
                <option value="barbara-mayfield">barbara-mayfield</option>
                <option value="Amber-Pittman">Amber-Pittman</option>
                <option value="ron-hughes">ron-hughes</option>
                <option value="LoralieFlint">LoralieFlint</option>
                <option value="Skraus5628">Skraus5628</option>
            </select>

            <CustomDiv className="user-card">
            <h1>User Card</h1>
            <img className="avatar" src={this.state.data.avatar_url} alt={this.state.name} />
            <h2>{this.state.data.login}</h2>
            <h2>{this.state.data.name}</h2>
            <h4>{this.state.data.company}</h4>
            <a href={this.state.data.url}>Profile</a>
            <p>{this.state.data.bio}</p>
            <Follower />
            </CustomDiv>
            </>
        )
    }
}

export default User;