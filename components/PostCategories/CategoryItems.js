import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const posts = [
  { id: 1, title: 'Post 1', description: 'Description for post 1', image: '/images/1.jpg', category: 'Business Solutions' },
  { id: 2, title: 'Post 2', description: 'Description for post 2', image: '/images/about-2.jpg', category: 'Consumer Products' },
  { id: 3, title: 'Post 3', description: 'Description for post 3', image: '/images/3.jpg', category: 'Consumer Products' },
  { id: 4, title: 'Post 4', description: 'Description for post 4', image: '/images/4.jpg', category: 'Consumer Products' },
  { id: 5, title: 'Post 5', description: 'Description for post 5', image: '/images/5.jpg', category: 'bag' },
  { id: 6, title: 'Post 6', description: 'Description for post 6', image: '/images/6.jpg', category: 'Consumer Products' },
  { id: 7, title: 'Post 7', description: 'Description for post 7', image: '/images/7.jpg', category: 'Consumer Products' },
  { id: 8, title: 'Post 8', description: 'Description for post 8', image: '/images/8.jpg', category: 'bag' },
  { id: 9, title: 'Post 9', description: 'Description for post 9', image: '/images/9.jpg', category: 'Consumer Products' },
  { id: 10, title: 'Post 10', description: 'Description for post 10', image: '/images/10.jpg', category: 'java' },
  { id: 11, title: 'Post 11', description: 'Description for post 11', image: '/images/11.jpg', category: 'Consumer Products' },
  { id: 12, title: 'Post 12', description: 'Description for post 12', image: '/images/12.jpg', category: 'java' },
];

const CategoryItems = () => {
  const [selectedFilter, setSelectedFilter] = useState('همه');
  const [filteredItems, setFilteredItems] = useState(posts);
  const filters = ['همه', 'Business Solutions', 'Consumer Products', 'bag', 'java'];

  const handleFilterButtonClick = (category) => {
    setSelectedFilter(category); // انتخاب دسته‌بندی جدید
  };

  useEffect(() => {
    // اگر "همه" انتخاب شده باشد، تمامی پست‌ها نمایش داده شوند
    if (selectedFilter === 'همه') {
      setFilteredItems(posts);
    } else {
      // فیلتر کردن پست‌ها بر اساس دسته‌بندی انتخاب‌شده
      setFilteredItems(posts.filter((item) => item.category === selectedFilter));
    }
  }, [selectedFilter]);

  return (
    <>
        <div className='button-filter'>
          {filters.map((category, index) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button-category ${selectedFilter === category ? 'active' : ''}`}
              key={`filters-${index}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='items-filter'>
          {filteredItems.map((item) => (
              <div key={item.id} className='item'>
                <Link href="/">
                <Image 
                src={item.image} 
                alt={item.title} 
                width="320" 
                height="200"
                />
                  <div className="item-overlay">{item.description}</div> 
                </Link>
              </div>
          ))}
        </div>
    </>
  );
};

export default CategoryItems;
