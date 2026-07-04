import { PostCard } from "./components/PostCard";
import HeroSection from "./components/HeroSection";
import SectionLabel from "./components/SectionLabel";
import { getPosts } from "./data/queries";

const STORAGE_KEY = "drone-blog-posts";

export default async function App() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <SectionLabel>Blog Entries</SectionLabel>


        {posts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground text-sm"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
            NO ENTRIES YET
          </div>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 