export type Post = {
    id: string;
    date: string;
    title: string;
    body: string;
    tags: string[];
    readTime: number;
};

export type View = { page: "home" } | { page: "post"; id: string } | { page: "admin" };