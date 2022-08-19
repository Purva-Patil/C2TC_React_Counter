import  { Component } from "react";

class Message extends Component
{
    constructor()
    {super ()
    this.state={
        Message:'HELLO M17 STUDENTS'
    }

}
  ChangeMessage()
  {
    this.setState({
        Message:'YOU ARE PLACED'
    })
}
render()
       { return(
        <div>
            <h1> {this.state.Message}</h1>
            <button onClick={()=>this.ChangeMessage()}>Click me</button>
           </div>
           
        )
    }
}
export default Message;