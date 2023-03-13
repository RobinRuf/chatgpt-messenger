import admin from 'firebase-admin'
import { getApps } from 'firebase-admin/app'

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string // added this key to env.local after converting it with this website: https://www.textfixer.com/tools/remove-line-breaks.php
)

if (!getApps().length!) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const adminDb = admin.firestore();

export { adminDb };
