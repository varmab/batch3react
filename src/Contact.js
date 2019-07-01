import React, {Component} from 'react'

class Contact extends Component{
    constructor(){
        super();

        this.state={
            name:'',
            email:''
        }
    }

    onChange=(e)=>{
        // var fieldValue=e.target.value;
        // var fieldName=e.target.name;

        // console.log(fieldValue)

        // if(fieldName=="name"){
        //     this.setState({
        //         name:fieldValue
        //     })
        // }

        // if(fieldName=="email"){
        //     this.setState({
        //         email:fieldValue
        //     })
        // }

        this.setState({
            [e.target.name]:e.target.value
        })

    }

    submit=(e)=>{
        e.preventDefault();

        //

    }

    render(){
        return(
            <div>
                <h1>Contact</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" value={this.state.name} onChange={this.onChange} name="name"/>
                <label htmlFor="email">Email:</label>
                <input type="text" value={this.state.email} onChange={this.onChange} name="email"/>
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

export default Contact;