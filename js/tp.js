var script = document.createElement('script');
    script.type = 'text/javascript';

    script.src = '';
    document.body.appendChild(script);

  function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "thewolion@gmail.com",
    Password : "0596F5153760161CCB9E511A2AD5BC9ADF50",
    To : 'thewolion@gmail.com',
    BCC: document.getElementById("email").value,
    From : document.getElementById("email").value,
    Subject : "New messenge from Asif Khan Website",
    Body : "name:"+document.getElementById("name").value
    + "</br> email: "+document.getElementById("email").value
    + "</br> phone: "+document.getElementById("phonenumber").value
    + "</br> message: "+document.getElementById("message").value
}).then(
  message => alert("your message sent succesfully")
);}



