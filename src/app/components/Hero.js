export default function Hero() {
    return (
        <section className=" text-center px-10 ">
        <video autoPlay muted playsInline>
          <source src="/NikeVideo/NikeVideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <h1 className="text-5xl font-extrabold mb-4 mt-4">WIN ON AIR</h1>
        <p className="text-sm mb-8 font-light">Meet the next generation of Nike Air. Engineered to the exact specifications of championship athletes.
</p>
        <button className="bg-black text-white px-5 py-1 rounded-full hover:bg-gray-500">Shop Air</button>
      </section>
      
    );
  }
  