import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Shield, Truck, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ProductCard from '@/components/ProductCard'

// Mock featured products
const featuredProducts = [
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
  }
]

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Luxury Fashion
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Redefined by AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience perfect-fit luxury fashion with our advanced AI body scanning technology. 
              Discover curated designer pieces that complement your unique style and measurements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                Start AI Fitting
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/search">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Browse Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose THE RARITONE?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with luxury fashion to deliver 
              an unparalleled shopping experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Body Scanning</h3>
                <p className="text-gray-600">
                  Advanced computer vision technology ensures perfect fit recommendations 
                  based on your unique measurements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Luxury</h3>
                <p className="text-gray-600">
                  Curated collection of genuine designer pieces from the world's 
                  most prestigious fashion houses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Service</h3>
                <p className="text-gray-600">
                  White-glove delivery, expert styling consultations, and 
                  hassle-free returns for your peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Collection</h2>
              <p className="text-gray-600">Handpicked luxury pieces for the discerning fashionista</p>
            </div>
            <Link to="/search">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their 
              wardrobe with THE RARITONE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Executive",
                content: "The AI fitting technology is revolutionary. I finally found luxury pieces that fit perfectly without the hassle of returns.",
                rating: 5
              },
              {
                name: "Emily Chen",
                role: "Entrepreneur",
                content: "THE RARITONE has completely changed how I shop for luxury fashion. The quality and service are unmatched.",
                rating: 5
              },
              {
                name: "Maria Rodriguez",
                role: "Style Consultant",
                content: "As a professional stylist, I recommend THE RARITONE to all my clients. The curation is exceptional.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join THE RARITONE today and experience luxury fashion like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3">
              Start Your Journey
            </Button>
            <Link to="/reviews">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3">
                Read Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage