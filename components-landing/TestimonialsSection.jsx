import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Hon. Justice Rajesh Sharma",
      role: "High Court Judge",
      image: "https://public.readdy.ai/ai/img_res/f818147745504f932a44f1a37807187b.jpg",
      quote: "NyayaSetu has transformed our judicial processes. The digital transformation has significantly improved case management efficiency and transparency."
    },
    {
      id: 2,
      name: "Priya Deshmukh",
      role: "Senior Court Registrar",
      image: "https://public.readdy.ai/ai/img_res/48d009116e4566153870574062cd1cb0.jpg",
      quote: "The e-filing system has revolutionized our court operations. We've seen remarkable improvements in processing times and public service delivery."
    },
    {
      id: 3,
      name: "Adv. Arjun Mehta",
      role: "Senior Advocate",
      image: "https://public.readdy.ai/ai/img_res/4ee788aa13da2b91d1001e05dab4b714.jpg",
      quote: "As an advocate, the digital access to case files and instant updates has greatly enhanced my practice efficiency and client service."
    }
  ];

  return (
    <div className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Trusted by Legal Professionals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what judges and court clerks have to say about their experience with
            our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;