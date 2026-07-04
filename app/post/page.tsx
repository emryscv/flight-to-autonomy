import { formatDate } from "../helpers";
import { Post } from "../data/types";
import { Calendar, ArrowLeft, Clock, Tag } from "lucide-react";

export default function PostDetail() {
    const post: Post = { id: "1", title: "Sample Post", date: "2024-06-01", readTime: 5, body: "This is a sample post body.\n\n- First point\n- Second point", tags: ["sample", "post"] };
    const onBack = () => { };

    return (
        <div className="max-w-2xl mx-auto px-6 py-12">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-10"
                style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Logbook
            </button>

            <div className="flex items-center justify-between mb-6 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                </span>
            </div>

            <h1
                className="font-black uppercase tracking-wide text-accent leading-tight mb-8"
                style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.05rem" }}>
                {post.title}
            </h1>

            <div className="space-y-5">
                {post.body.split("\n\n").map((para, i) => (
                    <p
                        key={i}
                        className="text-sm leading-relaxed text-foreground"
                        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400, fontSize: "1rem" }}>
                        {para.startsWith("- ") || para.includes("\n- ")
                            ? para.split("\n").map((line, j) =>
                                line.startsWith("- ")
                                    ? <span key={j} className="flex items-start gap-2 mb-1"><span className="text-accent mt-0.5">—</span><span>{line.slice(2)}</span></span>
                                    : <span key={j} className="block">{line}</span>
                            )
                            : para}
                    </p>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
                <Tag className="w-3.5 h-3.5 text-muted-foreground mt-0.5" />
                {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5 uppercase">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}