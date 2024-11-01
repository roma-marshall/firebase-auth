# Vue3 + Firebase

The Open Source eCommerce authentication built using Vue3, Firebase and Pinia.

## Code snippets

1. Get your firebase `apiKey` from [firebase console](https://firebase.google.com/)

2. Then go to `src/firebase/config.js` and set up your firebase `apiKey`

```javascript
const firebaseConfig = {
    apiKey: "HERE_IS_YOUR_API_KEY",
    authDomain: "auth.domain.firebaseapp.com",
    projectId: "vue-app",
    storageBucket: "vue-app-db.appspot.com",
    messagingSenderId: "212636259258",
    appId: "1:21777668592358:web:bb4172e493722ab7a3cb43"
}

export default firebaseConfig
```

## Recommended Installation

```
git clone https://github.com/roma-marshall/firebase-auth.git
cd firebase-auth
npm run dev
```

## License
MIT License
