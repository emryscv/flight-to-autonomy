import { BlockType } from "../data/types";

export default function BlockRenderer({ blocks }: { blocks: BlockType[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "text") {
          return (
            <div key={i} className="space-y-3">
              {block.content.split("\n\n").map((para, pi) => (
                <p key={pi}
                  className="text-sm leading-relaxed text-foreground"
                  style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400, fontSize: "1rem" }}>
                  {para.split("\n").map((line, li) =>
                    line.startsWith("- ")
                      ? <span key={li} className="flex items-start gap-2 mb-1">
                          <span className="text-accent mt-1 shrink-0">—</span>
                          <span>{line.slice(2)}</span>
                        </span>
                      : <span key={li} className="block">{line}</span>
                  )}
                </p>
              ))}
            </div>
          );
        }
        if (block.type === "image" && block.src) {
          return (
            <figure key={i} className="border border-border rounded-md overflow-hidden">
              <img src={block.src} alt={block.caption || ""}
                className="w-full object-cover" />
              {block.caption && (
                <figcaption
                  className="px-4 py-2 text-xs text-muted-foreground bg-secondary/50 border-t border-border uppercase tracking-wide"
                  style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
}