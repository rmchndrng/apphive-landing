import { Zap, Code, Puzzle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-sky-500" />,
    title: "Lightning Fast",
    description: "Generate complete applications in minutes, not hours or days.",
  },
  {
    icon: <Code className="h-10 w-10 text-sky-500" />,
    title: "Clean Code",
    description: "Production-ready code that follows best practices and patterns.",
  },
  {
    icon: <Puzzle className="h-10 w-10 text-sky-500" />,
    title: "Customizable",
    description: "Easily modify and extend your generated applications.",
  },
  {
    icon: <Shield className="h-10 w-10 text-sky-500" />,
    title: "Secure",
    description: "Built-in security features and best practices.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-sky-500/50 transition-colors">
              <CardContent className="pt-6">
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};