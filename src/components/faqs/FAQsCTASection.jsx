import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const FAQsCTASection = () => {
    return (
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                    <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-gray-700 text-lg max-w-2xl">
                        Our dedicated support team is ready to help you with any questions about admissions, academics, or school life.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                        <FaPhoneAlt className="mr-3 group-hover:scale-110 transition-transform" />
                        Contact Us Now
                    </Link>
                    <a
                        href="tel:+923340813562"
                        className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                        <FiPhone className="mr-3 group-hover:scale-110 transition-transform" />
                        Call Directly
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-primary mb-4">Quick Links</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { label: "Admissions Process", link: "/admissions" },
                        { label: "Academic Calendar", link: "/academics" },
                        { label: "School Policies", link: "/policies" }
                    ].map((link, index) => (
                        <Link
                            key={index}
                            to={link.link}
                            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-secondary hover:shadow-md transition-all duration-300 group"
                        >
                            <span className="text-primary font-medium group-hover:text-primary/90">
                                {link.label}
                            </span>
                            <FaChevronDown className="text-primary/40 transform rotate-270 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQsCTASection;