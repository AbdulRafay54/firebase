// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyACB0qVvVi_U_i2jnwJ73wgGWLdTsmh1zA",
//   authDomain: "quiz-app-4da98.firebaseapp.com",
//   projectId: "quiz-app-4da98",
//   storageBucket: "quiz-app-4da98.appspot.com",
//   messagingSenderId: "171024194797",
//   appId: "1:171024194797:web:1aeaa456cf235388c300e4"
// };

// const app = initializeApp(firebaseConfig);
// const getAuth = initializeApp(app);


// let signup = () =>{
//     let email = document.getElementById("email")
//     let password = document.getElementById("password")
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then((res) => {
//     console.log("user" , res.user )
//   })
//   .catch((error) => {
//    console.log("error" , error )
//   });

// }

// let signupBtn = document.getElementById("signupBtn")
// signupBtn.addEventListener("click" , signup)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyACB0qVvVi_U_i2jnwJ73wgGWLdTsmh1zA",
  authDomain: "quiz-app-4da98.firebaseapp.com",
  projectId: "quiz-app-4da98",
  storageBucket: "quiz-app-4da98.appspot.com",
  messagingSenderId: "171024194797",
  appId: "1:171024194797:web:fd3d2053af7f96f0c300e4"
};

const app = initializeApp(firebaseConfig); 