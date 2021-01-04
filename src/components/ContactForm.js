import React from 'react'
import {Button} from "./Button"
import "./ContactForm.css"

class ContactForm extends React.Component {
   constructor(props){
       super(props)
       this.state={
           Name: "",
           Mail: "",
           Message: ""
       }
       this.handleChangeName = this.handleChangeName.bind(this);
       this.handleChangeMail = this.handleChangeMail.bind(this);
       this.handleChangeMessage = this.handleChangeMessage.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.sendToApi = this.sendToApi.bind(this);
   }

   handleSubmit(event){
;       console.log(this.state.Message);
       event.preventDefault();
       this.sendToApi();
       this.setState({
        Name: "",
        Mail: "",
        Message: ""
       })
       
   }
   handleChangeName(event) {
    this.setState({Name: event.target.value});
  }
  handleChangeMail(event) {
    this.setState({Mail: event.target.value});
  }
  handleChangeMessage(event) {
    this.setState({Message: event.target.value});
  }
  sendToApi(){
    const data = {Name: this.state.Name, Mail: this.state.Mail, Text: this.state.Message}
    try{
    fetch("https://localhost:5001/api/messenges", {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data),
    }).then(response => response.json());
  }catch(e){
    console.log(e.stackTrace);
  }
  }

   
    render(){
    return (
        <div className="ContactForm">
            <div className="ContactFormContainer">
              <p>Hast du eine Frage, möchtest du uns ein Ladengeschäft vorstellen oder interessierst du dich für einen Job? Melde dich bei uns:</p>
                <form className="ContactFormForm" >
                    <div className="inputNameDiv">
                    <label >Ihr Name </label><br/>
                    <input  autoComplete="off" required className="inputName"value={this.state.Name} onChange={this.handleChangeName}></input><br />
                    </div>
                    <div className="inputMailDiv">
                    <label >Ihre E-Mail Adresse</label><br/>
                    <input autoComplete="off" required className="inputMail" value={this.state.Mail} onChange={this.handleChangeMail}></input><br />
                    </div>
                    <div className="inputMessageDiv">
                    <label >Ihre Nachricht</label><br/>
                    <input autoComplete="off" required className="inputMessage" value={this.state.Message} onChange={this.handleChangeMessage} ></input><br />
                    </div>
                    <Button onClick={this.handleSubmit} className="sendButton" buttonSize="btn--large" buttonStyle="btn--outline" >Absenden</Button>
                   
                </form>
                
            </div>
            
        </div>
    )}
}

export default ContactForm
