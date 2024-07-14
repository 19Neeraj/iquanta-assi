import Image from "next/image";

const sneakers = [
  {
    name: "Nike Pegasus 41",
    image: "/assets/asset 0.jpeg",
  },
  {
    name: "Nike G.T. Hustle 3",
    image: "/assets/asset 1.jpeg",
  },
  {
    name: "Nike Alphafly 3",
    image: "/assets/asset 2.jpeg",
  },
  {
    name: "Nike Mercurial Superfly",
    image: "/assets/asset 3.jpeg",
  },
  {
    name: "Nike Pegasus EasyOn",
    image: "/assets/asset 4.jpeg",
  },
  {
    name: "Nike Mercurial Vapor",
    image: "/assets/asset 5.png",
  }
];

const ShopAir = () => {
  return (
    <div className=" py-10 px-10 w-[100vw]">
      <h2 className="text-3xl font-medium mb-8">Shop Air</h2>
      <div className="flex  space-x-8  overflow-x-scroll">
        {sneakers.map((sneaker, index) => (
          <div key={index} className="text-center min-w-[450px] pb-5">
            <Image
              src={sneaker.image}
              alt={sneaker.name}
              width={450}
              height={450}
              className=""
            />
            <p className="text-2xl  text-left  mt-4">{sneaker.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopAir
