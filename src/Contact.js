import React, { Component } from 'react';
import $ from 'jquery';

class Contact extends Component {

  componentDidMount() {
    document.title = "Contact Me | Rajas Gandhi";
  }

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

  handleSuccess() { 
    this.setState({name: '', email: '', message: ''});
    $('#after').text("Success! Message Sent");
    $('#contactform').slideUp();
 }

  handleError() {
    $('#after').text("Error: Please try again");
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
        url: "https://discord.com/api/webhooks/727246918782025759/_UMG5622vvd9F5UmbmE-nldG2Kour1uGJZmVhMXugYHPMJSKjyZXGhb9qz0JijxXtkCu",
        dataType: "json",
        type: "POST",
        headers: {"Content-Type" : "application/json"},
        data: JSON.stringify({
          "username" : "ContactForm",
          "avatar_url" : "",
          "content" : JSON.stringify(this.state)
        }),
        /*success: function (xhr, status, error) {
          console.log(xhr + status);
        },*/
        success: this.handleSuccess()
        /*error: function (xhr, status, error) {
          console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }*/
      }).fail(function (){
        this.handleError()
      })
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