import React, { Component } from 'react';
import $ from 'jquery';
import Axios from 'axios';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleClick(e) {
    e.preventDefault();
    window.location.href="/";
  }

  handleSubmit(e) {
    e.preventDefault();
      Axios({
        method: "POST",
        headers: {"content-type":"application/json","Access-Control-Allow-Origin":"*"},
        url: "https://maker.ifttt.com/trigger/ContactForm/with/key/l-IHh5Npf_1RyG9zyvEr6DOjoQMghC7fyX_w6BmHDUu?value1=" + this.state,
        data: this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
  }

  resetForm(){  
    this.setState({name: '', email: '', message: ''})
 }
  render() {
    return (
      <div>
        <div id="wrapper">
          <form name="contactform" id="contactform" onSubmit={this.handleSubmit} method="POST">
            <p>
              <label>Name:<br />
                <input name="name" type="text" id="entry.22815847" size="30" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
              </label>
            </p>
            <p>
              <label>Email:<br />
                <input name="email" type="email" id="entry.546969202" size="48" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
              </label>
            </p>
            <p>
              <label>Message:<br />
                <textarea name="message" id="entry.82328721" cols="50" rows="7" value={this.state.message} onChange={this.onMessageChange.bind(this)} required></textarea>
              </label>
            </p>
            <div id="main">
            <p>
              <label>
                <input name="button" type="submit" className="button" id="submit" value="Submit" />
              </label>
            </p> 
            </div>
          </form>
          <div id="main">
          <p id="after"></p>
          <button onClick={this.handleClick}>Click here to go back</button>
          </div>
        </div>
      </div> 
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
    
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
}

export default Contact;