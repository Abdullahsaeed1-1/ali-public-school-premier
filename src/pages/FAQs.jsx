import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQsBanner from '../components/faqs/FAQsBanner';
import FAQsContactCards from '../components/faqs/FAQsContactCards';
import FAQsCategoryFilter from '../components/faqs/FAQsCategoryFilter';
import FAQsAccordion from '../components/faqs/FAQsAccordion';
import FAQsStats from '../components/faqs/FAQsStats';
import FAQsCTASection from '../components/faqs/FAQsCTASection';
import { faqs, categories, contactInfo } from '../components/faqs/faqsData';

const FAQs = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredFaqs = selectedCategory === "All"
        ? faqs
        : faqs.filter(faq => faq.category === selectedCategory);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-cream">
            {/* Header Section with Cream Background */}
            <FAQsBanner />
            
            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
                {/* Quick Contact Cards */}
                <FAQsContactCards contactInfo={contactInfo} />
                
                {/* Category Filter */}
                <FAQsCategoryFilter 
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                
                {/* FAQ Accordions */}
                <FAQsAccordion 
                    faqs={filteredFaqs}
                    openAccordion={openAccordion}
                    toggleAccordion={toggleAccordion}
                />
                
                {/* Stats Section */}
                <FAQsStats />
                
            </div>
        </div>
    );
};

export default FAQs;