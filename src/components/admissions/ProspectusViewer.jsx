import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { FaChevronLeft, FaChevronRight, FaDownload, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import prospectusFile from '../../assets/prospectus.pdf';

// Use local worker to avoid CDN/network-related loading failures.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const getPageRenderWidth = () => {
  if (typeof window === 'undefined') return 360;

  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 1280) return 400;
  if (viewportWidth >= 1024) return 360;
  if (viewportWidth >= 768) return Math.min(460, viewportWidth - 96);
  return Math.max(260, viewportWidth - 56);
};

const ProspectusViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [pageRenderWidth, setPageRenderWidth] = useState(getPageRenderWidth);
  
  const prospectusPath = prospectusFile;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    console.error('Error loading PDF:', error);
    console.error('PDF Path:', prospectusPath);
    setError('Unable to load prospectus. Please try refreshing the page or contact the school.');
  };

  useEffect(() => {
    const handleResize = () => {
      setPageRenderWidth(getPageRenderWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPage = (page) => {
    const pageNum = parseInt(page);
    if (pageNum >= 1 && pageNum <= numPages) {
      setPageNumber(pageNum);
    }
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = prospectusPath;
    link.download = 'Ali-Public-School-Prospectus.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#29234B] mb-8">School Prospectus</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#D4AF37] text-[#29234B] px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            Important Document
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-[#29234B] font-bold mb-4">
            SCHOOL PROSPECTUS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Download or browse our comprehensive prospectus to learn more about Ali Public School
          </p>
        </motion.div>

        {/* PDF Viewer Container */}
        <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* PDF Display Area */}
            <div className="flex-1 bg-gray-100 p-4 md:p-6 lg:h-[700px]">
              <div className="w-full h-full flex justify-center items-start overflow-auto">
                <Document
                  file={prospectusPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className="flex flex-col items-center justify-center h-[420px] lg:h-[620px]">
                      <FaSpinner className="text-4xl text-[#D4AF37] animate-spin mb-4" />
                      <p className="text-gray-600">Loading prospectus...</p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    width={pageRenderWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={
                      <div className="flex items-center justify-center h-[420px] lg:h-[620px]">
                        <FaSpinner className="text-4xl text-[#D4AF37] animate-spin" />
                      </div>
                    }
                  />
                </Document>
              </div>
            </div>

            {/* Controls Sidebar */}
            <div className="w-full lg:w-80 bg-[#29234B] text-white p-8 flex flex-col justify-between">
              {/* Navigation */}
              <div>
                <h3 className="text-[#D4AF37] font-bold mb-6">Navigation</h3>

                {/* Page Display */}
                <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6 text-center">
                  <p className="text-sm text-gray-300 mb-2">Current Page</p>
                  <p className="text-3xl font-bold text-[#D4AF37] mb-2">{pageNumber}</p>
                  <p className="text-xs text-gray-300">of {numPages || '...'} pages</p>
                </div>

                {/* Previous/Next Buttons */}
                <div className="flex gap-3 mb-6">
                  <button
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    className="flex-1 bg-[#D4AF37] text-[#29234B] py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronLeft /> Previous
                  </button>
                  <button
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    className="flex-1 bg-[#D4AF37] text-[#29234B] py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next <FaChevronRight />
                  </button>
                </div>

                {/* Page Selector */}
                {numPages && numPages > 5 && (
                  <div className="mb-6">
                    <label className="block text-sm text-gray-300 mb-2">Go to Page</label>
                    <select
                      value={pageNumber}
                      onChange={(e) => goToPage(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white text-[#29234B] font-bold"
                    >
                      {Array.from({ length: numPages }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Page {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Page Dots for quick navigation */}
                {numPages && numPages <= 10 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-300 mb-3">Quick Jump</p>
                    <div className="grid grid-cols-5 gap-2">
                      {Array.from({ length: numPages }, (_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => goToPage(i + 1)}
                          className={`py-2 rounded font-bold text-sm transition ${
                            pageNumber === i + 1
                              ? 'bg-[#D4AF37] text-[#29234B]'
                              : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Download Button */}
              <button
                onClick={downloadPDF}
                className="w-full bg-[#D4AF37] text-[#29234B] py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition mt-6"
              >
                <FaDownload /> Download PDF
              </button>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <div className="text-[#D4AF37] text-4xl mb-4 flex justify-center">📄</div>
            <h3 className="font-bold text-[#29234B] mb-2">Comprehensive</h3>
            <p className="text-gray-600 text-sm">Complete information about our academics, facilities and admissions process</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <div className="text-[#D4AF37] text-4xl mb-4 flex justify-center">📱</div>
            <h3 className="font-bold text-[#29234B] mb-2">Easy to Share</h3>
            <p className="text-gray-600 text-sm">Download the prospectus and share it with your family and friends</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <div className="text-[#D4AF37] text-4xl mb-4 flex justify-center">❓</div>
            <h3 className="font-bold text-[#29234B] mb-2">Questions?</h3>
            <p className="text-gray-600 text-sm">Contact our admissions team for more information about the school</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProspectusViewer;