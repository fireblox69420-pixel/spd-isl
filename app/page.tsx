"use client";

import { useState } from "react";
import NavMenu from "@/components/ui/menu-hover-effects";
import { Hero } from "@/components/ui/animated-hero";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Page() {
  const [page, setPage] = useState("home");

  return (
    <main className="min-h-screen bg-black text-white pt-20">

      {/* NAVIGATION CONTROL */}
      <NavMenu onNavigate={setPage} />

      {/* HOME */}
      {page === "home" && (
        <>
          <BackgroundPaths />
          <Hero />
        </>
      )}

      {/* FIXTURES */}
      {page === "fixtures" && (
        <div className="p-10">
          <h1 className="text-4xl font-bold">FIXTURES</h1>
          <p className="text-gray-400 mt-2">Match schedule will appear here.</p>
        </div>
      )}

      {/* STANDINGS */}
      {page === "standings" && (
        <div className="p-10">
          <h1 className="text-4xl font-bold">LEAGUE TABLE</h1>
        </div>
      )}

      {/* TEAMS */}
      {page === "teams" && (
        <div className="p-10">
          <h1 className="text-4xl font-bold">TEAM ROSTERS</h1>
        </div>
      )}

      {/* STATS */}
      {page === "stats" && (
        <div className="p-10">
          <h1 className="text-4xl font-bold">PLAYER STATS</h1>
        </div>
      )}

      {/* LIVE */}
      {page === "live" && (
        <div className="p-10">
          <h1 className="text-4xl font-bold text-red-500">LIVE MATCH CENTER</h1>
        </div>
      )}

    </main>
  );
}