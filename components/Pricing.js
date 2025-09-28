export default function Pricing() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Pricing</h2>
      <div className="flex justify-center gap-6">
        <div className="border p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Standard</h3>
          <p className="text-2xl font-bold mb-4">₹1,999</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
        </div>
      </div>
    </section>
  )
}
