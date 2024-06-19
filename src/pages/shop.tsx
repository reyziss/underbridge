import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import { useEffect, useState } from 'react'
import ClothingItem, { TClothingItem } from '@/widgets/home/ClothingItem'
import SearchBar from '@/widgets/home/SearchBar'
import useSearchItems from '@/widgets/home/useSearchItems'
import { useSearchParams } from 'react-router-dom'

import SizeFilter from '@/widgets/home/SizeFilter' // Импортируем компонент Filter
import BrandFilter from '@/widgets/home/BrandFilter'

export default function Shop() {
  const { filteredClothingData, searchItems } = useSearchItems()
  const [filteredProducts, setFilteredProducts] = useState<TClothingItem[]>([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const searchQuery = searchParams.get('search')
    const size = searchParams.get('size')
    const brand = searchParams.get('brand')
    searchItems(searchQuery ?? '', size || undefined)
    // searchItems(searchQuery ?? '', brand || undefined)
  }, [searchParams])

  const handleSearch = (query: string) => {
    searchItems(query)
  }

  return (
    <div className="flex-1 container w-2/3 grid grid-cols-[1fr_3fr] gap-4 mt-24">
      <div>
        <SizeFilter />
        <BrandFilter />
      </div>
      <div className="grid grid-cols-4 gap-6 auto-rows-max">
        {filteredClothingData.map((item) => (
          <ClothingItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
