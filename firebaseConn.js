import { initializeApp, getApps, getApp } from "firebase/app";

import { getDatabase } from "firebase/database";
import {ref, onValue} from "firebase/database"
import firebase from "firebase/app";
import {firebaseConfig} from "./firebaseConfig"

const app = (!getApps().length) ? initializeApp(firebaseConfig) : getApp();

const database = getDatabase(app);

export default database;

