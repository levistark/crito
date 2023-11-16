import React from 'react'

const CategoryCounts = ({articles}) => {
    // Calculate category counts
    const categoryCounts = articles.reduce((acc, article) => {
        const category = article.category
        acc[category] = (acc[category] || 0) + 1  
        return acc
    }, {})


  return (
    <>
        {Object.keys(categoryCounts).map((category, index) => (
            <p key={index}>
                <strong>{category}:</strong> {categoryCounts[category]}
            </p>
        ))}
    </>
  )
}

export default CategoryCounts