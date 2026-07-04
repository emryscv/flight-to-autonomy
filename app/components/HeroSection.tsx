import { HudTitle } from "./HUDtitle";

export default function HeroSection() {
    return (
        <section className="bg-black text-primary-foreground border-b-2 border-accent px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-medium"
                    style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                    Emrys Cruz Viera // CAPSTONE PROJECT 2026
                </div>
                <HudTitle>
                    <span className="text-white text-4xl">Autonomous</span>
                    <br />
                    <span className="text-accent text-4xl">Drone Build</span>
                </HudTitle>
                <p className="mt-8 text-base max-w-xl leading-relaxed text-white/70"
                    style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400 }}>
                    A full documentation log of designing, assembling, and programming a 250mm-class
                    autonomous quadrotor for the Drone Club capstone. Every failure, fix, and flight recorded.
                </p>
            </div>
        </section>
    );
}