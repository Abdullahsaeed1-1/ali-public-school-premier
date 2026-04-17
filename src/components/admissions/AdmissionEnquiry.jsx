import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const AdmissionEnquiry = () => {
    // 1. State for Form Data
    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        childName: "",
        grade: "Grade Applying For"
    });

    const [errors, setErrors] = useState({});

    // 2. Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    // 3. Validation Logic
    const validate = () => {
        const newErrors = {};
        if (!formData.parentName.trim()) newErrors.parentName = "Parent name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.childName.trim()) newErrors.childName = "Child's name is required";
        if (formData.grade === "Grade Applying For") newErrors.grade = "Please select a grade";
        return newErrors;
    };

    // 4. Submit Logic (Web3Forms API)
    const onSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("parentName", formData.parentName);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("childName", formData.childName);
        formDataToSend.append("grade", formData.grade);
        // Wahi access key jo Contact page mein use ho rahi hai
        formDataToSend.append("access_key", "e2e81402-38a4-480d-8624-953f9caa492e");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Enquiry Sent!',
                    text: 'Your admission enquiry has been received successfully.',
                    timer: 3000,
                    showConfirmButton: false,
                });
                // Form Reset
                setFormData({ parentName: "", email: "", childName: "", grade: "Grade Applying For" });
                setErrors({});
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
            });
        }
    };

    return (
        <section className="py-20 bg-light">
            <div className="container mx-auto px-6">
                <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    {/* Left side - Info */}
                    <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                        <h2 className="font-heading text-3xl text-white font-bold mb-6 uppercase tracking-wider">HAVE QUESTIONS?</h2>
                        <p className="font-body text-gray-300 mb-8 leading-relaxed">
                            Our admissions team is here to guide you through every step. Contact us for a campus tour or detailed fee structure.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-white hover:text-secondary transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-navy-80 border border-secondary/30 flex items-center justify-center">
                                    <FaPhoneAlt />
                                </div>
                                <span className="font-subheading font-medium tracking-wide text-sm">+92 334 0813562</span>
                            </div>
                            <div className="flex items-center gap-4 text-white hover:text-secondary transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-navy-80 border border-secondary/30 flex items-center justify-center">
                                    <FaEnvelope />
                                </div>
                                <span className="font-subheading font-medium tracking-wide text-sm">principal@apspremier.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form Card */}
                    <div className="w-full md:w-1/2 p-4 md:p-10 bg-navy-90 flex items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white w-full rounded-2xl p-8 shadow-xl"
                        >
                            <h4 className="font-heading text-xl text-primary font-bold mb-6 text-center underline decoration-secondary decoration-2 underline-offset-8 uppercase tracking-wide">
                                ADMISSION ENQUIRY
                            </h4>
                            <form className="space-y-4" onSubmit={onSubmit} noValidate>
                                <div>
                                    <input 
                                        type="text" 
                                        name="parentName"
                                        placeholder="Parent Name" 
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className={`w-full p-3 bg-light border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all font-body text-sm text-black ${errors.parentName ? 'border-red-500' : 'border-gray-200'}`} 
                                    />
                                    {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
                                </div>

                                <div>
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Email Address" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full p-3 bg-light border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all font-body text-sm text-black ${errors.email ? 'border-red-500' : 'border-gray-200'}`} 
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input 
                                            type="text" 
                                            name="childName"
                                            placeholder="Child's Name" 
                                            value={formData.childName}
                                            onChange={handleChange}
                                            className={`w-full p-3 bg-light border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all font-body text-sm text-black ${errors.childName ? 'border-red-500' : 'border-gray-200'}`} 
                                        />
                                        {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName}</p>}
                                    </div>
                                    <div>
                                        <select 
                                            name="grade"
                                            value={formData.grade}
                                            onChange={handleChange}
                                            className={`w-full p-3 bg-light border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all font-body text-sm text-gray-500 ${errors.grade ? 'border-red-500' : 'border-gray-200'}`}
                                        >
                                            <option value="Grade Applying For">Grade Applying For</option>
                                            <option value="Playgroup">Playgroup</option>
                                            <option value="Nursery">Nursery</option>
                                            <option value="Primary">Primary</option>
                                        </select>
                                        {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade}</p>}
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-primary hover:bg-secondary text-white hover:text-primary py-4 rounded-lg font-heading font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-3 uppercase"
                                >
                                    SUBMIT ENQUIRY <FaArrowRight />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionEnquiry;