const { initializeApp, getApps, getApp } = require("firebase/app")
const { getDatabase } = require("firebase/database")
const {ref, onValue} = require("firebase/database")
const firebase = require("firebase/app")
const firebaseConfig = {
};


const app = (!getApps().length) ? initializeApp(firebaseConfig) : getApp();

const database = getDatabase(app);

const tipRef = ref(database, "tip/");
onValue(tipRef, (snapshot) => {
	const val = snapshot.val();
	console.log("Val", val);
});


