const ProductServiceImpl = require("../service/impl/product.serviceImpl");

const productService = new ProductServiceImpl();

class ProductController {
    async createProduct(req, res) {
        // write your logic here
    }

    async getProduct(req, res) {
        // write your logic here
    }

    async updateProduct(req, res) {
        // write your logic here
    }

    async deleteProduct(req, res) {
        // write your logic here
    }

    async getAllProducts(req, res) {
        // write your logic here
    }

    async getTopRatedProducts(req, res) {
        // write your logic here
    }

    async searchProduct(req, res) {
        // write your logic here
    }

    async applyDiscount(req, res) {
        // write your logic here
    }

    async checkoutCart(req, res) {
        // write your logic here
    }

    async addToCart(req, res) {
        // write your logic here
    }

    async viewCart(req, res) {
        // write your logic here
    }

    async updateCartItem(req, res) {
        // write your logic here
    }

    async removeCartItem(req, res) {
        // write your logic here
    }
}

module.exports = ProductController;
