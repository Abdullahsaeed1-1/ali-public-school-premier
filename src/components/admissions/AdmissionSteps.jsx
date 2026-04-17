import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaGraduationCap, FaFileInvoice, FaCalendarCheck } from 'react-icons/fa';

const steps = [
    { icon: <FaClipboardList />, title: "Registration", desc: "Complete the online inquiry form" },
    { icon: <FaGraduationCap />, title: "Assessment", desc: "Scheduled entry test and interview" },
    { icon: <FaFileInvoice />, title: "Documentation", desc: "Submission of previous records" },
    { icon: <FaCalendarCheck />, title: "Confirmation", desc: "Final approval and fee issuance" }
];

const AdmissionSteps = () => (
    <section className="py-20 container mx-auto px-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="p-8 rounded-2xl shadow-sm border border-gray-100 bg-white group transition-all"
                >
                    <div className="text-secondary text-3xl mb-4 group-hover:scale-110 transition-transform">
                        {step.icon}
                    </div>
                    <h3 className="font-heading text-lg text-primary font-bold mb-2">{step.title}</h3>
                    <p className="font-body text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

export default AdmissionSteps;