document.querySelector("#loginform").addEventListener('submit',(event)=>{
    let username=event.target.username.value;
    let password = event.target.password.value;
    console.log(typeof(name)+":"+name);
    if(username==''){
        let html='<input id="login-username" type="text" class="form-control" name="username" value="" placeholder="username or email"/>\
                  <p style="color:#b11616;font-size: 14px;">*Provide a username<p>';
        $("#username").html(html);
        event.preventDefault();
    }
    if(password.length<8){
        let html='<input id="login-password" type="password" class="form-control" name="password" placeholder="password"/>\
                  <p style="color:#b11616;font-size: 14px;">*Password should contain atleast 8 characters<p>';
        $("#password").html(html);
        event.preventDefault();
    }
});