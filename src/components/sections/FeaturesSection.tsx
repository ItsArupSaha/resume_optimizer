import { DownloadCloud, Sparkles, Wand2 } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = ({ id }: { id?: string }) => (
  <section id={id} className="py-24 px-4 relative overflow-hidden">
    {/* Intense gradient background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f620_0%,_#9333ea20_50%,_transparent_70%)] opacity-50 animate-gradient-pan"></div>

    {/* Dynamic grid pattern */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 animate-grid-pan"></div>

    {/* Subtle overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-purple-50/30"></div>

    <div className="container max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Sparkles className="w-6 h-6 text-blue-600" />}
          title="Instant ATS Analysis"
          description="Get your resume score in seconds with detailed feedback on keyword optimization and formatting."
          bgColor="bg-blue-100"
        />
        <FeatureCard
          icon={<Wand2 className="w-6 h-6 text-purple-600" />}
          title="AI Optimization"
          description="Premium users get smart rewriting suggestions tailored to your target job description."
          bgColor="bg-purple-100"
        />
        <FeatureCard
          icon={<DownloadCloud className="w-6 h-6 text-green-600" />}
          title="Professional Export"
          description="Download polished resumes in PDF/DOCX with perfect formatting for any application system."
          bgColor="bg-green-100"
        />
      </div>
    </div>
  </section>
);
