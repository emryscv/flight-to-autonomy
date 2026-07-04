"use client";
import { useState } from "react";
import { ArrowLeft, LogOut, Plus, X } from "lucide-react";
import { PostType } from "../data/types";
import { estimateReadTime } from "../helpers";
import { signOutAction } from "../data/actions";

export default function AdminCreate() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);


    const canSubmit = title.trim().length > 0 && body.trim().length > 0;

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

            <form className="space-y-5">
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
            </form>
        </div>

    );
}