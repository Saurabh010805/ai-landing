export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
      <div className="max-w-2xl mx-auto space-y-4 text-left">
        <div>
          <h3 className="font-semibold">Q: How do I customize this template?</h3>
          <p className="text-gray-700">A: You can edit components inside the components folder. All styles are Tailwind CSS classes.</p>
        </div>
        <div>
          <h3 className="font-semibold">Q: Is this template responsive?</h3>
          <p className="text-gray-700">A: Yes, the template is fully responsive for mobile, tablet, and desktop.</p>
        </div>
      </div>
    </section>
  )
}
