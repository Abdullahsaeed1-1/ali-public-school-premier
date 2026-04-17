import React from 'react';

const FAQsCategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
    const defaultCategories = [
        "All",
        "General",
        "Admissions",
        "Academics",
        "Safety",
        "Facilities",
        "Activities",
        "Support"
    ];

    const catList = categories || defaultCategories;

    return (
        <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Browse by Category
            </h2>
            <div className="flex flex-wrap gap-3">
                {catList.map((category, index) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-primary text-white shadow-lg border border-secondary/30'
                                : 'bg-white text-primary hover:bg-primary/5 hover:border-secondary/20 border border-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FAQsCategoryFilter;