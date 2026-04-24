import NavMenu from "@/components/ui/menu-hover-effects";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">

      {/* NAVBAR */}
      <NavMenu />

      {/* HERO SECTION */}
      <div className="pt-20">
        <BackgroundPaths  />
      </div>

      {/* OPTIONAL CONTENT BELOW HERO */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-6 text-black">
          Tournament Overview
        </h2>

        <p className="text-gray-600 leading-relaxed">
          SPD ISL is a structured 5-a-side competitive circuit featuring
          round-robin fixtures, knockout stages, and live standings updates.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">20 Matches</h3>
            <p className="text-sm text-gray-500">
              Full season structured league format
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Live Standings</h3>
            <p className="text-sm text-gray-500">
              Points update dynamically via Firebase (next step)
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Teams</h3>
            <p className="text-sm text-gray-500">
              5 professional youth squads competing
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}