import React, { Component } from 'react';
import $ from 'jquery';

class Contact extends Component {

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    window.location.href="/";
  }

  _handleSubmit(e) {
    e.preventDefault();
      $.ajax({
        url: "https://hooks.zapier.com/hooks/catch/7397875/orm82gb/",
        type: 'POST',
        data: $("#contactform").serialize(),
        success: function() {
          // Redirect to another success page
          $("#contactform").slideUp();
          $("#after").prepend("<p>Sucess! The form has been submitted.</p><br><button><a onClick={this._handleClick}>Click here to go back</a></button>");
        } 
      })
  }
  render() {
    return (
      <div>
        <div id="wrapper">
          <form name="contactform" id="contactform" onSubmit={this._handleSubmit}>
            <p>
              <label>First Name:<br />
                <input name="firstname" type="text" id="entry.22815847" size="30" required />
              </label>
            </p>
            <p>
              <label>Last Name:<br />
                <input name="lastname" type="text" id="entry.2098725634" size="30" required />
              </label>
            </p>
            <p>
              <label>Email:<br />
                <input name="email" type="email" id="entry.546969202" size="48" required />
              </label>
            </p>
            <p>
              <label>Message:<br />
                <textarea name="message" id="entry.82328721" cols="50" rows="7" required></textarea>
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
          <p id="after"></p>
        </div>
      </div>
    );
  }
}

export default Contact;