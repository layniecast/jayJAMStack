---
layout: layout.html
pageTitle: Contact
navTitle: Contact
tags: page
pageClass: contact
image1: /img/IMG-0404.jpg
---

![guy at work]({{image1}})

<form action="/" data-netlify="true" onsubmit="myFunction()">
<fieldset>
  <label for="fname">First Name:</label><br>
  <input 
  type="text" 
  id="fname" 
  name="fname" 
  placeholder="First Name" 
  required 
  autocomplete="fname" 
  title="Please enter your name."
  />
  <br>
  <br>
  <label for="email">E-mail:</label>
<input 
type="email" 
id="email" 
name="email" 
placeholder="e-mail"
autocomplete="email"
    title="The domain portion of the email address is invalid (the portion after the @)."
      pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
required
/>
<br><br>
<label for="message">Message:</label> 
<textarea 
name="message" 
id="message" 
placeholder="Shout outs" 
rows="4" 
required
></textarea>
<br><br>
<button type="submit" name="submit">Send Message</button>
<br>
<br>
  </fieldset>
</form>

### You can email me directly at <a href="mailto:jasoncastillo25@gmail.com">Jay's email</a>.

[Home](/)
