import { AlignLeft, Image, Plus, X } from "lucide-react";
import { useState } from "react";

export default function BlockInserter({ onInsert }: { onInsert: (type: "text" | "image") => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center my-1 group/ins">
      {/* line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-border group-hover/ins:bg-accent/40 transition-colors" />
      {/* button */}
      <button type="button"
        onClick={() => setOpen(v => !v)}
        className={`relative z-10 w-6 h-6 rounded-sm flex items-center justify-center border transition-colors
          ${open
            ? "bg-accent border-accent text-black"
            : "bg-background border-border text-muted-foreground hover:border-accent hover:text-accent"
          }`}>
        {open ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
      </button>

      {/* options */}
      {open && (
        <div className="absolute top-8 z-20 flex gap-2 bg-card border-2 border-accent rounded-md p-2 shadow-lg">
          <button type="button"
            onClick={() => { onInsert("text"); setOpen(false); }}
            className="flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-widest font-medium rounded hover:bg-accent hover:text-black transition-colors"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
            <AlignLeft className="w-3.5 h-3.5" />
            Text
          </button>
          <button type="button"
            onClick={() => { onInsert("image"); setOpen(false); }}
            className="flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-widest font-medium rounded hover:bg-accent hover:text-black transition-colors"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
            <Image className="w-3.5 h-3.5" />
            Image
          </button>
        </div>
      )}
    </div>
  );
}