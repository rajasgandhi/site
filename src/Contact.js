import React from 'react';

function Contact() {
    return(
        <div>
        <form name="contactform" id="contactform">
    <p>
      <label>First Name:<br />
        <input name="firstname" type="text" id="entry.22815847" size="30" required/>
      </label>
    </p>
    <p>
      <label>Last Name:<br />
        <input name="lastname" type="text" id="entry.2098725634" size="30" required/>
      </label>
    </p>
    <p>
      <label>Email:<br />
        <input name="email" type="email" id="entry.546969202" size="48" required/>
      </label>
    </p>
    <p>
      <label>Message:<br />
        <textarea name="message" id="entry.82328721" cols="50" rows="7" required></textarea>
      </label>
    </p>
    <p>
      <label>
        <input name="button" type="submit" className="submit-button" id="form-submit" value="Submit" />
      </label>
    </p>
  </form>
    </div>
    );
}

export default Contact;