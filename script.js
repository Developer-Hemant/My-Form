function togglePassword(){
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
    // if we expand it 
    // it can be written as
    // if(pass.type === "password")
    // {
    //     pass.type = "text";
    // }
    // else {
    //      pass.type="password";
    //      }
    //
}
function toggletheme(){
    document.body.classList.toggle("dark");

    const container = document.querySelector(".container");
    container.classList.toggle("container-dark");
}