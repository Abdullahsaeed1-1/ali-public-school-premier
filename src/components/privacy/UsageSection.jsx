import React from 'react';
import { FaUserCheck } from 'react-icons/fa';

const UsageSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-700 animate-section-enter">
      <h2 className="font-heading text-3xl font-bold text-[#29234B] mb-6 flex items-center animate-text-focus">
        <FaUserCheck className="text-[#D4AF37] mr-4 animate-bounce-slow" />
        Data Usage & Sharing
      </h2>
      
      <div className="overflow-x-auto animate-fade-in-up">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[#29234B] to-[#3D366A] text-white">
              <th className="p-4 text-left rounded-tl-lg">Purpose</th>
              <th className="p-4 text-left">Data Type</th>
              <th className="p-4 text-left rounded-tr-lg">Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-[#FAFAFA] transition-all duration-300 animate-row-enter" style={{ animationDelay: '100ms' }}>
              <td className="p-4 font-medium text-[#29234B]">Academic Records</td>
              <td className="p-4 text-[#29234B]/80">Grades, assessments, reports</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-[#FAFAFA] text-[#29234B] rounded-full text-sm animate-pulse-soft border border-[#29234B]/20">
                  5 years post-graduation
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-[#D4AF37]/5 transition-all duration-300 animate-row-enter" style={{ animationDelay: '200ms' }}>
              <td className="p-4 font-medium text-[#29234B]">Health Information</td>
              <td className="p-4 text-[#29234B]/80">Medical records, allergies</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#29234B] rounded-full text-sm animate-pulse-soft border border-[#D4AF37]/20">
                  Current enrollment + 1 year
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-[#10B981]/5 transition-all duration-300 animate-row-enter" style={{ animationDelay: '300ms' }}>
              <td className="p-4 font-medium text-[#29234B]">Contact Information</td>
              <td className="p-4 text-[#29234B]/80">Phone, email, address</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-[#10B981]/10 text-[#29234B] rounded-full text-sm animate-pulse-soft border border-[#10B981]/20">
                  Until withdrawal + 2 years
                </span>
              </td>
            </tr>
            <tr className="hover:bg-[#FAFAFA] transition-all duration-300 animate-row-enter" style={{ animationDelay: '400ms' }}>
              <td className="p-4 font-medium text-[#29234B]">Photographs & Media</td>
              <td className="p-4 text-[#29234B]/80">Event photos, videos</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-gradient-to-r from-[#FAFAFA] to-[#D4AF37]/10 text-[#29234B] rounded-full text-sm animate-pulse-soft border border-[#D4AF37]/20">
                  With consent only
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsageSection;