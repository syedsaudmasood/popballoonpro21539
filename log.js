// Following Code for Disabling & Enabling Sign In Button
let emailMust = document.querySelector(".login_email");
let passwordMust = document.querySelector(".login_password");
let subbtn = document.querySelector("login_btn");
login_btn.disabled = true; //setting button state to disabled
login_email.addEventListener("change", stateHandle);
login_password.addEventListener("change", stateHandle);
function stateHandle() {
    if (document.querySelector(".login_email").value ==="" || document.querySelector(".login_password").value ==="") 
    {
      login_btn.disabled = true; //button remains disabled
    } else {
      login_btn.disabled = false; //button is enabled
    }
}
//........

//Function for login and authentication through firebase
function login() {
  const useremail = document.getElementById("login_email").value;
  const userpassword = document.getElementById("login_password").value;
  // console.log(useremail, userpassword);
  firebase.auth().signInWithEmailAndPassword(useremail,userpassword)
      .then((userCredential) => {
          // When Signed in is Successfull
          const user = userCredential.user;
          window.location.href="index%20level%201.html"
      })
      .catch((error) => {       
        // When Signed in not Successfull
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("Login failed \nInvalid Email or Password");
      });
}
//........
function signup() {
    const useremail = document.getElementById("login_email").value;
    const userpassword = document.getElementById("login_password").value;
firebase.auth().createUserWithEmailAndPassword(useremail, userpassword)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    window.alert("SIGN-UP SUCCESSFULLY");
    // ...
  })
  .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("SIGN UP FAILED");
    // ..
  });
}