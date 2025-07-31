import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Details</h1>
        <p className="text-gray-600 mt-2">Product ID: {id}</p>
        <p className="text-gray-600 mt-4">Product page coming soon...</p>
      </div>
    </div>
  )
}

export default ProductPage