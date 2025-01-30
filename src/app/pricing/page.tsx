import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, CheckCircle2, Clock, Star, Zap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - ResumeOptimizer",
  description:
    "Flexible pricing plans for every career stage. Choose the best plan for your job search needs.",
};

export default function PricingPage() {
  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Flexible Pricing for Every Need
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Maximize your job search success with plans tailored to your career
            stage
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Short-Term Plan */}
          <Card className="p-8 text-center relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-blue-100"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              Short-Term
            </h3>
            <div className="text-4xl font-bold mb-2">$8</div>
            <p className="text-muted-foreground mb-6">2 Months Access</p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm font-medium">Best For:</p>
              <p className="text-sm text-muted-foreground">
                Students, Freelancers, Single Job Hunt
              </p>
            </div>
            <Button asChild className="w-full mb-6">
              <Link href="/sign-up">Start 7-Day Trial</Link>
            </Button>
            <FeatureList
              features={[
                "Basic ATS Score",
                "3 Resume Analyses",
                "General Feedback",
                "PDF Report",
                "Email Support",
              ]}
            />
          </Card>

          {/* Mid-Term Plan (Popular) */}
          <Card className="p-8 text-center border-2 border-blue-500 relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500"></div>
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              <Star className="inline w-4 h-4 mr-1" />
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <BadgeCheck className="w-6 h-6 text-blue-600" />
              Mid-Term
            </h3>
            <div className="text-4xl font-bold mb-2">$30</div>
            <p className="text-muted-foreground mb-6">2 Years Access</p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm font-medium">Best For:</p>
              <p className="text-sm text-muted-foreground">
                Mid-Career Professionals
              </p>
            </div>
            <Button
              asChild
              className="w-full mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              <Link href="/sign-up">Start 14-Day Trial</Link>
            </Button>
            <FeatureList
              features={[
                "Full ATS Breakdown",
                "Unlimited Analyses",
                "AI Optimization",
                "Job Match Insights",
                "Priority Support",
                "Customizable Templates",
              ]}
            />
          </Card>

          {/* Lifetime Access */}
          <Card className="p-8 text-center relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-purple-100"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-purple-600" />
              Lifetime
            </h3>
            <div className="text-4xl font-bold mb-2">$60</div>
            <p className="text-muted-foreground mb-6">Forever Access</p>
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <p className="text-sm font-medium">Best For:</p>
              <p className="text-sm text-muted-foreground">
                Power Users, Budget-Conscious
              </p>
            </div>
            <Button asChild variant="outline" className="w-full mb-6">
              <Link href="/sign-up">One-Time Payment</Link>
            </Button>
            <FeatureList
              features={[
                "All Mid-Term Features",
                "Future Updates Included",
                "Team Management",
                "Dedicated Support",
                "Advanced Analytics",
                "SSO Integration",
              ]}
            />
          </Card>
        </div>

        {/* Feature Comparison Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-6">Key Features</th>
                <th className="p-6">Free</th>
                <th className="p-6">Short-Term</th>
                <th className="p-6">Mid-Term</th>
                <th className="p-6">Lifetime</th>
              </tr>
            </thead>
            <tbody>
              <FeatureRow label="ATS Score" tiers={[true, true, true, true]} />
              <FeatureRow
                label="AI Optimization"
                tiers={[false, true, true, true]}
              />
              <FeatureRow
                label="Unlimited Analyses"
                tiers={[false, false, true, true]}
              />
              <FeatureRow
                label="Priority Support"
                tiers={[false, false, true, true]}
              />
              <FeatureRow
                label="Custom Templates"
                tiers={[false, false, true, true]}
              />
              <FeatureRow
                label="Team Access"
                tiers={[false, false, false, true]}
              />
            </tbody>
          </table>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 bg-green-50 p-8 rounded-lg text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <BadgeCheck className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold">7-Day Money Back Guarantee</h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re confident you&apos;ll love our service. If not, get a
            full refund within 7 days - no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}

const FeatureList = ({ features }: { features: string[] }) => (
  <ul className="space-y-4 text-left">
    {features.map((feature) => (
      <li key={feature} className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-green-500" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

const FeatureRow = ({ label, tiers }: { label: string; tiers: boolean[] }) => (
  <tr className="border-t">
    <td className="p-6 font-medium">{label}</td>
    {tiers.map((available, index) => (
      <td key={index} className="p-6 text-center">
        {available ? (
          <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
        ) : (
          <span className="text-muted-foreground">-</span>
        )}
      </td>
    ))}
  </tr>
);
