"use client";
import { useState } from "react";
import { ArrowLeft, Plus, X } from "lucide-react";
import { Post } from "../data/types";
import { estimateReadTime } from "../helpers";

export default function AdminCreate({
    onSave,
    onBack,
}: {
    onSave: (post: Post) => void;
    onBack: () => void;
}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tagInput, setTagInput] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    function addTag() {
        const t = tagInput.trim().toLowerCase().replace(/\s+/g, "-");
        if (t && !tags.includes(t)) setTags(prev => [...prev, t]);
        setTagInput("");
    }

    function removeTag(t: string) {
        setTags(prev => prev.filter(x => x !== t));
    }

    function submit() {
        if (!title.trim() || !body.trim()) return;
        const post: Post = {
            id: Date.now().toString(),
            date,
            title: title.trim(),
            body: body.trim(),
            tags,
            readTime: estimateReadTime(body),
        };
        onSave(post);
    }

    const canSubmit = title.trim().length > 0 && body.trim().length > 0;

    return (
        <div className="mx-auto px-6 py-12 max-w-2xl">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-10"
                style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
            </button>

            <div className="flex items-center gap-3 mb-8">
                <Plus className="w-5 h-5 text-accent" />
                <span
                    className="text-sm font-bold uppercase tracking-widest text-accent"
                    style={{ fontFamily: "'Orbitron', monospace" }}>
                    New Log Entry
                </span>
            </div>

            <div className="space-y-5">
                {/* date */}
                <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                        Date
                    </label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="bg-input-background border border-border rounded-md px-4 py-2.5 text-sm font-mono outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors w-48"
                    />
                </div>

                {/* title */}
                <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Entry title..."
                        className="w-full bg-input-background border border-border rounded-md px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    />
                </div>

                {/* body */}
                <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                        Body
                        <span className="ml-2 text-muted-foreground/60 normal-case tracking-normal">
                            (blank line = new paragraph, "- item" = list)
                        </span>
                    </label>
                    <textarea
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        placeholder="Write your log entry here..."
                        rows={12}
                        className="w-full bg-input-background border border-border rounded-md px-4 py-3 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-y"
                        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400 }}
                    />
                </div>
                {/* tags */}
                <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                        Tags
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={tagInput}
                            onChange={e => setTagInput(e.target.value)}
                            onKeyDown={e => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addTag(); } }}
                            placeholder="tag name"
                            className="flex-1 bg-input-background border border-border rounded-md px-4 py-2.5 text-sm font-mono outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        />
                        <button onClick={addTag}
                            className="border border-border px-4 py-2.5 text-xs uppercase tracking-wide rounded-md hover:bg-accent hover:text-black hover:border-accent transition-colors"
                            style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                            Add
                        </button>
                    </div>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map(tag => (
                                <span key={tag} className="flex items-center gap-1 text-xs font-mono border border-border rounded px-1.5 py-0.5 uppercase text-muted-foreground">
                                    #{tag}
                                    <button onClick={() => removeTag(tag)} className="hover:text-destructive transition-colors ml-0.5">
                                        <X className="w-2.5 h-2.5" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* submit */}
                <div className="pt-2">
                    <button
                        onClick={submit}
                        disabled={!canSubmit}
                        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-xs uppercase tracking-widest font-bold
               hover:bg-accent hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                        Publish Entry
                    </button>
                </div>
            </div>
        </div>

    );
}