export function HudTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative inline-block px-5 py-3">
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-accent" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-accent" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-accent" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-accent" />
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-foreground"
                style={{ fontFamily: "'Orbitron', monospace" }}>
                {children}
            </h1>
        </div>
    );
}