import React from 'react';

function Contact() {
    return(
        <div>
        <form name="contactform" id="contactform" action="https://hooks.zapier.com/hooks/catch/7397875/or2336l/" type="POST">
    <p>
      <label>First Name:<br />
        <input name="firstname" type="text" id="entry.22815847" size="30" />
      </label>
    </p>
    <p>
      <label>Last Name:<br />
        <input name="lastname" type="text" id="entry.2098725634" size="30" />
      </label>
    </p>
    <p>
      <label>Email:<br />
        <input name="email" type="text" id="entry.546969202" size="48" />
      </label>
    </p>
    <p>
      <label>Message:<br />
        <textarea name="message" id="entry.82328721" cols="50" rows="7"></textarea>
      </label>
    </p>
    <p>
      <label>
        <input name="button" type="submit" class="submit-button" id="form-submit" value="Submit" />
      </label>
    </p>
  </form>
  <iframe name="hidden_iframe" id="hidden_iframe" style="display: none;" onload="if(submitted) {}"></iframe>
    <script defer src="assets/js/jquery.min.js"></script>
    <script defer src="assets/js/jquery.scrollex.min.js"></script>
    <script defer src="assets/js/jquery.scrolly.min.js"></script>
    <script defer src="assets/js/browser.min.js"></script>
    <script defer src="assets/js/breakpoints.min.js"></script>
    <script defer src="assets/js/util.js"></script>
    <script defer src="assets/js/main.js"></script>

    <script type="text/javascript">var submitted=false;</script>
    
    </div>
    );
}

export default Contact;