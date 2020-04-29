import React from 'react';

function Contact() {
    return(
        <form name="contactform" id="contactform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSfl3oATjFuPlKl_yuFO92tE94OCSs3Wew76xqXK43GceN467Q/formResponse?" target="hideen_iframe" onsubmit="submitted=true;">
    <p>
      <label>First Name:<br />
        <input name="entry.228158447" type="text" id="entry.22815847" size="30" />
      </label>
    </p>
    <p>
      <label>Last Name:<br />
        <input name="entry.2098725634" type="text" id="entry.2098725634" size="30" />
      </label>
    </p>
    <p>
      <label>Email:<br />
        <input name="entry.546969202" type="text" id="entry.546969202" size="48" />
      </label>
    </p>
    <p>
      <label>Message:<br />
        <textarea name="entry.82328721" id="entry.82328721" cols="50" rows="7"></textarea>
      </label>
    </p>
    <p>
      <label>
        <input name="button" type="submit" class="submit-button" id="button" value="Send" />
      </label>
    </p>
  </form>
  <iframe name="hidden_iframe" id="hidden_iframe" style="display: none;" onload="if(submitted) {}"></iframe>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>

    <script type="text/javascript">var submitted=false;</script>
    <script type="text/javascript">
      $('#contactform').on('submit', function(e) {
        $('#contactform *').fadeOut(2000);
        $('#contactform').prepend('Your submission has been processed...');
      });
    </script>
    );
}

export default Contact;