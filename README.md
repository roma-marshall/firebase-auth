# Firebase + Vue3

The Open Source eCommerce authentication example built using Vue3, Firebase and Pinia.

## Usage

```
git clone https://github.com/roma-marshall/firebase-auth.git
cd firebase-auth
npm run dev
```
Get your firebase `apiKey` from [firebase console](https://firebase.google.com/)

Then go to `src/firebase/config.js` and setup your firebase `apiKey`

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


## License
MIT License
