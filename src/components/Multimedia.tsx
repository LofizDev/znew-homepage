"use client";
import Image from 'next/image';
import Link from 'next/link';

import { Article } from '@/types/article';
import { PhotoIcon } from '@heroicons/react/24/outline';

type MultimediaProps = {
    multipleTags: string[]
    multimedia: Article[]
}

export default function Multimedia({ multipleTags, multimedia }: MultimediaProps) {
    const featured = multimedia?.[0]
    const mainNews = multimedia.slice(1, multimedia.length)

    return (
        <section className="bg-[#ffe082] lg:px-7 px-5 py-7 max-w-[1150px] mx-auto md:mb-8 mb-0">
            {/* Tabs */}
            <div className="flex gap-8 mb-6 items-center">
                <span className='text-gray-800 font-semibold text-lg'><span className='text-red-500'>/</span> MULTIMEDIA </span>
                <div className='gap-8 items-center lg:flex hidden'>
                    {multipleTags.map((tab) => (
                        <span
                            key={tab}
                            className={`font-bold uppercase text-gray-800 hover:text-red-500 transition-all text-sm cursor-pointer`}
                        >
                            {tab}
                        </span>
                    ))}
                </div>
            </div>
            {/* Main content */}
            <div className="flex flex-col lg:flex-row gap-5">
                {/* Main article */}
                <div className="flex-1">
                    <Link href={`/article/${featured?.id || 'multimedia-featured'}`} className="block hover:opacity-90 transition-opacity">
                        <Image
                            src={featured?.image || ''}
                            alt={featured?.title || ''}
                            width={500}
                            height={315}
                            className="w-full max-h-[315px] object-cover rounded"
                        />
                        <div className="mt-3">
                            <div className="flex items-center gap-1 mb-1">
                                <span className="font-bold flex text-gray-800 gap-1 items-center text-lg cursor-pointer hover:underline">
                                    <PhotoIcon className='w-6 min-w-6 min-h-6 h-6 text-gray-800' />
                                    {featured?.title}
                                </span>
                            </div>
                            <p className="text-gray-800 text-sm">{featured?.summary}</p>
                        </div>
                    </Link>
                </div>
                {/* Grid articles */}
                <div className="grid grid-cols-2 gap-5 flex-1">
                    {mainNews.map((item) => (
                        <Link href={`/article/${item.id}`} key={item.title} className="block hover:opacity-90 transition-opacity">
                            <div className="flex flex-col">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={200}
                                    height={152}
                                    className="w-full h-[152px] object-cover rounded"
                                />
                                <div className="inline-flex flex-row items-start gap-1 mt-2">
                                    <p className="flex font-semibold text-gray-800  gap-1 text-sm cursor-pointer hover:underline">
                                        <PhotoIcon className='w-6 min-w-6 min-h-6 h-6 text-gray-800' />{item.title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 