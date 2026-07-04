import { Lock } from "lucide-react";

export default function NavBar() {
    return (
        <nav className="bg-black border-b border-border sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <button
                    //onClick={() => setView({ page: "home" })}
                    className="flex items-center gap-2.5">
                    <div className="w-6 h-6 bg-accent rounded-sm" />
                    <span
                        className="text-accent font-bold tracking-[0.2em] text-md uppercase"
                        style={{ fontFamily: "'Orbitron', monospace" }}>
                        Flight to Autonomy
                    </span>
                </button>

                {/* admin link — subtle */}
                <button
                    //onClick={() => setView({ page: "admin" })}
                    title="Admin"
                    className="text-white/20 hover:text-accent transition-colors">
                    <Lock className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}

