export default function Featured() {
    return (
        <section className=" text-center px-10 ">
      <h2 className="text-3xl font-medium mb-8 text-left"> Featured</h2>

        <video autoPlay muted playsInline>
          <source src="/NikeVideo/Video2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <h1 className="text-5xl font-extrabold mb-4 mt-4">OUR TURN</h1>
        <p className="text-sm mb-8 font-light">We're not waiting on history. We're making it.
</p>
        <button className="bg-black text-white px-5 py-1 rounded-full hover:bg-gray-500">Let's Go</button>
      </section>
      
    );
  }
  