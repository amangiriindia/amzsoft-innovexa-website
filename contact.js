function sendMail(){
   // alert("sadfbgn");
//    e.preventDefault();
    var params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        subject:document.getElementById("subject").value ,
        message:document.getElementById("message").value ,
    };
    console.log(params,"rannnn");
    const serviceID = "service_58zvlan";
    const templateId = "template_6uv7v53";

    emailjs.send(serviceID,templateId,params).then(
       (res) =>{
            name:document.getElementById("name").value =""; 
            email:document.getElementById("email").value ="";
            subject:document.getElementById("subject").value ="";
            message:document.getElementById("message").value ="tt";
            alert("your message sent successfully")
            console.log(res);
        }
    ).catch((err)=>
        console.log(err)
    )
}