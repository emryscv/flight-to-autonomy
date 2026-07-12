import { AlignLeft, X } from "lucide-react";
import { TextBlockType } from "../data/types";

export default function TextBlockEditor({ block, onChange, onDelete }: {
  block: TextBlockType;
  onChange: (content: string) => void;
  onDelete: () => void;
}) {
  return (
    <div className="group/blk relative border border-border rounded-md bg-card focus-within:border-accent transition-colors">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-secondary/40">
        <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground"
          style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
          <AlignLeft className="w-3 h-3" /> Text
        </span>
        <button type="button" onClick={onDelete}
          className="text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover/blk:opacity-100">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <textarea
        value={block.content}
        onChange={e => onChange(e.target.value)}
        placeholder="Write here... (blank line = new paragraph, '- item' = list)"
        rows={5}
        className="w-full bg-transparent px-4 py-3 text-sm leading-relaxed outline-none resize-y"
        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400 }}
      />
    </div>
  );
}