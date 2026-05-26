export default function Website() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white py-20 px-6 text-center">
        <h1 className="text-6xl font-bold mb-4">RS Digital Promotion</h1>
        <p className="text-2xl max-w-3xl mx-auto">
          Professional Digital Marketing & Online Business Promotion Services
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/918739853696"
            className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition"
          >
            WhatsApp Support
          </a>

          <a
            href="tel:8739853696"
            className="bg-black text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition"
          >
            Call Helpline
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
          alt="Digital Marketing"
          className="rounded-3xl shadow-2xl"
        />

        <div>
          <h2 className="text-5xl font-bold mb-6">Grow Your Business Online</h2>
          <p className="text-lg leading-8 text-gray-600">
            We help businesses improve their online visibility through professional advertisement campaigns, targeted audience marketing, social media promotion and digital growth support.
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow">
              ✔ Facebook & Instagram Ads
            </div>
            <div className="bg-white p-4 rounded-2xl shadow">
              ✔ WhatsApp Promotion Support
            </div>
            <div className="bg-white p-4 rounded-2xl shadow">
              ✔ Lead Generation Campaigns
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                alt="Ads"
                className="rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Meta Ads Management</h3>
              <p>
                Professional Facebook and Instagram ad campaign setup with targeted audience optimization.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Promotion"
                className="rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Business Promotion</h3>
              <p>
                Improve your business visibility through social media and online promotional activities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                alt="Leads"
                className="rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Lead Generation</h3>
              <p>
                Reach targeted customers and receive enquiries through professionally managed campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
            alt="Owner"
            className="w-40 h-40 rounded-full mx-auto object-cover shadow-2xl"
          />

          <h2 className="text-4xl font-bold mt-8">Founder & Support Team</h2>

          <p className="text-lg text-gray-600 mt-6 leading-8">
            Our mission is to help businesses improve their digital presence and online visibility through smart advertising and professional promotion support.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Client Reviews</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <p className="text-lg leading-7">
                “Professional support and smooth communication. Our business visibility improved online.”
              </p>
              <h4 className="font-bold mt-6">— Local Gym Owner</h4>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <p className="text-lg leading-7">
                “Very helpful advertisement support team. Easy process and regular updates.”
              </p>
              <h4 className="font-bold mt-6">— Salon Business</h4>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <p className="text-lg leading-7">
                “Good experience with online promotion and customer reach campaigns.”
              </p>
              <h4 className="font-bold mt-6">— Restaurant Owner</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">Contact & Support</h2>

        <div className="space-y-4 text-xl">
          <p>📞 Helpline: 8739853696</p>
          <p>📧 Email: rohansolanki0001rs@gmail.com</p>
          <p>🌐 Online Digital Marketing Support</p>
        </div>

        <a
          href="https://wa.me/918739853696"
          className="inline-block mt-10 bg-green-500 px-10 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        © 2026 RS Digital Promotion | All Rights Reserved
      </footer>
    </div>
  );
}
