"use server";

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { PostType } from './types';
import { createPost } from './queries';
import { revalidatePath } from 'next/cache';
import { put } from '@vercel/blob';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirectTo: '/admin',
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function signOutAction() {
    await signOut({ redirectTo: '/' });
}

export async function createPostAction(formData: FormData) {
    const date = formData.get('date') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string;
    const image = formData.get('image') as File | null;


    try {
        let blob;
        if (image && image.size > 0) {
            blob = await put(image.name, image, {
                access: 'private',
                addRandomSuffix: true,
            });
            revalidatePath('/');
        }


        const post: PostType = {
            id: "-1",
            date,
            title,
            content,
            author,
            image: blob?.url ?? '',
            estimated_read_time: Math.max(1, Math.round(content.split(/\s+/).length / 200)),
        };

        await createPost(post);
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
}

