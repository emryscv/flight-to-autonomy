import { Calendar, Clock } from "lucide-react";
import { Post } from "../data/types";

function formatDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}


export function PostCard({ post, onClick }: { post: Post; onClick: () => void }) {
    return (
        <article
            onClick={onClick}
            className="border border-border rounded-md bg-card hover:border-accent transition-colors cursor-pointer group p-5">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
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
                {post.body.split("\n")[0]}
            </p>
        </article>
    );
}