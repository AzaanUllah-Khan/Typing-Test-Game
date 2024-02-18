import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyCV86XxNzlEx4YFPxuo396uJVLRODoJFs0",
    authDomain: "typing-results.firebaseapp.com",
    projectId: "typing-results",
    storageBucket: "typing-results.appspot.com",
    messagingSenderId: "183191384367",
    appId: "1:183191384367:web:aa619740725616d0a9b1da",
    measurementId: "G-8LG92KEGEZ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);