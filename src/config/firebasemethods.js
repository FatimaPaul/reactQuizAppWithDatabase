import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./firebaseconfig";

const auth = getAuth(app);
const db = getDatabase(app);

export function SignUpMethod(body) {
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password || !body.roll || !body.username) {
      reject("Must fill all the fields!");
    } else {
      createUserWithEmailAndPassword(auth, body.email, body.password, body.roll)
        .then((res) => {
          let id = res.user.uid;
          body.id = id;
          const reference = ref(db, `users/${id}`);
          set(reference, body)
            .then((user) => {
              resolve(body.roll);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => err);
    }
  });
}

export function LoginMethod(body) {
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password) {
      reject("Must fill all fields");
    } else {
      signInWithEmailAndPassword(auth, body.email, body.password, body.roll)
        .then((res) => {
          let id = res.user.uid;
          const reference = ref(db, `users/${id}`);
          onValue(reference, (data) => {
            if (data.exists) {
              resolve(data.val());
            } else {
              reject("no data found!");
            }
          });
        })
        .catch((err) => console.log(err));
    }
  });
}
