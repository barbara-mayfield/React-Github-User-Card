import React, { Component } from 'react';
import axios from 'axios';

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
            {this.state.followers.map(follower => (
                <div className="followers" key={follower.id}>
                    <h2>Followers</h2>
                    <img src={follower.avatar_url} alt={follower.name} />
                    <h3>{follower.login}</h3>
                </div>
            ))}
            </>
        )
    }
}

export default Follower;