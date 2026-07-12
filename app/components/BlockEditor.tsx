import { BlockType } from "../data/types";
import BlockInserter from "./BlockInserter";
import ImageBlockEditor from "./ImageBlockEditor";
import TextBlockEditor from "./TextBlockEditor";

export default function BlockEditor({ blocks, onChange }: {
    blocks: BlockType[]; onChange: (blocks: BlockType[]) => void;
}) {
    function insertAt(index: number, type: "text" | "image") {
        const newBlock: BlockType =
            type === "text"
                ? { type: type, content: "" } as BlockType
                : { type: type, src: "", caption: "" } as BlockType
        const next = [...blocks];
        next.splice(index, 0, newBlock);
        onChange(next);
    }

    function deleteAt(index: number) {
        onChange(
            blocks.filter((_, i) => i !== index));
    }

    function updateAt(index: number, patch: Partial<BlockType>) {
        onChange(
            blocks.map(
                (b, i) => i === index ? { ...b, ...patch } as BlockType : b
            )
        );
    }

    return (
        <div>
            {/* inserter before first block */}
            <BlockInserter onInsert={type => insertAt(0, type)} />

            {blocks.map((block, i) => (
                <div key={i}>
                    {block.type === "text" ? (
                        <TextBlockEditor
                            block={block}
                            onChange={content => updateAt(i, { content })}
                            onDelete={() => deleteAt(i)}
                        />
                    ) : (
                        <ImageBlockEditor
                            block={block}
                            onChange={patch => updateAt(i, patch)}
                            onDelete={() => deleteAt(i)}
                        />
                    )}
                    {/* inserter after each block */}
                    <BlockInserter onInsert={type => insertAt(i + 1, type)} />
                </div>
            ))}

            {/* empty state */}
            {blocks.length === 0 && (
                <div className="text-center py-6 text-xs text-muted-foreground uppercase tracking-widest"
                    style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                    Use the + above to add your first block
                </div>
            )}
        </div>
    );
}