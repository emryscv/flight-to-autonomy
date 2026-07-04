export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 max-w-7xl mx-auto">
      <div className="w-2 h-2 bg-accent" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
        style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}