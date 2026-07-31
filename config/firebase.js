import admin from "firebase-admin";
import { readFileSync, existsSync } from "fs";

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
  serviceAccount = JSON.parse(
    readFileSync("./firebase-credenciales.json", "utf8")
  );
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;