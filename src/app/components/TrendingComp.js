
import Image from 'next/image'

export default function TrendingComp(props) {
  console.log(props);
  return (
    <main className=' relative w-full'>
        <Image
              src={props.img}
              alt='img'
              width={550}
              height={750}
              className={`min-w-[${props.w}]`}
            />
        <section className=' absolute bottom-10 text-xl left-5 text-white'>
            <h1 className='font-bold'>{props.Heading}</h1>
            <p className='py-5'>{props.content}</p>
            <button className='px-2  bg-white text-black rounded-full hover:text-white hover:bg-black' >{props.btn}</button>
        </section>
    </main>
  )
}
