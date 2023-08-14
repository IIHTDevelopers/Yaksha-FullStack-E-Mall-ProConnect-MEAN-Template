const AdminServiceImpl = require('../service/impl/admin.serviceImpl');

const adminService = new AdminServiceImpl();

class AdminController {
    async viewAllUsers(req, res) {
        // write your logic here
    };

    async viewAllProducts(req, res) {
        // write your logic here
    };

    async viewAllOrders(req, res) {
        // write your logic here
    };

    async viewAllBlogPosts(req, res) {
        // write your logic here
    };

    async viewDashboard(req, res) {
        // write your logic here
    }

    async viewReports(req, res) {
        // write your logic here
    }

    async viewUserAnalytics(req, res) {
        // write your logic here
    }

    async viewProductInventory(req, res) {
        // write your logic here
    }

    async viewSalesReports(req, res) {
        // write your logic here
    }
}

module.exports = AdminController;
