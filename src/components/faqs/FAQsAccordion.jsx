import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaPhoneAlt, FaUserCheck } from 'react-icons/fa';
import { iconMap } from './faqsData';

const FAQsAccordion = ({ faqs, openAccordion, toggleAccordion }) => {
    // Function to get icon component
    const getIconComponent = (iconName) => {
        const IconComponent = iconMap[iconName];
        return IconComponent ? <IconComponent className="text-secondary text-xl" /> : null;
    };

    return (
        <div className="space-y-6">
            {faqs.map((faq) => (
                <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500 group"
                >
                    <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                                {getIconComponent(faq.icon)}
                            </div>
                            <div>
                                <div className="inline-flex items-center px-3 py-1 bg-primary/5 rounded-full mb-2">
                                    <span className="text-xs font-medium text-primary/70">{faq.category}</span>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                                    {faq.question}
                                </h3>
                            </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            {openAccordion === faq.id ? (
                                <FaChevronUp className="text-secondary text-xl transition-transform duration-300" />
                            ) : (
                                <FaChevronDown className="text-primary/60 text-xl transition-transform duration-300 group-hover:text-secondary group-hover:translate-y-1" />
                            )}
                        </div>
                    </button>

                    {/* Accordion Content */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="px-6 pb-6">
                            <div className="border-t border-gray-200 pt-6">
                                <p className="text-gray-700 leading-relaxed">
                                    {faq.answer.includes("LMS(Classter)") ? (
                                        <>
                                            {faq.answer.split("LMS(Classter)")[0]}
                                            LMS(
                                            <a
                                                href="https://www.classter.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-secondary font-bold hover:underline"
                                            >
                                                Classter
                                            </a>
                                            )
                                            {faq.answer.split("LMS(Classter)")[1]}
                                        </>
                                    ) : (
                                        faq.answer
                                    )}
                                </p>

                                {/* Additional Resources */}
                                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-4 border-secondary">
                                    <p className="text-primary font-medium mb-2">
                                        Need more information?
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors duration-300"
                                        >
                                            <FaPhoneAlt className="mr-2 text-xs" />
                                            Contact Support
                                        </Link>
                                        <Link
                                            to="/admissions"
                                            className="inline-flex items-center px-4 py-2 bg-secondary text-primary text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-300"
                                        >
                                            <FaUserCheck className="mr-2 text-xs" />
                                            Learn About Admissions
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQsAccordion;