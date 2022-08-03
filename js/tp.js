  function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "thewolion@gmail.com",
    Password : "0596F5153760161CCB9E511A2AD5BC9ADF50",
    To : 'thewolion.edu@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New messenge"+document.getElementById("name").value,
    Body : "name:"+document.getElementById("name").value
    + "</br> email: "+document.getElementById("email").value
    + "</br> phone: "+document.getElementById("phonenumber").value
    + "</br> message: "+document.getElementById("message").value
}).then(
  message => alert("your message sent succesfully")
);}



