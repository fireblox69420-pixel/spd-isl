"use client";

import NavMenu from "@/components/ui/menu-hover-effects";
import { Hero } from "@/components/ui/animated-hero";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden">

      {/* Background FX */}
      <BackgroundPaths />

      {/* Navbar */}
      <NavMenu />

      {/* HERO */}
      <Hero />

      {/* ================= FIXTURES ================= */}
      <section
        id="fixtures"
        className="min-h-screen px-6 py-20 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">
          Match Fixtures
        </h2>

        <div className="w-full max-w-3xl space-y-4">
          {[
            ["Sporting Delhi", "Bengaluru FC"],
            ["Mumbai City FC", "Chennaiyin FC"],
            ["Hyderabad FC", "Sporting Delhi"],
          ].map((match, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center hover:bg-white/10 transition"
            >
              <span>{match[0]}</span>
              <span className="text-yellow-400 font-bold">VS</span>
              <span>{match[1]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STANDINGS ================= */}
      <section
        id="standings"
        className="min-h-screen px-6 py-20 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">
          Points Table
        </h2>

        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full border border-white/10">
            <thead>
              <tr className="bg-white/10 text-left">
                <th className="p-3">Team</th>
                <th className="p-3">P</th>
                <th className="p-3">W</th>
                <th className="p-3">L</th>
                <th className="p-3">Pts</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SD", 0, 0, 0, 0],
                ["BFC", 0, 0, 0, 0],
                ["HFC", 0, 0, 0, 0],
                ["MCFC", 0, 0, 0, 0],
                ["CFC", 0, 0, 0, 0],
              ].map((team, i) => (
                <tr
                  key={i}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="p-3">{team[0]}</td>
                  <td className="p-3">{team[1]}</td>
                  <td className="p-3">{team[2]}</td>
                  <td className="p-3">{team[3]}</td>
                  <td className="p-3 text-yellow-400 font-bold">
                    {team[4]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= TEAMS ================= */}
      <section
        id="teams"
        className="min-h-screen px-6 py-20 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">
          Teams
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["SD", "BFC", "HFC", "MCFC", "CFC"].map((team) => (
            <div
              key={team}
              className="bg-white/5 p-6 rounded-xl text-center border border-white/10 hover:scale-105 transition"
            >
              <div className="text-2xl font-bold">{team}</div>
              <p className="text-gray-400 mt-2">Team Squad</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section
        id="stats"
        className="min-h-screen px-6 py-20 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">
          Top Scorers
        </h2>

        <div className="w-full max-w-2xl space-y-3">
          {[
            ["Player 1", "SD", 3],
            ["Player 2", "BFC", 2],
          ].map((p, i) => (
            <div
              key={i}
              className="flex justify-between bg-white/5 p-4 rounded-xl border border-white/10"
            >
              <span>{p[0]}</span>
              <span>{p[1]}</span>
              <span className="text-yellow-400 font-bold">{p[2]}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}