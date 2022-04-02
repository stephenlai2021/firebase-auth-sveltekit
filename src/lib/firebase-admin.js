import admin from "firebase-admin"
//TODO: import private key
import serviceAccount from "/serviceAccountKey.json"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin