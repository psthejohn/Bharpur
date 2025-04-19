export default function Contact() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form
        action="https://formspree.io/f/your-id-here"
        method="POST"
        className="space-y-4 max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
