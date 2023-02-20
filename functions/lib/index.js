"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDocument = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
exports.createUserDocument = functions.auth.user();
onCreate(async (user) => {
    db.collection("users")
        .doc(user.uid)
        .set(JSON.parse(JSON.stringify(user)));
});
function onCreate(arg0) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=index.js.map