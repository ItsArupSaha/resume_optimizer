import { Card } from "@/components/ui/card";

export const FeatureCard = ({
  icon,
  title,
  description,
  bgColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}) => (
  <Card className="p-8 bg-white/95 backdrop-blur-sm border border-blue-100/30 hover:border-blue-200/50 shadow-lg hover:shadow-xl transition-all h-full">
    <div
      className={`w-12 h-12 ${bgColor} rounded-lg mb-6 flex items-center justify-center`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);
