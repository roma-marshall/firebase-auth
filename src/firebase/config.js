const firebaseConfig = {
    // apiKey: import.meta.env.VITE_API_KEY, // local
    apiKey: process.env.VITE_API_KEY, // vercel
    authDomain: "auth.domain.firebaseapp.com",
    projectId: "vue-app",
    storageBucket: "vue-app-db.appspot.com",
    messagingSenderId: "212636259258",
    appId: "1:21777668592358:web:bb4172e493722ab7a3cb43"
}

export default firebaseConfig