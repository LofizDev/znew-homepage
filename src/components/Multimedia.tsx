import Image from 'next/image';

import { PhotoIcon } from '@heroicons/react/24/outline';

const TABS = ['VIDEO', 'PODCAST', 'LONGFORM', 'STORY', 'QUIZZ'];
const MAIN = {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Em xinh gây bất ngờ nhất',
    summary: 'LyHan giữ hạng 5, vượt lên rất nhiều đàn chị tên tuổi sau live stage 2 của Em xinh "say hi". Nữ ca sĩ có sự bứt phá ngoạn mục.',
};
const GRID = [
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Hiện trạng gần 15.000 nhà ven kênh ở TP.HCM chuẩn bị',
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Hoa khôi bóng chuyền sống kín tiếng sau khi lấy chồng',
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Cuộc sống của các "rich kid" Hà Nội, TP.HCM',
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Nhan sắc mẹ đơn thân vừa cưới cầu thủ Dương',
    },
];

export default function Multimedia() {
    return (
        <section className="bg-[#ffe082] lg:px-7 px-5 py-7 max-w-[1150px] mx-auto md:mb-8 mb-0">
            {/* Tabs */}
            <div className="flex gap-8 mb-6 items-center">
                <span className='text-gray-800 font-semibold text-lg'><span className='text-red-500'>/</span> MULTIMEDIA </span>
                <div className='gap-8 items-center lg:flex hidden'>
                    {TABS.map((tab) => (
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
                    <Image
                        src={MAIN.image}
                        alt={MAIN.title}
                        width={500}
                        height={315}
                        className="w-full max-h-[315px] object-cover rounded"
                    />
                    <div className="mt-3">
                        <div className="flex items-center gap-1 mb-1">
                            <span className="font-bold flex text-gray-800 gap-1 items-center text-lg cursor-pointer hover:underline">
                                <PhotoIcon className='w-6 min-w-6 min-h-6 h-6 text-gray-800' />
                                {MAIN.title}
                            </span>
                        </div>
                        <p className="text-gray-800 text-sm">{MAIN.summary}</p>
                    </div>
                </div>
                {/* Grid articles */}
                <div className="grid grid-cols-2 gap-5 flex-1">
                    {GRID.map((item) => (
                        <div key={item.title} className="flex flex-col">
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
                    ))}
                </div>
            </div>
        </section>
    );
} 