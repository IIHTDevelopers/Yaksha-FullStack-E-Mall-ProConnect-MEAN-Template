const BlogService = require('../blog.service');

class BlogServiceImpl extends BlogService {
    async createBlog(blogData) {
        // write your logic here
        return null;
    }

    async getBlog(blogId) {
        // write your logic here
        return null;
    }

    async updateBlog(blogId, updatedBlog) {
        // write your logic here
        return null;
    }

    async deleteBlog(blogId) {
        // write your logic here
        return null;
    }

    async getAllBlogs() {
        // write your logic here
        return null;
    }

    async getPopularBlogs() {
        // write your logic here
        return null;
    }

    async addComment(blogId, comment) {
        // write your logic here
        return null;
    }

    async editComment(blogId, commentId, updatedComment) {
        // write your logic here
        return null;
    }

    async deleteComment(blogId, commentId) {
        // write your logic here
        return null;
    }

    async getCategories() {
        // write your logic here
        return null;
    }

    async likeBlog(blogId) {
        // write your logic here
        return null;
    }

    async getCommentCount(blogId) {
        // write your logic here
        return null;
    }

    async getBlogByProduct(productId) {
        // write your logic here
        return null;
    }
}

module.exports = BlogServiceImpl;
