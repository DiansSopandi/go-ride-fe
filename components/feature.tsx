import { Clock, ShieldCheck, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Smartphone />,
    title: "Lightweight App",
    description: "Fast, lightweight, and user-friendly for all users.",
  },
  {
    icon: <Clock />,
    title: "Fast Response",
    description: "Instant and responsive service for your needs.",
  },
  {
    icon: <ShieldCheck />,
    title: "Secure Payment",
    description: "Your payment is safe and secure with our secure payment system.",
  },
]
export default function Features() {
    return (
      <section id="features" className="py-16 bg-green-50 px-4 dark:bg-muted">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h3 className="text-3xl font-bold text-green-700">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="zoom-in" data-aos-delay={1 * 100}>
            {
              features.map((feature) => (
                <div key={feature.title} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                  {feature.icon}
                  <h4 className="mt-4 font-semibold text-sm text-green-600">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
  