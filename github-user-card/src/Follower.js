import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FollowerDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

class Follower extends Component {
    constructor() {
        super();
        this.state = {
          followers: []
        }
      }
      
        componentDidMount() {
            this.followerData()
      }
    
        followerData = () => {
            axios.get(`https://api.github.com/users/barbara-mayfield/followers`) 
            .then(res => {
                    console.log(res.data)
                    this.setState({
                    followers: res.data
                })
            })
        }

    render() {
        return (
            <>
            <h2>Followers</h2>
            
            <FollowerDiv className="follower-container">
                {this.state.followers.map(follower => (
                    <div className="followers" key={follower.id}>
                        <img src={follower.avatar_url} alt={follower.name} />
                        <h3>{follower.login}</h3>
                    </div>
            ))}
            </FollowerDiv>
            </>
        )
    }
}

export default Follower;