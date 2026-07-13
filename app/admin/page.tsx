"use client";
import { useRef, useState } from "react";
import { Image, LogOut, Plus, X } from "lucide-react";
import { createPostAction, signOutAction } from "../data/actions";

export default function AdminCreate() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [picture, setPicture] = useState<File | null>(null);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPicture(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const fileRef = useRef<HTMLInputElement>(null);
    const canSubmit = title.trim().length > 0 && body.trim().length > 0 && author.trim().length > 0;

    return (
        <div className="mx-auto px-6 py-12 max-w-2xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 mb-8">
                    <Plus className="w-5 h-5 text-accent" />
                    <span
                        className="text-sm font-bold uppercase tracking-widest text-accent"
                        style={{ fontFamily: "'Orbitron', monospace" }}>
                        New Log Entry
                    </span>
                </div>

                <form
                    action={signOutAction}
                >
                    < button
                        className="flex items-center gap-2 px-4 py-2 bg-destructive text-white rounded-md hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </form>
            </div>

            <form
                className="space-y-5"
                action={createPostAction}
            >
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                            style={{ fontFamily: "'Saira Condensed', sans-serif" }}
                            htmlFor="date"
                        >
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className="bg-input-background border border-border rounded-md px-4 py-2.5 text-sm font-mono outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors w-48"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                            style={{ fontFamily: "'Saira Condensed', sans-serif" }}
                            htmlFor="author">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            placeholder="Author name..."
                            className="w-full bg-input-background border border-border rounded-md px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            style={{ fontFamily: "'Rajdhani', sans-serif" }}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}
                        htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Entry title..."
                        className="w-full bg-input-background border border-border rounded-md px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    />
                </div>

                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                    style={{ fontFamily: "'Saira Condensed', sans-serif" }}
                    htmlFor="content">
                    Image
                </label>

                {previewUrl ? (
                    <div className="relative">
                        <img src={previewUrl} alt={"Post hero image"}
                            className="w-full max-h-80 object-cover" />
                        <button
                            type="button"
                            onClick={() => setPreviewUrl(null)}
                            className="absolute top-2 right-2 bg-black/60 hover:bg-destructive text-white rounded-sm p-1 transition-colors">
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="w-full py-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent hover:bg-secondary/30 transition-colors">
                        <Image className="w-8 h-8" />
                        <span className="text-xs uppercase tracking-widest"
                            style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                            Click to upload image
                        </span>
                    </button>
                )}

                <input
                    type="file"
                    id="image"
                    name="image"
                    ref={fileRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />

                <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}
                        htmlFor="content">
                        Body
                        <span className="ml-2 text-muted-foreground/60 normal-case tracking-normal">
                            (blank line = new paragraph, "- item" = list)
                        </span>
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        placeholder="Write your log entry here..."
                        rows={12}
                        className="w-full bg-input-background border border-border rounded-md px-4 py-3 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-y"
                        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400 }}
                    />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-xs uppercase tracking-widest font-bold
               hover:bg-accent hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                        Publish Entry
                    </button>
                </div>
            </form>
        </div>

    );
}