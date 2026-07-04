"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import { HudTitle } from "./components/HUDtitle";
import { PostCard } from "./components/PostCard";
import { Post } from "./data/types";
import { SEED_POSTS } from "./data/seed_posts";
import HeroSection from "./components/HeroSection";


const STORAGE_KEY = "drone-blog-posts";


export default function App() {
  const [posts, setPosts] = useState<Post[]>(SEED_POSTS);
  const [adminUnlocked, setAdminUnlocked] = useState(false);

  /*const currentPost =
    view.page === "post" ? posts.find(p => p.id === view.id) : null;*/
  const sorted: Post[] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
      <HeroSection />
      <div className="max-w-2xl mx-auto px-6 py-12">

        <div className="mb-10 flex flex-col items-start gap-6">


          <HudTitle>
            <span
              className="text-3xl md:text-4xl font-black uppercase tracking-widest text-foreground"
              style={{ fontFamily: "'Orbitron', monospace" }}>
              Flight Log
            </span>
          </HudTitle>
          <p
            className="text-sm text-muted-foreground max-w-md leading-relaxed"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Progress log for my Drone Club capstone — building an autonomous quadrotor from scratch.
            Every assembly step, calibration run, and flight test recorded here.
          </p>
        </div>

        {sorted.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground text-sm"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
            NO ENTRIES YET
          </div>
        ) : (
          <div className="space-y-4">
            {sorted.map(post => (
              <PostCard key={post.id} post={post} onClick={() => { }/*() => onSelect(post.id)*/} />
            ))}
          </div>
        )}
      </div>
    </div >
  );
}