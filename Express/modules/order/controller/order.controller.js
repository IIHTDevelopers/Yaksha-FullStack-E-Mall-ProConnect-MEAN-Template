const OrderServiceImpl = require("../service/impl/order.serviceImpl");

const orderService = new OrderServiceImpl();

class OrderController {
    async createOrder(req, res) {
        // write your logic here
    }

    async getOrder(req, res) {
        // write your logic here
    }

    async updateOrder(req, res) {
        // write your logic here
    }

    async deleteOrder(req, res) {
        // write your logic here
    }

    async getUserOrders(req, res) {
        // write your logic here
    }

    async cancelOrder(req, res) {
        // write your logic here
    }

    async getPaymentDetails(req, res) {
        // write your logic here
    }

    async processPayment(req, res) {
        // write your logic here
    }

    async getOrderAnalytics(req, res) {
        // write your logic here
    }

    async generateInvoice(req, res) {
        // write your logic here
    }

    async trackShipment(req, res) {
        // write your logic here
    }

    async getRevenueAnalytics(req, res) {
        // write your logic here
    }
}

module.exports = OrderController;
