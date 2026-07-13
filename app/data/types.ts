export type PostType = {
    id: string;
    date: string;
    title: string;
    image: string;
    content: string;
    author: string;
    estimated_read_time: number;
};

export type UserType = {
    id: string,
    name: string,
    email: string,
    password: string,
}

export type View = { page: "home" } | { page: "post"; id: string } | { page: "admin" };