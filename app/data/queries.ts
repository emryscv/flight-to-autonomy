import postgres from 'postgres';
import { PostType } from './types';

const sql = postgres(process.env.POSTGRES_URL!, { 
    ssl: 'require',
    max: 3
});

export async function getPosts() {
    try {
        const posts = await sql<PostType[]>`SELECT * FROM post ORDER BY date DESC`;
        console.log('Posts fetched successfully:', posts.length);
        return posts;
    } catch (error) {
        console.error('Failed to fetch posts - Error details:', {
            error,
            message: error instanceof Error ? error.message : String(error),
            url: process.env.POSTGRES_URL ? 'Set' : 'Not set'
        });
        return [];
    }
}

export async function getPostById(id: string) {
    try {
        const post = await sql<PostType[]>`SELECT * FROM post WHERE id=${id}`;
        return post[0];
    } catch (error) {
        console.error('Failed to fetch post:', error);
        throw new Error('Failed to fetch post.');
    }
}

export async function createPost(post: PostType){
    await sql`INSERT INTO post(date, title, content, author, estimated_read_time, image) VALUES (${post.date}, ${post.title}, ${post.content}, ${post.author}, ${post.estimated_read_time}, ${post.image})`;
}