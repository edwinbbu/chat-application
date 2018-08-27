document.querySelector("#signupform").addEventListener('submit',(event)=>{
    let name=event.target.name.value;
    let username=event.target.username.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log(typeof(name)+":"+name);
    if(name==''){
        let html='<input type="text" class="form-control" name="name" placeholder="Name"\>\
                  <p style="color:#b11616;font-size: 14px;">*Provide a name<p>';
        $("#name").html(html);
        event.preventDefault();
    }
    if(username==''){
        let html='<input type="text" class="form-control" name="username" placeholder="Username"\>\
                  <p style="color:#b11616;font-size: 14px;">*Provide a username<p>';
        $("#username").html(html);
        event.preventDefault();
    }
    if(email==''){
        let html='<input type="text" class="form-control" name="email" placeholder="Email"\>\
                  <p style="color:#b11616;font-size: 14px;">*Provide a email<p>';
        $("#email").html(html);
        event.preventDefault();
    }
    if(password.length<8){
        let html='<input type="password" class="form-control" name="password" placeholder="Password"\>\
                  <p style="color:#b11616;font-size: 14px;">*Password should contain atleast 8 characters<p>';
        $("#password").html(html);
        event.preventDefault();
    }
    //console.log(event.target.email.value);
    //event.trigger('submit');
});