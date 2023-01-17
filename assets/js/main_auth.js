// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB091X6ibJMZgKFXfRhr9-d6JA1Hz2P28Q",
        authDomain: "webauth-46406.firebaseapp.com",
        projectId: "webauth-46406",
        storageBucket: "webauth-46406.appspot.com",
        messagingSenderId: "312791263164",
        appId: "1:312791263164:web:b64710a9fd44cffccc6db9",
      
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            location.href = "index.html";
            //document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    var err = document.getElementById("error");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            location.href = "index.html";
            //document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            err.textContent = "Please enter a valid password!"
            err.style.color = "red"
            console.log(error.code);
            console.log(error.message)
        });
}
