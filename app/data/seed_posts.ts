import { Post } from "./types";

export const SEED_POSTS: Post[] = [
    {
        id: "3",
        date: "2026-06-28",
        title: "Frame Assembly: Carbon Fiber Arms Secured",
        body: `All four 220mm carbon fiber arms are now mounted to the central plate. Alignment was checked with a digital level — within 0.3° on all axes. Standoffs torqued to spec.\n\nThe 3K carbon fiber arms arrived with minor surface delamination on one edge — I filed it down and sealed with thin CA. No structural concern.\n\nThe central stack uses 30mm M3 nylon standoffs per the frame spec. Motor mounts are next. Waiting on the T-Motor 2306 motors which are in transit from the warehouse.`,
        tags: ["frame", "assembly", "mechanical"],
        readTime: 3,
    },
    {
        id: "2",
        date: "2026-06-21",
        title: "ESC Firmware Flash & Continuity Check",
        body: `Flashed all four BLHeli_32 ESCs to v32.9 using BLHeliSuite32 over a USB-UART adapter. Target firmware has bidirectional DSHOT enabled — required for RPM telemetry to the flight controller.\n\nOne ESC threw a "EEPROM write error" on first attempt. Power-cycled and reflashed — passed on second attempt. No hardware fault, likely a timing issue during initial enumeration.\n\nContinuity tested all four power leads with a Fluke 115 — no unexpected resistance or shorts. Signal leads routed along the inside of each arm and secured with 2.5mm zip ties at 3 points each.`,
        tags: ["electronics", "ESC", "firmware"],
        readTime: 4,
    },
    {
        id: "1",
        date: "2026-06-07",
        title: "Project Brief Approved — Scope Locked",
        body: `The capstone committee approved the autonomous quadrotor proposal with one revision: they asked for a quantified endurance target. Updated to 10 minutes at hover (4S, ~12A average draw). Achievable with a 4S 3000mAh LiPo with careful prop and motor selection.\n\nScope is locked:\n- Platform: 220–250mm racing frame converted to autonomous config\n- FC: ArduCopter on Matek H743\n- Autonomy: GPS waypoint + optical flow for indoor position hold\n- Deliverable: 3-waypoint autonomous flight demo + full documentation\n\nTimeline accepted as-is. Phase 2 procurement starts Monday.`,
        tags: ["planning", "scope", "committee"],
        readTime: 3,
    },
    {
        id: "3",
        date: "2026-06-28",
        title: "Frame Assembly: Carbon Fiber Arms Secured",
        body: `All four 220mm carbon fiber arms are now mounted to the central plate. Alignment was checked with a digital level — within 0.3° on all axes. Standoffs torqued to spec.\n\nThe 3K carbon fiber arms arrived with minor surface delamination on one edge — I filed it down and sealed with thin CA. No structural concern.\n\nThe central stack uses 30mm M3 nylon standoffs per the frame spec. Motor mounts are next. Waiting on the T-Motor 2306 motors which are in transit from the warehouse.`,
        tags: ["frame", "assembly", "mechanical"],
        readTime: 3,
    },
    {
        id: "3",
        date: "2026-06-28",
        title: "Frame Assembly: Carbon Fiber Arms Secured",
        body: `All four 220mm carbon fiber arms are now mounted to the central plate. Alignment was checked with a digital level — within 0.3° on all axes. Standoffs torqued to spec.\n\nThe 3K carbon fiber arms arrived with minor surface delamination on one edge — I filed it down and sealed with thin CA. No structural concern.\n\nThe central stack uses 30mm M3 nylon standoffs per the frame spec. Motor mounts are next. Waiting on the T-Motor 2306 motors which are in transit from the warehouse.`,
        tags: ["frame", "assembly", "mechanical"],
        readTime: 3,
    },
    {
        id: "3",
        date: "2026-06-28",
        title: "Frame Assembly: Carbon Fiber Arms Secured",
        body: `All four 220mm carbon fiber arms are now mounted to the central plate. Alignment was checked with a digital level — within 0.3° on all axes. Standoffs torqued to spec.\n\nThe 3K carbon fiber arms arrived with minor surface delamination on one edge — I filed it down and sealed with thin CA. No structural concern.\n\nThe central stack uses 30mm M3 nylon standoffs per the frame spec. Motor mounts are next. Waiting on the T-Motor 2306 motors which are in transit from the warehouse.`,
        tags: ["frame", "assembly", "mechanical"],
        readTime: 3,
    },
    {
        id: "3",
        date: "2026-06-28",
        title: "Frame Assembly: Carbon Fiber Arms Secured",
        body: `All four 220mm carbon fiber arms are now mounted to the central plate. Alignment was checked with a digital level — within 0.3° on all axes. Standoffs torqued to spec.\n\nThe 3K carbon fiber arms arrived with minor surface delamination on one edge — I filed it down and sealed with thin CA. No structural concern.\n\nThe central stack uses 30mm M3 nylon standoffs per the frame spec. Motor mounts are next. Waiting on the T-Motor 2306 motors which are in transit from the warehouse.`,
        tags: ["frame", "assembly", "mechanical"],
        readTime: 3,
    },
    {
        id: "3",
        date: "2026-06-28",
        title: "Frame Assembly: Carbon Fiber Arms Secured",
        body: `All four 220mm carbon fiber arms are now mounted to the central plate. Alignment was checked with a digital level — within 0.3° on all axes. Standoffs torqued to spec.\n\nThe 3K carbon fiber arms arrived with minor surface delamination on one edge — I filed it down and sealed with thin CA. No structural concern.\n\nThe central stack uses 30mm M3 nylon standoffs per the frame spec. Motor mounts are next. Waiting on the T-Motor 2306 motors which are in transit from the warehouse.`,
        tags: ["frame", "assembly", "mechanical"],
        readTime: 3,
    }
];