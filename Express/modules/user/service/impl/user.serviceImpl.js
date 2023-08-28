const UserService = require("../user.service");

class UserServiceImpl extends UserService {
    async createUser(userData) {
        // write your logic here
        return null;
    }

    async getUserProfile(userId) {
        // write your logic here
        return null;
    }

    async updateUserProfile(userId, updatedProfile) {
        // write your logic here
        return null;
    }

    async deleteUser(userId) {
        // write your logic here
        return null;
    }

    async getUserByEmail(email) {
        // write your logic here
        return null;
    }

    async getUserActivity(userId) {
        // write your logic here
        return null;
    }

    async getUserFavorites(userId) {
        // write your logic here
        return null;
    }

    async changeUserPassword(userId, newPassword) {
        // write your logic here
        return null;
    }

    async logUserActivity(userId, action) {
        // write your logic here
        return null;
    }

    async loginUser(email, password) {
        // write your logic here
        return null;
    }
}

module.exports = UserServiceImpl;
