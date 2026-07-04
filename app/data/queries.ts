import postgres from 'postgres';
import { PostType } from './types';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getPosts() {
    try {
        const posts = await sql<PostType[]>`SELECT * FROM post ORDER BY date DESC`;
        return posts;
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        throw new Error('Failed to fetch posts.');
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
    await sql`INSERT INTO post(date, title, content, author, estimated_read_time) VALUES (${post.date}, ${post.title}, ${post.content}, ${post.author}, ${post.estimated_read_time})`;
}