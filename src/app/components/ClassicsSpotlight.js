import Image from "next/image";

const sneakers = [
  {
    name: "DUNK",
    image: "/NikeImg/two.jpg",
  },
  {
    name: "AIR JORDAN 1",
    image: "/NikeImg/one.jpg",
  },

  {
    name: "BLAZER",
    image: "/NikeImg/three.jpg",
  },
  {
    name: "AIR FORCE 1",
    image: "/NikeImg/four.jpg",
  },
];

const ClassicsSpotlight = () => {
  return (
    <div className=" py-10 px-10">
      <h2 className="text-3xl font-bold mb-8">Classics Spotlight</h2>
      <div className="flex space-x-8 w-[100vw] overflow-y-scroll mx-2">
        {sneakers.map((sneaker, index) => (
          <div key={index} className="text-center min-w-[400px]">
            <Image
              src={sneaker.image}
              alt={sneaker.name}
              width={600}
              height={600}
              className=""
            />
            {/* <p className="text-xl font-semibold mt-4">{sneaker.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicsSpotlight;
