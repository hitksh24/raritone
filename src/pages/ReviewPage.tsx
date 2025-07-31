import React, { useState } from 'react'
import { Star, ThumbsUp, ThumbsDown, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

// Mock review data
const mockReviews = [
  {
    id: '1',
    productName: 'Luxury Silk Evening Dress',
    productImage: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 5,
    title: 'Absolutely stunning dress!',
    content: 'This dress exceeded all my expectations. The silk quality is exceptional, and the fit is perfect. I received so many compliments at the gala. Worth every penny!',
    date: '2024-01-15',
    verified: true,
    helpful: 24,
    size: 'M',
    color: 'Black'
  },
  {
    id: '2',
    productName: 'Designer Cashmere Coat',
    productImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    userName: 'Emily Chen',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 4,
    title: 'Beautiful coat, runs slightly large',
    content: 'The cashmere is incredibly soft and the design is elegant. However, it runs a bit large, so I would recommend sizing down. The customer service was excellent when I needed to exchange.',
    date: '2024-01-12',
    verified: true,
    helpful: 18,
    size: 'L',
    color: 'Camel'
  },
  {
    id: '3',
    productName: 'Premium Leather Handbag',
    productImage: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    userName: 'Maria Rodriguez',
    userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    rating: 5,
    title: 'Investment piece that\'s worth it',
    content: 'This handbag is a true investment. The leather quality is outstanding, and the craftsmanship is impeccable. It goes with everything and has become my go-to bag.',
    date: '2024-01-10',
    verified: true,
    helpful: 31,
    size: 'One Size',
    color: 'Brown'
  },
  {
    id: '4',
    productName: 'Tailored Wool Blazer',
    productImage: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    userName: 'Jessica Williams',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 4,
    title: 'Professional and stylish',
    content: 'Perfect for the office and business meetings. The tailoring is excellent and the wool feels premium. The only minor issue is that the sleeves are a bit long for my arms.',
    date: '2024-01-08',
    verified: true,
    helpful: 15,
    size: 'S',
    color: 'Navy'
  },
  {
    id: '5',
    productName: 'Luxury Silk Scarf',
    productImage: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    userName: 'Anna Thompson',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 5,
    title: 'Gorgeous colors and quality',
    content: 'The silk is so smooth and the print is vibrant. It adds the perfect touch to any outfit. I\'ve already ordered two more in different patterns!',
    date: '2024-01-05',
    verified: true,
    helpful: 22,
    size: 'One Size',
    color: 'Multi'
  },
  {
    id: '6',
    productName: 'Designer Cocktail Dress',
    productImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    userName: 'Lisa Park',
    userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    rating: 3,
    title: 'Beautiful but expensive',
    content: 'The dress is undeniably beautiful and well-made, but I feel it\'s overpriced for what you get. The fabric is nice but not exceptional for the price point.',
    date: '2024-01-03',
    verified: true,
    helpful: 8,
    size: 'M',
    color: 'Red'
  }
]

const ReviewPage = () => {
  const [reviews, setReviews] = useState(mockReviews)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [filterRating, setFilterRating] = useState('all')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Filter reviews based on search query
    const filtered = mockReviews.filter(review =>
      review.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.userName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setReviews(filtered)
  }

  const handleSort = (value: string) => {
    setSortBy(value)
    let sorted = [...reviews]
    
    switch (value) {
      case 'newest':
        sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case 'oldest':
        sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case 'highest':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'lowest':
        sorted.sort((a, b) => a.rating - b.rating)
        break
      case 'helpful':
        sorted.sort((a, b) => b.helpful - a.helpful)
        break
    }
    
    setReviews(sorted)
  }

  const handleRatingFilter = (value: string) => {
    setFilterRating(value)
    if (value === 'all') {
      setReviews(mockReviews)
    } else {
      const rating = parseInt(value)
      const filtered = mockReviews.filter(review => review.rating === rating)
      setReviews(filtered)
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-gray-600 mb-6">
            Read authentic reviews from our luxury fashion customers
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search reviews..."
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

            {/* Sort */}
            <Select value={sortBy} onValueChange={handleSort}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highest">Highest Rating</SelectItem>
                <SelectItem value="lowest">Lowest Rating</SelectItem>
                <SelectItem value="helpful">Most Helpful</SelectItem>
              </SelectContent>
            </Select>

            {/* Rating Filter */}
            <Select value={filterRating} onValueChange={handleRatingFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Info */}
          <p className="text-gray-600">
            Showing {reviews.length} reviews
          </p>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            reviews.map((review) => (
              <Card key={review.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={review.userAvatar} alt={review.userName} />
                        <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{review.userName}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">
                            {formatDate(review.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      src={review.productImage}
                      alt={review.productName}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">{review.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Product: {review.productName}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <span>Size: {review.size}</span>
                      <span>Color: {review.color}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Helpful ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        Not Helpful
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ReviewPage