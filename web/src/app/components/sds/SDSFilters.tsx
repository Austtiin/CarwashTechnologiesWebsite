'use client';

import React from 'react';
import { Manufacturer } from '@/app/types/sds';

interface SDSFiltersProps {
  manufacturers: Manufacturer[];
  categories: string[];
  selectedManufacturer: string;
  selectedCategory: string;
  searchTerm: string;
  onManufacturerChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export default function SDSFilters({
  manufacturers,
  categories,
  selectedManufacturer,
  selectedCategory,
  searchTerm,
  onManufacturerChange,
  onCategoryChange,
  onSearchChange
}: SDSFiltersProps) {
  return (
    <section className="py-8 bg-gray-50 border-b">
      <div className="container mx-auto px-4">

        {/* Manufacturer Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Filter by Manufacturer
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              key="all"
              onClick={() => onManufacturerChange('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                selectedManufacturer === 'all'
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
              }`}
            >
              All
            </button>
            {manufacturers.map((manufacturer) => (
              <button
                key={manufacturer.id}
                onClick={() => onManufacturerChange(manufacturer.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  selectedManufacturer === manufacturer.id
                    ? `bg-gradient-to-r ${manufacturer.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                {manufacturer.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category + Search */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search
            </label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search documents..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
