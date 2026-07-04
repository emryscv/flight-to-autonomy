import { Lock } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="bg-black border-b border-border sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="/"
                    className="flex items-center gap-2.5">
                    <Image
                        src="/droneClubLogo.png"
                        width="40"
                        height="40"
                        alt="Drone Club Logo"
                        style={{ filter: "invert(100%)" }}
                    />
                    <span
                        className="text-accent font-bold tracking-[0.2em] text-md uppercase"
                        style={{ fontFamily: "'Orbitron', monospace" }}>
                        Flight to Autonomy
                    </span>
                </a>

                {/* admin link — subtle */}
                <a
                    href="/admin"
                    title="Admin"
                    className="text-white/20 hover:text-accent transition-colors">
                    <Lock className="w-6 h-6" />
                </a>
            </div>
        </nav>
    );
}

