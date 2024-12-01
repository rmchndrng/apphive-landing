import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-violet-50 to-white py-16">
      <div className="absolute inset-0 w-full h-full bg-grid-black/[0.02] bg-grid-16" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-6 animate-float">
            Build Apps with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your ideas into fully functional applications in minutes with our AI-powered app generator. No coding required.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
              alt="AI App Generation"
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};