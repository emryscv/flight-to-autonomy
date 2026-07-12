export type PostType = {
    id: string;
    date: string;
    title: string;
    content: string;
    author: string;
    estimated_read_time: number;
};

export type UserType = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type TextBlockType = {
    type: "text";
    content: string
};
export type ImageBlockType = {
    type: "image";
    src: string;
    caption: string
};

export type BlockType = TextBlockType | ImageBlockType;
