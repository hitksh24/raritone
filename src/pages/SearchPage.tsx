import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import ProductCard from '@/components/ProductCard'

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Luxury Silk Evening Dress',
    brand: 'Valentino',
    price: 2500,
    originalPrice: 3200,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    rating: 4.8,
    reviews: 124,
    category: 'Dresses',
    size: ['XS', 'S', 'M', 'L'],
    color: 'Black'
  },
  {
    id: '2',
    name: 'Designer Cashmere Coat',
    brand: 'Max Mara',
    price: 1800,
    originalPrice: 2400,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    rating: 4.9,
    reviews: 89,
    category: 'Outerwear',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Camel'
  },
  {
    id: '3',
    name: 'Premium Leather Handbag',
    brand: 'Hermès',
    price: 3500,
    originalPrice: 4200,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    rating: 4.7,
    reviews: 156,
    category: 'Accessories',
    size: ['One Size'],
    color: 'Brown'
  },
  {
    id: '4',
    name: 'Tailored Wool Blazer',
    brand: 'Giorgio Armani',
    price: 1200,
    originalPrice: 1600,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    rating: 4.6,
    reviews: 78,
    category: 'Blazers',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Navy'
  },
  {
    id: '5',
    name: 'Luxury Silk Scarf',
    brand: 'Gucci',
    price: 450,
    originalPrice: 600,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    rating: 4.5,
    reviews: 92,
    category: 'Accessories',
    size: ['One Size'],
    color: 'Multi'
  },
  {
    id: '6',
    name: 'Designer Cocktail Dress',
    brand: 'Versace',
    price: 2200,
    originalPrice: 2800,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    rating: 4.8,
    reviews: 134,
    category: 'Dresses',
    size: ['XS', 'S', 'M', 'L'],
    color: 'Red'
  }
]

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('relevance')
  const [showFilters, setShowFilters] = useState(false)
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])

  const categories = ['Dresses', 'Outerwear', 'Accessories', 'Blazers']
  const brands = ['Valentino', 'Max Mara', 'Hermès', 'Giorgio Armani', 'Gucci', 'Versace']

  useEffect(() => {
    const query = searchParams.get('q') || ''
    setSearchQuery(query)
    filterProducts(query)
  }, [searchParams])

  const filterProducts = (query: string) => {
    let filtered = mockProducts

    // Text search
    if (query) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      )
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      )
    }

    // Price filter
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        // Mock newest sort
        break
      default:
        // Relevance - keep original order
        break
    }

    setFilteredProducts(filtered)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams({ q: searchQuery })
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category)
    setSelectedCategories(newCategories)
    setTimeout(() => filterProducts(searchQuery), 0)
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked
      ? [...selectedBrands, brand]
      : selectedBrands.filter(b => b !== brand)
    setSelectedBrands(newBrands)
    setTimeout(() => filterProducts(searchQuery), 0)
  }

  useEffect(() => {
    filterProducts(searchQuery)
  }, [selectedCategories, selectedBrands, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Search Products'}
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center mb-6">
            <div className="relative flex-1 max-w-2xl">
              <Input
                type="text"
                placeholder="Search luxury fashion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-700 rounded-md px-4"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Results Info and Controls */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>
            
            <div className="flex items-center space-x-4">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => 
                          handleCategoryChange(category, checked as boolean)
                        }
                      />
                      <Label htmlFor={category} className="text-sm">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={(checked) => 
                          handleBrandChange(brand, checked as boolean)
                        }
                      />
                      <Label htmlFor={brand} className="text-sm">
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                      className="w-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage