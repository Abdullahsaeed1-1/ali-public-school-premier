import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaNewspaper,
    FaCalendarAlt,
    FaArrowLeft,
    FaUser,
    FaClock,
    FaArrowRight,
    FaRegCalendarCheck,
    FaRegComments,
    FaBookOpen,
    FaTrophy,
    FaHeart
} from 'react-icons/fa';
import { GiTrophyCup, GiDiploma, GiSchoolBag } from 'react-icons/gi';

const NewsUpdates = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All News', icon: FaNewspaper, count: 12 },
        { id: 'events', name: 'Events', icon: FaCalendarAlt, count: 4 },
        { id: 'achievements', name: 'Achievements', icon: FaTrophy, count: 3 },
        { id: 'academics', name: 'Academics', icon: FaBookOpen, count: 3 },
        { id: 'sports', name: 'Sports', icon: GiTrophyCup, count: 2 }
    ];

    const newsItems = [
        {
            id: 1,
            title: "APS Wins Inter-School Science Olympiad 2024",
            excerpt: "Our students secured top positions in the National Science Olympiad with outstanding projects in robotics and environmental science.",
            category: 'achievements',
            date: 'March 15, 2024',
            author: 'Principal Office',
            readTime: '3 min read',
            imageColor: 'from-[#29234B] to-[#3D366A]',
            tags: ['Achievement', 'Science', 'Competition'],
            featured: true,
            comments: 24,
            likes: 156
        },
        {
            id: 2,
            title: "Annual Sports Day 2024 - Celebrating Excellence",
            excerpt: "The much-awaited Annual Sports Day witnessed record participation with spectacular performances in athletics and team sports.",
            category: 'sports',
            date: 'March 10, 2024',
            author: 'Sports Department',
            readTime: '4 min read',
            imageColor: 'from-[#D4AF37] to-[#C19C2E]',
            tags: ['Sports', 'Event', 'Achievement'],
            featured: true,
            comments: 42,
            likes: 289
        },
        {
            id: 3,
            title: "New Computer Lab Inauguration",
            excerpt: "State-of-the-art computer lab with latest technology equipment inaugurated to enhance digital learning experience.",
            category: 'academics',
            date: 'March 5, 2024',
            author: 'IT Department',
            readTime: '2 min read',
            imageColor: 'from-[#10B981] to-[#0DA271]',
            tags: ['Facility', 'Technology', 'Education'],
            featured: false,
            comments: 18,
            likes: 98
        },
        {
            id: 4,
            title: "Parent-Teacher Meeting Schedule - April 2024",
            excerpt: "Important dates and guidelines for the upcoming parent-teacher meetings to discuss student progress.",
            category: 'events',
            date: 'February 28, 2024',
            author: 'Administration',
            readTime: '2 min read',
            imageColor: 'from-[#29234B] to-[#3D366A]',
            tags: ['Event', 'Parents', 'Academic'],
            featured: false,
            comments: 31,
            likes: 120
        },
        {
            id: 5,
            title: "School Debating Team Qualifies for Nationals",
            excerpt: "Our debating team secured first position in regional championships and qualified for national level competition.",
            category: 'achievements',
            date: 'February 25, 2024',
            author: 'English Department',
            readTime: '3 min read',
            imageColor: 'from-[#D4AF37] to-[#C19C2E]',
            tags: ['Debate', 'Achievement', 'Competition'],
            featured: false,
            comments: 28,
            likes: 145
        },
        {
            id: 6,
            title: "Summer Camp 2024 Registration Open",
            excerpt: "Exciting summer camp programs in arts, sports, and coding. Limited seats available for APS students.",
            category: 'events',
            date: 'February 20, 2024',
            author: 'Activities Department',
            readTime: '2 min read',
            imageColor: 'from-[#10B981] to-[#0DA271]',
            tags: ['Camp', 'Summer', 'Activities'],
            featured: false,
            comments: 45,
            likes: 210
        },
        {
            id: 7,
            title: "New STEM Curriculum Implementation",
            excerpt: "Enhanced STEM education program introduced with hands-on learning modules and industry collaborations.",
            category: 'academics',
            date: 'February 15, 2024',
            author: 'Science Department',
            readTime: '3 min read',
            imageColor: 'from-[#29234B] to-[#3D366A]',
            tags: ['STEM', 'Curriculum', 'Education'],
            featured: false,
            comments: 22,
            likes: 134
        },
        {
            id: 8,
            title: "APS Football Team Wins District Championship",
            excerpt: "Our football team showcased exceptional skills to win the district championship trophy after 5 years.",
            category: 'sports',
            date: 'February 10, 2024',
            author: 'Sports Department',
            readTime: '3 min read',
            imageColor: 'from-[#D4AF37] to-[#C19C2E]',
            tags: ['Football', 'Sports', 'Championship'],
            featured: false,
            comments: 56,
            likes: 312
        },
        {
            id: 9,
            title: "Career Counseling Session for Grade 9 & 10",
            excerpt: "Interactive career guidance workshop conducted by industry experts and alumni.",
            category: 'events',
            date: 'February 5, 2024',
            author: 'Career Department',
            readTime: '2 min read',
            imageColor: 'from-[#10B981] to-[#0DA271]',
            tags: ['Career', 'Workshop', 'Guidance'],
            featured: false,
            comments: 19,
            likes: 87
        }
    ];

    const upcomingEvents = [
        {
            title: "Annual Day Celebration",
            date: "April 25, 2024",
            time: "10:00 AM",
            location: "School Auditorium",
            description: "Cultural performances and award ceremony"
        },
        {
            title: "Science Exhibition",
            date: "May 10, 2024",
            time: "9:00 AM",
            location: "Science Block",
            description: "Student projects and innovations showcase"
        },
        {
            title: "Parent Orientation",
            date: "May 20, 2024",
            time: "2:00 PM",
            location: "Conference Hall",
            description: "New academic session information"
        },
        {
            title: "Sports Trials",
            date: "June 5, 2024",
            time: "8:00 AM",
            location: "School Ground",
            description: "Selection for school teams"
        }
    ];

    const filteredNews = activeCategory === 'all'
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory);

    const featuredNews = newsItems.filter(item => item.featured);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-white">
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-[#FAFAFA] via-white to-[#FAFAFA] text-[#29234B] py-20 px-4 md:px-8 overflow-hidden border-b border-[#E5E7EB]">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#10B981]/10 animate-float"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">


                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 animate-pulse-gentle border border-[#D4AF37]/30 shadow-sm">
                            <FaNewspaper className="mr-2 text-[#D4AF37]" />
                            <span className="font-semibold text-[#D4AF37]">Latest Updates</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-text-focus text-[#29234B]">
                            NEWS & UPDATES
                        </h1>
                        <p className="text-xl text-[#29234B]/70 mb-8 leading-relaxed animate-text-slide">
                            Stay Informed About Our School's Latest Achievements and Events
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main News Content */}
                    <div className="lg:w-2/3">
                        {/* Categories Filter */}
                        <div className="mb-8">
                            <div className="text-center mb-8">
                                <h2 className="font-heading text-2xl font-bold text-[#29234B]">
                                    Browse by Category
                                </h2>
                                <p className="text-[#29234B]/60 mt-2">
                                    Explore news based on your interests
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`flex items-center px-5 py-3 rounded-xl border transition-all duration-300 ${activeCategory === category.id
                                            ? 'bg-gradient-to-r from-[#29234B] to-[#3D366A] text-white border-[#29234B] shadow-lg transform scale-105'
                                            : 'bg-white text-[#29234B] border-gray-200 hover:border-[#D4AF37]/40 hover:shadow-md hover:bg-[#FAFAFA]'
                                            }`}
                                    >
                                        <category.icon className="mr-3" />
                                        <span className="font-medium">{category.name}</span>
                                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${activeCategory === category.id
                                            ? 'bg-white/20 text-white'
                                            : 'bg-[#29234B]/5 text-[#29234B]'
                                            }`}>
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Featured News */}
                        {featuredNews.length > 0 && (
                            <div className="mb-12">
                                <div className="text-center mb-8">
                                    <h2 className="font-heading text-2xl font-bold text-[#29234B] mb-2">
                                        Featured Stories
                                    </h2>
                                    <p className="text-[#29234B]/60">
                                        Highlighted achievements and major events
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {featuredNews.map((news) => (
                                        <div
                                            key={news.id}
                                            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 animate-section-enter group"
                                        >
                                            <div className={`h-48 bg-gradient-to-r ${news.imageColor} relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                                                        Featured
                                                    </span>
                                                </div>
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <span className={`px-3 py-1 ${news.category === 'achievements' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' :
                                                        news.category === 'sports' ? 'bg-[#10B981]/20 text-white' :
                                                            'bg-[#29234B]/20 text-white'
                                                        } text-xs rounded-full font-medium backdrop-blur-sm`}>
                                                        {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="font-heading text-xl font-bold text-[#29234B] mb-3 group-hover:text-[#29234B]/80 transition-colors duration-300">
                                                    {news.title}
                                                </h3>
                                                <p className="text-[#29234B]/70 mb-4">
                                                    {news.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex items-center text-[#29234B]/60 text-sm">
                                                            <FaUser className="mr-1 text-xs" />
                                                            <span>{news.author}</span>
                                                        </div>
                                                        <div className="flex items-center text-[#29234B]/60 text-sm">
                                                            <FaClock className="mr-1 text-xs" />
                                                            <span>{news.readTime}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-4">
                                                        <button className="flex items-center text-[#29234B]/60 hover:text-[#D4AF37] transition-colors duration-300">
                                                            <FaHeart className="mr-1" />
                                                            <span className="text-sm">{news.likes}</span>
                                                        </button>
                                                        <button className="flex items-center text-[#29234B]/60 hover:text-[#10B981] transition-colors duration-300">
                                                            <FaRegComments className="mr-1" />
                                                            <span className="text-sm">{news.comments}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* News Grid */}
                        <div>
                            <div className="text-center mb-8">
                                <h2 className="font-heading text-2xl font-bold text-[#29234B] mb-2">
                                    Latest Updates {activeCategory !== 'all' && `- ${categories.find(c => c.id === activeCategory)?.name}`}
                                </h2>
                                <p className="text-[#29234B]/60">
                                    {filteredNews.length} {filteredNews.length === 1 ? 'story' : 'stories'} found
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredNews.map((news, index) => (
                                    <div
                                        key={news.id}
                                        className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up group"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className={`h-40 bg-gradient-to-r ${news.imageColor} rounded-t-2xl relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                            <div className="absolute top-3 left-3">
                                                <span className={`px-2 py-1 ${news.category === 'achievements' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' :
                                                    news.category === 'sports' ? 'bg-[#10B981]/20 text-white' :
                                                        'bg-[#29234B]/20 text-white'
                                                    } text-xs rounded-full font-medium backdrop-blur-sm`}>
                                                    {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center mb-3">
                                                <FaRegCalendarCheck className="text-[#29234B]/40 text-sm mr-2" />
                                                <span className="text-[#29234B]/60 text-sm">{news.date}</span>
                                            </div>
                                            <h3 className="font-heading text-lg font-bold text-[#29234B] mb-2 line-clamp-2 group-hover:text-[#29234B]/80 transition-colors duration-300">
                                                {news.title}
                                            </h3>
                                            <p className="text-[#29234B]/70 text-sm mb-4 line-clamp-2">
                                                {news.excerpt}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {news.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-[#FAFAFA] text-[#29234B] text-xs rounded-lg border border-gray-200 hover:border-[#D4AF37] transition-colors duration-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center">
                                                    <FaUser className="text-[#29234B]/40 text-xs mr-1" />
                                                    <span className="text-[#29234B]/60 text-xs">{news.author}</span>
                                                </div>
                                                <Link
                                                    to={`/news/${news.id}`}
                                                    className="flex items-center text-[#29234B] hover:text-[#D4AF37] transition-colors duration-300 group text-sm font-medium"
                                                >
                                                    Read More
                                                    <FaArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300 text-xs" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="space-y-8">
                            {/* Upcoming Events */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center mr-3">
                                        <FaCalendarAlt className="text-[#D4AF37] text-lg" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-[#29234B]">
                                        Upcoming Events
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {upcomingEvents.map((event, index) => (
                                        <div
                                            key={index}
                                            className="border-l-4 border-[#10B981] pl-4 py-3 hover:bg-[#FAFAFA] transition-colors duration-300 animate-slide-in-left group"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h4 className="font-bold text-[#29234B] mb-1 group-hover:text-[#29234B]/80 transition-colors duration-300">
                                                        {event.title}
                                                    </h4>
                                                    <p className="text-[#29234B]/60 text-sm mb-1">{event.description}</p>
                                                    <div className="flex items-center text-[#29234B]/40 text-xs">
                                                        <FaCalendarAlt className="mr-1" />
                                                        <span className="mr-3">{event.date}</span>
                                                        <FaClock className="mr-1" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-[#29234B]/60 text-xs flex items-center">
                                                <div className="w-2 h-2 rounded-full bg-[#10B981] mr-2"></div>
                                                {event.location}
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>

                            {/* Quick Stats */}
                            <div className="bg-gradient-to-r from-[#29234B] to-[#3D366A] rounded-2xl p-6 text-white shadow-lg">
                                <h3 className="font-heading text-xl font-bold mb-6 text-white">School Updates</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center mr-3">
                                                <GiDiploma className="text-[#D4AF37] text-lg" />
                                            </div>
                                            <div>
                                                <p className="text-white/80 text-sm">Total News</p>
                                                <p className="font-bold text-lg text-white">24</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center mr-3">
                                                <GiTrophyCup className="text-[#D4AF37] text-lg" />
                                            </div>
                                            <div>
                                                <p className="text-white/80 text-sm">Achievements</p>
                                                <p className="font-bold text-lg text-white">12</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center mr-3">
                                                <GiSchoolBag className="text-[#D4AF37] text-lg" />
                                            </div>
                                            <div>
                                                <p className="text-white/80 text-sm">Upcoming Events</p>
                                                <p className="font-bold text-lg text-white">8</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 flex items-center justify-center mr-3">
                                        <FaNewspaper className="text-[#10B981] text-lg" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-[#29234B]">
                                        Stay Updated
                                    </h3>
                                </div>
                                <p className="text-[#29234B]/70 mb-6 text-sm">
                                    Subscribe to our newsletter for the latest news and updates directly in your inbox.
                                </p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-lg focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none transition-all duration-300 text-[#29234B]"
                                    />
                                    <button className="w-full py-3 bg-gradient-to-r from-[#29234B] to-[#3D366A] text-white font-medium rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                        Subscribe Now
                                    </button>
                                </div>
                                <p className="text-[#29234B]/50 text-xs mt-4 text-center">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </div>

                            {/* Popular Tags */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                <h3 className="font-heading text-xl font-bold text-[#29234B] mb-4">
                                    Popular Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Achievements', 'Events', 'Sports', 'Academics', 'Competitions', 'Facilities', 'Workshops', 'Awards'].map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-2 bg-gradient-to-br from-[#FAFAFA] to-white text-[#29234B] text-sm rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-sm transition-all duration-300 cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes pulse-soft {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.3);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes text-focus {
          from {
            letter-spacing: -0.5px;
            opacity: 0.7;
          }
          to {
            letter-spacing: normal;
            opacity: 1;
          }
        }
        
        @keyframes text-slide {
          from {
            transform: translateX(-10px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-text-focus {
          animation: text-focus 0.8s ease-out forwards;
        }
        
        .animate-text-slide {
          animation: text-slide 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
};

export default NewsUpdates;