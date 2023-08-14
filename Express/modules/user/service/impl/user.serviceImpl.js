const UserService = require("../user.service");

class UserServiceImpl extends UserService {
    async createUser(userData) {
        // write you logic here
        return null;
    }

    async getUserProfile(userId) {
        // write you logic here
        return null;
    }

    async updateUserProfile(userId, updatedProfile) {
        // write you logic here
        return null;
    }

    async deleteUser(userId) {
        // write you logic here
        return null;
    }

    async getUserByEmail(email) {
        // write you logic here
        return null;
    }

    async getUserActivity(userId) {
        // write you logic here
        return null;
    }

    async getUserFavorites(userId) {
        // write you logic here
        return null;
    }

    async changeUserPassword(userId, newPassword) {
        // write you logic here
        return null;
    }

    async logUserActivity(userId, action) {
        // write you logic here
        return null;
    }

}

module.exports = UserServiceImpl;
