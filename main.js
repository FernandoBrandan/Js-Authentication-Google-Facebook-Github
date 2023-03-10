import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'
import { auth } from './app/firebase.js'

import './app/signinForm.js'
import './app/signupForm.js'
import './app/logout.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'
import { loginCheck } from './app/loginCheck.js '

onAuthStateChanged(auth, async (user) => {
    if(user){
        loginCheck(user)
    }else{
        loginCheck(user)    
    }
})


