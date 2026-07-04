import { HudTitle } from "./HUDtitle";

export default function HeroSection() {
    return (
        <section className="bg-black text-primary-foreground border-b-2 border-accent px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-medium"
                    style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                    DRONE CLUB // CAPSTONE PROJECT 2026
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
                {/* <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="border border-white/20 rounded-md p-4 bg-white/5">
              <Icon className="w-4 h-4 text-accent mb-2" />
              <div className="font-mono text-2xl font-bold text-white">{value}</div>
              <div className="text-xs uppercase tracking-wide text-white/50 mt-1"
                style={{ fontFamily: "'Saira Condensed', sans-serif" }}>
                {label}
              </div>
            </div>
          ))}
        </div> */}
            </div>
        </section>
    );
}