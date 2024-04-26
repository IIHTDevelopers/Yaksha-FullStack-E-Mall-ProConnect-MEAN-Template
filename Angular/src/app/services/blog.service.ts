import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private baseUrl = 'http://127.0.0.1:8081/api/blogs';

    constructor(private http: HttpClient) { }

    createBlog(blog: Blog): any {
        // write your logic here
        return null;
    }

    getBlog(id: string): any {
        // write your logic here
        return null;
    }

    updateBlog(id: string, blog: Blog): any {
        // write your logic here
        return null;
    }

    deleteBlog(id: string): any {
        // write your logic here
        return null;
    }

    getAllBlogs(): any {
        // write your logic here
        return null;
    }

    getPopularBlogs(): any {
        // write your logic here
        return null;
    }

    addComment(blogId: string, comment: any): any {
        // write your logic here
        return null;
    }

    editComment(blogId: string, commentId: string, updatedComment: any): any {
        // write your logic here
        return null;
    }

    deleteComment(blogId: string, commentId: string): any {
        // write your logic here
        return null;
    }

    getCategories(): any {
        // write your logic here
        return null;
    }

    likeBlog(blogId: string): any {
        // write your logic here
        return null;
    }

    getCommentCount(blogId: string): any {
        // write your logic here
        return null;
    }

    getBlogByProduct(productId: string): any {
        // write your logic here
        return null;
    }
}
