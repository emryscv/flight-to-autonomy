"use client";
import { useState } from "react";
import { Lock } from "lucide-react";
const ADMIN_PASSWORD = "droneclub";

export default function AdminGate({ onUnlock }: { onUnlock: () => void }) {
    const [pw, setPw] = useState("");
    const [error, setError] = useState(false);

    function attempt() {
        if (pw === ADMIN_PASSWORD) {
            onUnlock();
        } else {
            setError(true);
            setPw("");
            setTimeout(() => setError(false), 2000);
        }
    }

    return (
        <div className="max-w-sm mx-auto px-6 py-24">
            <div className="border-2 border-accent rounded-md p-8 bg-card">
                <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-5 h-5 text-accent" />
                    <span
                        className="text-sm font-bold uppercase tracking-widest text-accent"
                        style={{ fontFamily: "'Orbitron', monospace" }}>
                        Admin Access
                    </span>
                </div>
                <input
                    type="password"
                    value={pw}
                    onChange={e => setPw(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && attempt()}
                    placeholder="ENTER PASSWORD"
                    className={`w-full bg-input-background border rounded-md px-4 py-3 text-sm font-mono tracking-widest outline-none
             focus:ring-2 focus:ring-accent focus:border-accent transition-colors
             ${error ? "border-destructive" : "border-border"}`}
                    style={{ fontFamily: "'Saira Condensed', sans-serif" }}
                    autoFocus
                />
                {error && (
                    <p className="text-destructive text-xs mt-2 uppercase tracking-wide"
                        style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                        Access denied
                    </p>
                )}
                <button
                    onClick={attempt}
                    className="mt-4 w-full bg-primary text-primary-foreground py-2.5 rounded-md text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-black transition-colors"
                    style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                    Authenticate
                </button>
            </div>
        </div>
    );
}


