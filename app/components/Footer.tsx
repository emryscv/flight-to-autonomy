export default function Footer() {
    return (
        <footer className="bg-black border-t border-border mt-16 px-6 py-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 bg-accent rounded-sm" />
                    <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase"
                        style={{ fontFamily: "'Orbitron', monospace" }}>
                        Drone Club
                    </span>
                </div>
                <div className="text-xs text-white/30 font-mono uppercase tracking-wide text-center">
                    Capstone Project Blog · Academic Year 2025–2026
                </div>
                <div className="text-xs text-white/30 font-mono">
                    PHASE 03 // ASSEMBLY
                </div>
            </div>
        </footer>
    );
}