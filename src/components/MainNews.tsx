import Image from 'next/image';

import {
  FEATURED_NEWS,
  LEFT_NEWS,
  RIGHT_NEWS,
} from '@/constants/article';

export default function MainNews() {
    return (
        <div className='px-4 lg:mt-0 mt-4'>
            <div className="max-w-[1100px] mx-auto flex  md:flex-row-reverse flex-col lg:flex-row items-start gap-5">
                {/* Left news list */}
                <div className="flex md:order-1 order-3 md:w-[40%] lg:w-[28%] w-full flex-col gap-4">
                    {LEFT_NEWS.map(news => (
                        <div key={news.title} className="flex gap-2 items-start last:border-0 border-b pb-4 border-b-gray-200">
                            <Image
                                src={news.image}
                                alt={news.title}
                                width={120}
                                height={80}
                                className="w-[120px] h-20 object-cover rounded"
                            />
                            <span className="text-sm font-semibold text-gray-800 line-clamp-2">{news.title}</span>
                        </div>
                    ))}
                </div>
                <div className='flex order-2 flex-1 lg:flex-row w-full flex-col md:gap-5 gap-4'>
                    {/* Featured news */}
                    <div className='flex-1'>
                        <Image
                            src={FEATURED_NEWS.image}
                            alt={FEATURED_NEWS.title}
                            width={1000}
                            height={333}
                            className="w-full max-h-[333px] object-cover rounded mb-4"
                        />
                        <h1 className="lg:text-3xl text-xl font-bold text-gray-800 mb-2">Kịp thời phát hiện, xử lý sai phạm liên quan sắp xếp bộ máy</h1>
                        <p className="text-gray-500 lg:block hidden text-sm">{FEATURED_NEWS.summary}</p>
                    </div>
                    {/* Right news */}
                    <div className="grid lg:grid-cols-1 grid-cols-2 gap-4 ">
                        {RIGHT_NEWS.map(news => (
                            <div key={news.title} className="flex flex-col gap-2">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    width={258}
                                    height={172}
                                    className="lg:min-w-[258px] w-full h-[172px] object-cover rounded"
                                />
                                <span className="text-sm max-w-[258px]  font-semibold text-gray-800 line-clamp-2">{news.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 
