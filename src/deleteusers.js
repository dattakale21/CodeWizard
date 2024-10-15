// deleteUsers.js
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('../config/serviceAccountKey');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Function to delete all users
const deleteAllUsers = async () => {
    try {
        const listUsersResult = await admin.auth().listUsers();
        const users = listUsersResult.users;

        // Delete users one by one
        for (const user of users) {
            await admin.auth().deleteUser(user.uid);
            console.log(`Deleted user: ${user.email}`);
        }

        console.log('All users have been deleted successfully.');
    } catch (error) {
        console.error('Error deleting users:', error);
    }
};

// Run the delete function
deleteAllUsers();
