import { get } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { getPostById } from '@/app/data/queries';

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const post = await getPostById(id);

    if (!post?.image) {
        return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    const blobResult = await get(post.image, { access: 'private' });

    if (!blobResult || blobResult.statusCode !== 200) {
        return NextResponse.json({ error: 'Blob not found' }, { status: 404 });
    }

    return new Response(blobResult.stream, {
        headers: {
            'Content-Type': blobResult.blob.contentType,
            'Cache-Control': blobResult.blob.cacheControl || 'private, max-age=3600',
            'Content-Disposition': 'inline',
        },
    });
}