export type Post = {
    id: string;
    date: string;
    title: string;
    body: string;
    tags: string[];
    readTime: number;
};

export type UserType = {
    id: string,
    name: string,
    email: string,
    password: string,
}

export type View = { page: "home" } | { page: "post"; id: string } | { page: "admin" };