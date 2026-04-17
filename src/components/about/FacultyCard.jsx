import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar, FaAward, FaBook } from 'react-icons/fa';

const FacultyCard = ({ faculty, index }) => {
    const facultyCardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.15
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    const iconMap = {
        "Academic Director": <FaGraduationCap className="text-lg" />,
        "Head of Sciences": <FaBook className="text-lg" />,
        "Head of Humanities": <FaAward className="text-lg" />
    };

    const getIconColor = (role) => {
        switch(role) {
            case "Academic Director": return "text-blue-600";
            case "Head of Sciences": return "text-green-600";
            case "Head of Humanities": return "text-purple-600";
            default: return "text-secondary";
        }
    };

    const getBorderColor = (role) => {
        switch(role) {
            case "Academic Director": return "border-blue-200";
            case "Head of Sciences": return "border-green-200";
            case "Head of Humanities": return "border-purple-200";
            default: return "border-gray-200";
        }
    };

    return (
        <motion.div
            variants={facultyCardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            custom={index}
            className={`bg-white rounded-xl shadow-md overflow-hidden border ${getBorderColor(faculty.role)} hover:shadow-lg transition-all duration-300`}
        >
            {/* Faculty Header - Simplified */}
            <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50">
                <div className="flex items-start justify-between mb-3">
                    <motion.div
                        className={`w-12 h-12 rounded-full ${getIconColor(faculty.role)}/20 flex items-center justify-center`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={getIconColor(faculty.role)}>
                            {iconMap[faculty.role] || <FaGraduationCap />}
                        </div>
                    </motion.div>
                    <motion.div
                        className="text-secondary text-xs font-bold px-2 py-1 rounded-full bg-secondary/10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        {faculty.experience}
                    </motion.div>
                </div>
                
                <motion.h3
                    className="font-heading text-lg font-bold text-primary mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                >
                    {faculty.name}
                </motion.h3>
                
                <motion.p
                    className={`font-body ${getIconColor(faculty.role)} font-medium text-sm`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                >
                    {faculty.role}
                </motion.p>
            </div>

            {/* Faculty Details */}
            <div className="p-5">
                <div className="space-y-3 mb-4">
                    <motion.div
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                    >
                        <FaGraduationCap className={`text-secondary mt-0.5 flex-shrink-0 ${getIconColor(faculty.role)}`} />
                        <div>
                            <p className="font-body text-gray-700 text-xs font-semibold mb-0.5">
                                Qualification:
                            </p>
                            <p className="font-body text-gray-600 text-xs leading-relaxed">
                                {faculty.qualification}
                            </p>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                        <FaStar className={`text-secondary mt-0.5 flex-shrink-0 ${getIconColor(faculty.role)}`} />
                        <div>
                            <p className="font-body text-gray-700 text-xs font-semibold mb-0.5">
                                Expertise:
                            </p>
                            <p className="font-body text-gray-600 text-xs leading-relaxed">
                                {faculty.expertise}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Achievements */}
                <motion.div
                    className="border-t border-gray-100 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <div className={`h-0.5 w-6 ${getIconColor(faculty.role)}`}></div>
                        <h4 className="font-heading text-sm font-bold text-primary">
                            Notable Achievements
                        </h4>
                    </div>
                    
                    <ul className="space-y-2">
                        {faculty.achievements.map((achievement, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 + idx * 0.1 }}
                                className="flex items-start gap-2"
                            >
                                <motion.div
                                    className={`w-1.5 h-1.5 rounded-full mt-1.5 ${getIconColor(faculty.role)}`}
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity,
                                        delay: idx * 0.3 
                                    }}
                                />
                                <span className="font-body text-gray-600 text-xs leading-relaxed">
                                    {achievement}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Subtle Hover Effect */}
            <motion.div
                className="h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
            />
            
            {/* Pulsing Dot Indicator */}
            <div className="absolute top-4 right-4">
                <motion.div
                    className={`w-2 h-2 rounded-full ${getIconColor(faculty.role)}`}
                    animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity 
                    }}
                />
            </div>
        </motion.div>
    );
};

export default FacultyCard;