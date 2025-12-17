"use client";

const testimonials = [
  {
    name: "James Carter",
    role: "Electrical Engineering, Georgia Tech",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Lucen made career fairs so much easier. I walked in knowing exactly what to say — recruiters actually remembered me.",
  },
  {
    name: "Sophia Martinez",
    role: "Mechanical Engineering, Stanford",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The weekly briefs helped me understand companies way deeper than job descriptions. I got two interviews just from using the talking points.",
  },
  {
    name: "David Reynolds",
    role: "Industrial Engineering, Texas A&M",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    quote: "Before Lucen, every company looked the same. Now I know how they make money, what tech they use, and what projects matter to my major.",
  },
  {
    name: "Emily Wong",
    role: "Chemical Engineering, University of Chicago",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "I used Lucen to prep for my interview with Siemens Energy — I literally answered questions using insights from the newsletter.",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 mb-6">
            Testimonials
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
            Why Students Love Lucen
          </h2>
          
          <p className="text-gray-400 text-lg">
            Real students. Real interviews. Real results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              {/* Subtle Purple Gradient Glow at Bottom Right */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-600/20 transition-all duration-500" />
              
              <div className="relative z-10 space-y-6">
                {/* Stars */}
                <div className="flex gap-1 text-white">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border border-white/10 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
