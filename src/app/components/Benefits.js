import React from 'react'
import TrendingComp from './TrendingComp'

export default function Benefits() {
  return (
    <main className='px-10 flex flex-col mx-auto'>
      <h2 className="text-3xl font-medium mb-8">Trending</h2>
      <div className='flex gap-5 w-[98vw] overflow-x-scroll '>
      <TrendingComp img='/assets/asset17.jpeg' Heading="Nike Alate Bra" content="Looks Smooth, Feels Smoother" btn="Shop Now" w='300px'></TrendingComp>
      <TrendingComp img='/assets/asset18.png' Heading="Nike Alate Bra" content="Looks Smooth, Feels Smoother" btn="Shop Now" w='300px'></TrendingComp>
      <TrendingComp img='/assets/asset 19.jpeg' Heading="Nike Alate Bra" content="Looks Smooth, Feels Smoother" btn="Shop Now" w='300px'></TrendingComp>
      <TrendingComp img='/assets/asset 20.jpeg' Heading="Nike Alate Bra" content="Looks Smooth, Feels Smoother" btn="Shop Now" w='300px'></TrendingComp>

      </div>
    </main>
  )
}
