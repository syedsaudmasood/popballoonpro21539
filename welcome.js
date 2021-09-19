const firebaseConfig = {
  apiKey: "AIzaSyB3sy8rmvcoSrGc5C6lLsOc6crHifpf8sU",
        authDomain: "balloonpopup-340e2.firebaseapp.com",
        projectId: "balloonpopup-340e2",
        storageBucket: "balloonpopup-340e2.appspot.com",
        messagingSenderId: "259438595955",
        appId: "1:259438595955:web:3d0e675eb556743ceb3f06",
        measurementId: "G-19TDBXWXWZ"
  };
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.replace("index.html");
    } else {
  document.getElementById("user").innerHTML= "Hello, "+ user.email;
  console.log(useremail);
    }
  });

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}