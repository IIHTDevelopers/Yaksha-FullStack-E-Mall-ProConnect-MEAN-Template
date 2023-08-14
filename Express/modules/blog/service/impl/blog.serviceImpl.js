const BlogService = require('../blog.service');

class BlogServiceImpl extends BlogService {
    async createBlog(blogData) {
        // write you logic here
        return null;
    }

    async getBlog(blogId) {
        // write you logic here
        return null;
    }

    async updateBlog(blogId, updatedBlog) {
        // write you logic here
        return null;
    }

    async deleteBlog(blogId) {
        // write you logic here
        return null;
    }

    async getAllBlogs() {
        // write you logic here
        return null;
    }

    async getPopularBlogs() {
        // write you logic here
        return null;
    }

    async addComment(blogId, comment) {
        // write you logic here
        return null;
    }

    async editComment(blogId, commentId, updatedComment) {
        // write you logic here
        return null;
    }

    async deleteComment(blogId, commentId) {
        // write you logic here
        return null;
    }

    async getCategories() {
        // write you logic here
        return null;
    }

    async likeBlog(blogId) {
        // write you logic here
        return null;
    }

    async getCommentCount(blogId) {
        // write you logic here
        return null;
    }
}

module.exports = BlogServiceImpl;
