import CoreTracks from "@/components/widgetsORsections/CoreTracks"
import Footer from "@/components/widgetsORsections/Footer"
import Hero from "@/components/widgetsORsections/Hero"
import ProgramOutcome from "@/components/widgetsORsections/ProgramOutcome"
import SpecializedTracks from "@/components/widgetsORsections/SpecializedTracks"

export default function Page() {
  return (
    <>
      <main>
        {/* Hero Section*/}
        <Hero />
        {/* Core Track Section */}
        <CoreTracks />
        {/* Specialized Tracks */}
        <SpecializedTracks />
        {/* Program Outcome Section */}
        <ProgramOutcome />
        {/* Footer */}
        <Footer />
      </main>
    </>

  )
}