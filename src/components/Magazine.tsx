"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import type { CustomArrowProps } from 'react-slick';
import Slider from 'react-slick';

import {
  BookOpenIcon,
  CameraIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/solid';

const MAGAZINE = [
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        label: 'LENS',
        title: "Hai thế giới của 'nàng tiên cá' hiếm hoi ở Việt Nam",
        icon: 'camera',
    },
    {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        label: 'TL;DR',
        title: 'Chuyện chưa từng xảy ra với hoa hậu ở Việt Nam',
        icon: 'computer',
    },
    {
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
        label: 'TL;DR',
        title: 'Tên lửa Phá thành - quân bài nặng ký Iran gửi tới Israel',
        icon: 'computer',
    },
    {
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
        label: 'LONGFORM',
        title: "'Bản đồ Việt Nam hạnh phúc' ghép từ nụ cười",
        icon: 'book',
    },
];

function getIcon(type: string, color: string) {
    switch (type) {
        case 'camera':
            return <CameraIcon className={`w-7 h-7 ${color}`} />;
        case 'book':
            return <BookOpenIcon className={`w-7 h-7 ${color}`} />;
        default:
            return <ComputerDesktopIcon className={`w-7 h-7 ${color}`} />;
    }
}

function NextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
        <button
            className="absolute cursor-pointer lg:right-[-32px] -right-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-1 border border-gray-200 hover:bg-gray-100"
            onClick={onClick}
            aria-label="Next"
            type="button"
        >
            <ChevronRightIcon className="w-6 h-6 text-gray-800" />
        </button>
    );
}

function PrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
        <button
            className="absolute cursor-pointer lg:left-[-32px] -left-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-1 border border-gray-200 hover:bg-gray-100"
            onClick={onClick}
            aria-label="Previous"
            type="button"
        >
            <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
        </button>
    );
}

export default function Magazine() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
        ]
    };

    return (
        <section className="bg-[#f5f6fa] py-8 px-2">
            <div className="max-w-[1100px] mx-auto">
                <h2 className="font-bold text-xl mb-6 flex items-center gap-2 text-gray-800">
                    <span className="text-red-500 text-2xl">/</span>MAGAZINE
                </h2>
                <div className="relative">
                    <Slider {...settings}>
                        {MAGAZINE.map((item, idx) => (
                            <div key={idx} className="px-2">
                                <div className="group relative h-[380px] rounded-lg overflow-hidden shadow bg-black flex flex-col justify-end cursor-pointer">
                                    {/* Image with zoom on hover */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover overflow-hidden transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-colors duration-500 " />
                                    </div>
                                    {/* Label */}
                                    <div className="absolute -top-1 transform -translate-x-1/2 left-1/2">
                                        <span className="bg-yellow-300 text-xs font-bold px-4 py-1.5 flex items-center justify-center rounded shadow uppercase tracking-wide text-gray-900">
                                            {item.label}
                                        </span>
                                    </div>
                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center justify-end h-full pb-8 px-4">
                                        {/* Divider */}
                                        <div className="h-1 w-12 bg-yellow-300 rounded-full mb-4" />
                                        {/* Title */}
                                        <h3 className="text-white text-lg  font-bold text-center mb-6 transition-colors leading-snug duration-300 group-hover:text-yellow-300 line-clamp-3">
                                            {item.title}
                                        </h3>
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-black/80 flex items-center justify-center transition-colors duration-300 group-hover:bg-yellow-300">
                                            {getIcon(item.icon, 'text-white group-hover:text-yellow-900')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
