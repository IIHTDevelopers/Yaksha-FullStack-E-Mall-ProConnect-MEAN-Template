const UserServiceImpl = require('../service/impl/user.serviceImpl');

const userService = new UserServiceImpl();

class UserController {
    async createUser(req, res) {
        // write your logic here
    }

    async getUserProfile(req, res) {
        // write your logic here
    }

    async updateUserProfile(req, res) {
        // write your logic here
    }

    async deleteUser(req, res) {
        // write your logic here
    }

    async getUserByEmail(req, res) {
        // write your logic here
    }
    async getUserActivity(req, res) {
        // write your logic here
    }

    async getUserFavorites(req, res) {
        // write your logic here
    }

    async changeUserPassword(req, res) {
        // write your logic here
    }
}

module.exports = UserController;
