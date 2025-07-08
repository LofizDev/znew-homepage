import Image from 'next/image';
import Link from 'next/link';

import type { Article } from '@/types/article';

export default function ArticleCard({ article }: { article: Article }) {
    return (
        <Link href={`/article/${article.id}`} className="block group">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col h-full">
                <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="flex flex-col flex-1 p-4">
                    <h2 className="text-lg font-semibold mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">{article.title}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{article.summary}</p>
                    <span className="text-xs text-gray-400 mt-auto">{new Date(article.createdAt).toLocaleDateString('vi-VN')}</span>
                </div>
            </div>
        </Link>
    );
} 