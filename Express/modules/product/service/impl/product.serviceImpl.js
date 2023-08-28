const ProductService = require('../product.service');

class ProductServiceImpl extends ProductService {
    async createProduct(productData) {
        // write your logic here
        return null;
    }

    async getProduct(productId) {
        // write your logic here
        return null;
    }

    async updateProduct(productId, updatedProduct) {
        // write your logic here
        return null;
    }

    async deleteProduct(productId) {
        // write your logic here
        return null;
    }

    async searchProduct(name, description) {
        // write your logic here
        return null;
    }

    async getTopRatedProducts(limit) {
        // write your logic here
        return null;
    }

    async getAllProducts() {
        // write your logic here
        return null;
    }

    async applyDiscount(userId, discountPercentage) {
        // write your logic here
        return null;
    }

    async checkoutCart(userId, paymentMethod, address) {
        // write your logic here
        return null;
    }

    async addToCart(userId, productId, quantity, price) {
        // write your logic here
        return null;
    }

    async viewCart(userId) {
        // write your logic here
        return null;
    }

    async updateCartItem(userId, itemId, quantity) {
        // write your logic here
        return null;
    }

    async removeCartItem(userId, itemId) {
        // write your logic here
        return null;
    }
}

module.exports = ProductServiceImpl;
