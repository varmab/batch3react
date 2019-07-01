import React, {Component} from 'react'

class Friends extends Component{
    constructor(){
        super();

        this.state={
            friends:["Ram","Robert","Rahim"]
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.friends.map((friend,index)=>{
                        return <li key={index}>{friend}</li>
                    })
                }
            </div>
        )
    }
}

export default Friends;