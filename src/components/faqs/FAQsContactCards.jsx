import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaClock } from 'react-icons/fa';

const FAQsContactCards = ({ contactInfo }) => {
    const defaultContactInfo = [
        {
            icon: <FaClock className="text-secondary text-2xl" />,
            title: "Visit Office",
            detail: "29 C 17 Circular Road, University Town, Peshawar, Pakistan, 25000",
            description: "Appointments recommended"
        }
    ];

    const getContactIcons = () => {
        if (!contactInfo || contactInfo.length === 0) return defaultContactInfo;
        
        const visitOfficeInfo = contactInfo.find(info => info.title === "Visit Office");

        if (visitOfficeInfo) {
            return [{
                ...visitOfficeInfo,
                icon: <FaClock className="text-secondary text-2xl" />
            }];
        }
        
        return defaultContactInfo;
    };

    const contacts = getContactIcons();

    return (
        <div className="flex justify-center mb-12">
            {contacts.map((info, index) => {
                const isVisitOffice = info.title === "Visit Office";
                const CardContent = (
                    <div
                        className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-secondary/30 transition-all duration-500 hover:-translate-y-1 h-full w-full md:w-auto"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                                {info.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-primary">{info.title}</h3>
                                <p className="text-gray-600 text-sm">{info.description}</p>
                            </div>
                        </div>
                        <p className="text-primary font-semibold text-lg">{info.detail}</p>
                    </div>
                );

                if (isVisitOffice) {
                    return (
                        <a
                            key={index}
                            href="https://www.google.com/maps/dir/?api=1&destination=33.99053350641758,71.49571067960983&travelmode=driving&dir_action=navigate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full md:w-1/3"
                        >
                            {CardContent}
                        </a>
                    );
                }

                return null;
            })}
        </div>
    );
};

export default FAQsContactCards;