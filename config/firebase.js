import { initializeApp, cert } from "firebase-admin/app";
import { readFileSync } from "node:fs";

const serviceAccount = JSON.parse(
  readFileSync(process.env.FIREBASE_CREDENTIALS_PATH, "utf8")
);

const app = initializeApp({
  credential: cert(serviceAccount),
});

export default app;