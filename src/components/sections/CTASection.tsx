import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export const CTASection = ({ id }: { id?: string }) => (
  <section className="py-24 px-4 relative overflow-hidden">
    {/* Intense gradient background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f620_0%,_#9333ea20_50%,_transparent_70%)] opacity-50 animate-gradient-pan"></div>

    {/* Dynamic grid pattern */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 animate-grid-pan"></div>

    {/* Subtle overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-purple-50/30"></div>

    <div
      id={id}
      className="container max-w-4xl mx-auto text-center relative z-10"
    >
      <h2 className="text-3xl font-bold mb-6 text-foreground">
        Ready to Transform Your Resume?
      </h2>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
        Join thousands of job seekers who landed interviews with our AI-powered
        tools
      </p>
      <Button
        size="lg"
        className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        asChild
      >
        <Link href="/analyze">
          <Sparkles className="w-5 h-5" />
          Start Free Analysis
        </Link>
      </Button>
    </div>
  </section>
);
