import { Calendar, Clock } from "lucide-react";
import { PostType } from "../data/types";
import { formatDate, estimateReadTime } from "../helpers";

export function PostCard({ post }: { post: PostType }) {
    return (
        <a href={`./post/${post.id}`}
            className="border border-border rounded-md bg-card hover:border-accent transition-colors cursor-pointer group p-5">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.estimated_read_time} min read
                </span>
            </div>

            <h2
                className="font-black uppercase tracking-wide text-foreground group-hover:text-accent transition-colors mb-2 leading-tight"
                style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.78rem" }}>
                {post.title}
            </h2>

            <p
                className="text-sm text-muted-foreground leading-relaxed line-clamp-2"
                style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400 }}>
                {post.content.substring(0, 100)}{post.content.length > 100 ? "..." : ""}
            </p>
        </a>
    );
}