import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Hobby",
    price: "Free",
    features: ["3 apps per month", "Basic templates", "Community support", "1GB storage"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited apps", "Premium templates", "Priority support", "10GB storage", "Custom domains"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited everything",
      "Custom templates",
      "24/7 support",
      "Unlimited storage",
      "API access",
      "SLA",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sky-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8 bg-sky-500 hover:bg-sky-600">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};