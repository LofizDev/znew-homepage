import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article = {
        id: id,
        title: `Article ${id} - Comprehensive News Analysis`,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <span>/</span>
                    <span>Article</span>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">#{article.id}</span>
                </nav>

                {/* Article content */}
                <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Featured Image */}
                    <div className="relative h-64 md:h-96">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Article Meta */}
                        <div className="flex items-center text-gray-600 text-sm mb-6">
                            <span>Published on December 15, 2024</span>
                            <span className="mx-2">•</span>
                            <span>5 min read</span>
                            <span className="mx-2">•</span>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                News
                            </span>
                        </div>

                        {/* Article Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {article.title}
                        </h1>

                        {/* Article Summary */}
                        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 mb-8">
                            <p className="text-lg text-gray-700 italic">
                                &ldquo;This is a comprehensive analysis of current events and developments in the news industry, providing detailed coverage and insights for our readers.&rdquo;
                            </p>
                        </div>

                        {/* Article Body */}
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                This is a detailed article about <strong>{article.title}</strong>. In a real application,
                                this would contain the actual article content fetched from your API or database.
                                The content would be dynamically generated based on the article ID and would include
                                rich text formatting, images, and other media elements.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Key Highlights
                            </h2>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-600">
                                &ldquo;This demonstrates that clicking on any article from the homepage will navigate
                                to a dedicated article page with the article ID in the URL.&rdquo;
                            </blockquote>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Additional Information
                            </h2>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The navigation works seamlessly for both desktop and mobile devices, providing
                                a consistent user experience across all platforms. Users can easily navigate back
                                to the homepage using the back button in the header.
                            </p>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
                                <h3 className="font-semibold text-blue-900 mb-2">Technical Details</h3>
                                <ul className="text-blue-800 space-y-1">
                                    <li>• Article ID: {article.id}</li>
                                    <li>• Route: /article/[id]</li>
                                    <li>• Responsive design for all devices</li>
                                    <li>• SEO-friendly URL structure</li>
                                </ul>
                            </div>
                        </div>

                        {/* Article Footer */}
                        <div className="border-t border-gray-200 mt-8 pt-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-600">Share:</span>
                                    <button className="text-blue-600 hover:text-blue-800">Twitter</button>
                                    <button className="text-blue-600 hover:text-blue-800">Facebook</button>
                                    <button className="text-blue-600 hover:text-blue-800">LinkedIn</button>
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Last updated: {new Date().toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>


            </div>
        </div>
    );
} 