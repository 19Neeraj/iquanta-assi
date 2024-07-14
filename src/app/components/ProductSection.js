export default function ProductSection() {
    return (
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Product Card */}
          <div className="bg-white shadow p-4">
            <img src="/NikeImg/NikeShoes.png" alt="Nike Shoe" className="w-full h-64 object-cover" />
            <h3 className="text-xl font-bold mt-4">Nike Pegasus 41</h3>
            <p className="text-gray-700">The ultimate running shoe.</p>
            <button className="bg-black text-white px-4 py-2 mt-4">Shop Now</button>
          </div>
          {/* Repeat for more products */}
        </div>
      </section>
    );
  }
  