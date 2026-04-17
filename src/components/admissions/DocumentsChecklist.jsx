import React, { useState } from 'react';

const DocumentsChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const documents = {
    'Mandatory Documents': [
      'Birth Certificate (Original + 2 copies)',
      'B-Form / CNIC of Child',
      'Parent CNIC Copies (Both)',
      'Previous School Transcripts',
      'Character Certificate',
      '6 Passport-size Photographs'
    ],
    'Additional Requirements': [
      'Medical Fitness Certificate',
      'Vaccination Record',
      'Guardian Authorization (If applicable)',
      'Special Needs Assessment (If required)',
      'Sports/Co-curricular Certificates'
    ],
    'For International Students': [
      'Valid Passport & Visa Copies',
      'Foreign Student Registration',
      'Equivalence Certificate',
      'Health Insurance Proof',
      'Guardianship Papers'
    ]
  };

  const handleCheck = (doc) => {
    setCheckedItems(prev => ({
      ...prev,
      [doc]: !prev[doc]
    }));
  };

  return (
    <div className="py-16 bg-gradient-to-br from-primary/5 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Documents <span className="text-secondary">Checklist</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ensure you have all required documents ready for a smooth application process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(documents).map(([category, items], catIndex) => (
            <div 
              key={category}
              className="animate-slide-up"
              style={{ animationDelay: `${catIndex * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gold-10 h-full overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                <div className={`p-6 text-white ${
                  catIndex === 0 ? 'bg-primary' : 
                  catIndex === 1 ? 'bg-secondary' : 'bg-emerald'
                }`}>
                  <h3 className="text-xl font-heading font-bold flex items-center">
                    <span className="mr-3">{catIndex === 0 ? '📋' : catIndex === 1 ? '📄' : '🌍'}</span>
                    {category}
                  </h3>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {items.map((doc, index) => (
                      <li 
                        key={index}
                        className="flex items-start animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <button
                          onClick={() => handleCheck(doc)}
                          className={`w-6 h-6 rounded mr-3 mt-1 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                            checkedItems[doc] 
                              ? 'bg-emerald border-emerald' 
                              : 'border-2 border-gray-300 hover:border-secondary'
                          }`}
                        >
                          {checkedItems[doc] && (
                            <span className="text-white text-sm">✓</span>
                          )}
                        </button>
                        <span className={`font-body ${checkedItems[doc] ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                          {doc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {catIndex === 0 && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                      <p className="text-sm text-primary font-semibold">
                        📌 All mandatory documents must be submitted with the application form
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-scale-in animation-delay-500">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-secondary/20">
            <div className="text-3xl">📊</div>
            <div className="text-left">
              <h4 className="font-bold text-primary">Progress Tracker</h4>
              <p className="text-gray-600 text-sm">
                {Object.keys(checkedItems).length} of {Object.values(documents).flat().length} documents checked
              </p>
              <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full bg-gradient-to-r from-secondary to-emerald transition-all duration-500"
                  style={{ 
                    width: `${(Object.keys(checkedItems).length / Object.values(documents).flat().length) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsChecklist;