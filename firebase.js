import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, query, where, getDocs, addDoc, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCV86XxNzlEx4YFPxuo396uJVLRODoJFs0",
    authDomain: "typing-results.firebaseapp.com",
    projectId: "typing-results",
    storageBucket: "typing-results.appspot.com",
    messagingSenderId: "183191384367",
    appId: "1:183191384367:web:aa619740725616d0a9b1da",
    measurementId: "G-8LG92KEGEZ"
};
document.getElementById("table") ? document.getElementById("table").innerHTML = `<tr>
<th>Rank</th>
<th>Name</th>
<th>WPM</th>
</tr>`: ""
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

document.getElementById("typing")?.addEventListener("input", async () => {
    if (document.getElementById("typing").value.length == localStorage.getItem("length")) {
        try {
            if (localStorage.getItem("accuracy") >= 45) {
                const docRef = await addDoc(collection(db, "users"), {
                    typer: localStorage.getItem("name"),
                    wpm: Number(localStorage.getItem("type")),
                    acc: Number(localStorage.getItem("accuracy"))
                });
                console.log("Document written with ID: ", docRef.id);
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
})
const q = query(collection(db, "users"), orderBy("wpm", "desc"), limit(10));
let serial = 0
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    document.getElementById("table") ? document.getElementById("table").innerHTML += `<tr>
    <td>${++serial}</td>
    <td>${doc.data().typer}</td>
    <td>${doc.data().wpm} WPM</td>
</tr>`: ""
    console.log(doc.id, " => ", doc.data());
});