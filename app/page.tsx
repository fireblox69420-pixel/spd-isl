"use client";

import { useState } from "react";
import { Hero } from "@/components/ui/animated-hero";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Page() {
  const [view, setView] = useState("home");

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <BackgroundPaths />
      </div>

      <div className="flex">

        {/* SIDEBAR */}
        <div className="w-64 h-screen fixed bg-black/70 backdrop-blur-xl border-r border-white/10 p-6">
          <h1 className="text-2xl font-black text-yellow-400 mb-10">
            SPD ISL
          </h1>

          <div className="space-y-2">
            {["home", "fixtures", "standings", "teams", "stats"].map((item) => (
              <button
                key={item}
                onClick={() => setView(item)}
                className={`block w-full text-left px-4 py-2 rounded-lg font-bold uppercase text-sm transition ${
                  view === item
                    ? "bg-yellow-400 text-black"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN */}
        <div className="ml-64 w-full p-10">

          {/* HOME */}
          {view === "home" && (
            <>
              <Hero />
            </>
          )}

          {/* FIXTURES */}
          {view === "fixtures" && (
            <Section title="Fixtures">
              <Table headers={["Time", "Home", "VS", "Away"]} rows={[
                ["18:00", "Bengaluru FC", "VS", "Mumbai City FC"],
              ]}/>
            </Section>
          )}

          {/* STANDINGS */}
          {view === "standings" && (
            <Section title="Standings">
              <Table headers={["Pos", "Club", "P", "W", "D", "L", "Pts"]} rows={[
                ["1", "Sporting Delhi", "0", "0", "0", "0", "0"],
              ]}/>
            </Section>
          )}

          {/* TEAMS */}
          {view === "teams" && (
            <Section title="Teams">
              <div className="grid grid-cols-2 gap-4">
                {["Bengaluru FC", "Mumbai City FC"].map((team) => (
                  <div
                    key={team}
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                  >
                    <h2 className="font-bold">{team}</h2>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* STATS */}
          {view === "stats" && (
            <Section title="Stats">
              <Table headers={["Player", "Club", "Goals", "Assists"]} rows={[
                ["Player 1", "SD", "0", "0"],
              ]}/>
            </Section>
          )}

        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE ================= */

function Section({ title, children }: any) {
  return (
    <div>
      <h1 className="text-5xl font-black mb-8">{title}</h1>
      {children}
    </div>
  );
}

function Table({ headers, rows }: any) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-black/50">
          <tr>
            {headers.map((h: string) => (
              <th key={h} className="p-3 text-left text-yellow-400 text-sm">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: string[], i: number) => (
            <tr key={i} className="border-t border-white/5">
              {row.map((cell, j) => (
                <td key={j} className="p-3 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}