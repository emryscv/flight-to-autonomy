import { useRef } from "react";
import { ImageBlockType } from "../data/types";
import { Image, X } from "lucide-react"

export default function ImageBlockEditor({ block, onChange, onDelete }: {
  block: ImageBlockType;
  onChange: (patch: Partial<ImageBlockType>) => void;
  onDelete: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      onChange({ src: ev.target?.result as string });
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="group/blk relative border border-border rounded-md bg-card focus-within:border-accent transition-colors overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-secondary/40">
        <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground"
          style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
          <Image className="w-3 h-3" /> Image
        </span>
        <button type="button" onClick={onDelete}
          className="text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover/blk:opacity-100">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {block.src ? (
        <div className="relative">
          <img src={block.src} alt={block.caption || "block image"}
            className="w-full max-h-80 object-cover" />
          <button type="button"
            onClick={() => onChange({ src: "" })}
            className="absolute top-2 right-2 bg-black/60 hover:bg-destructive text-white rounded-sm p-1 transition-colors">
            <X className="w-3.5 h-3.5" />
          </button>
          <input
            type="text"
            value={block.caption}
            onChange={e => onChange({ caption: e.target.value })}
            placeholder="Caption (optional)"
            className="w-full bg-secondary/60 border-t border-border px-4 py-2 text-xs outline-none focus:bg-secondary transition-colors"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}
          />
        </div>
      ) : (
        <button type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full py-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent hover:bg-secondary/30 transition-colors">
          <Image className="w-8 h-8" />
          <span className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
            Click to upload image
          </span>
        </button>
      )}

      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  );
}