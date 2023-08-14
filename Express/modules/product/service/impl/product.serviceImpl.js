const ProductService = require('../product.service');

class ProductServiceImpl extends ProductService {
    async createProduct(productData) {
        // write you logic here
        return null;
    }

    async getProduct(productId) {
        // write you logic here
        return null;
    }

    async updateProduct(productId, updatedProduct) {
        // write you logic here
        return null;
    }

    async deleteProduct(productId) {
        // write you logic here
        return null;
    }

    async searchProduct(name, description) {
        // write you logic here
        return null;
    }

    async getTopRatedProducts(limit) {
        // write you logic here
        return null;
    }

    async getAllProducts() {
        // write you logic here
        return null;
    }

    async applyDiscount(userId, discountPercentage) {
        // write you logic here
        return null;
    }

    async checkoutCart(userId) {
        // write you logic here
        return null;
    }
    async addToCart(userId, productId, quantity) {
        // write you logic here
        return null;
    }

    async viewCart(userId) {
        // write you logic here
        return null;
    }

    async updateCartItem(userId, itemId, quantity) {
        // write you logic here
        return null;
    }

    async removeCartItem(userId, itemId) {
        // write you logic here
        return null;
    }
}

module.exports = ProductServiceImpl;
