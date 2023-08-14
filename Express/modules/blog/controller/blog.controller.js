const BlogServiceImpl = require('../service/impl/blog.serviceImpl');

const blogService = new BlogServiceImpl();

class BlogController {
    async createBlog(req, res) {
        // write your logic here    
    };

    async getBlog(req, res) {
        // write your logic here    
    };

    async updateBlog(req, res) {
        // write your logic here    
    };

    async deleteBlog(req, res) {
        // write your logic here    
    };

    async getAllBlogs(req, res) {
        // write your logic here    
    };

    async getPopularBlogs(req, res) {
        // write your logic here    
    };

    async addComment(req, res) {
        // write your logic here    
    };

    async editComment(req, res) {
        // write your logic here    
    };

    async deleteComment(req, res) {
        // write your logic here    
    };

    async getCategories(req, res) {
        // write your logic here    
    };

    async likeBlog(req, res) {
        // write your logic here    
    };

    async getCommentCount(req, res) {
        // write your logic here    
    };
}

module.exports = BlogController;