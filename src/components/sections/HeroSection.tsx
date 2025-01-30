import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Wand2 } from "lucide-react";
import Link from "next/link";

export const HeroSection = ({ id }: { id?: string }) => (
  <section
    id={id}
    className="bg-gradient-to-b from-blue-50 to-white py-24 px-4"
  >
    <div className="container max-w-6xl mx-auto text-center">
      <Badge
        variant="outline"
        className="mb-6 bg-background px-6 py-2 border-blue-200 shadow-sm"
      >
        <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
        AI-Powered Resume Optimization
      </Badge>

      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
        Beat the{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ATS
        </span>
        ,<br />
        Land Your Dream Job
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Get instant ATS feedback and AI-powered resume optimization to stand out
        in today&apos;s competitive job market.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        >
          <Link href="/analyze">
            <Wand2 className="w-5 h-5" />
            Check ATS Score - Free
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="gap-2 border-2" asChild>
          <Link href="/pricing">
            <Star className="w-5 h-5 text-yellow-500" />
            Go Premium
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
