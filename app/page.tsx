"use client";

import { useState } from "react";
import { PostCard } from "./components/PostCard";
import { Post } from "./data/types";
import { SEED_POSTS } from "./data/seed_posts";
import HeroSection from "./components/HeroSection";
import SectionLabel from "./components/SectionLabel";

const STORAGE_KEY = "drone-blog-posts";

export default function App() {
  const [posts, setPosts] = useState<Post[]>(SEED_POSTS);

  /*const currentPost =
    view.page === "post" ? posts.find(p => p.id === view.id) : null;*/
  const sorted: Post[] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <SectionLabel>Blog Entries</SectionLabel>


        {sorted.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground text-sm"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
            NO ENTRIES YET
          </div>
        ) : (

          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {sorted.map(post => (
              <PostCard key={post.id} post={post} onClick={() => { }/*() => onSelect(post.id)*/} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 