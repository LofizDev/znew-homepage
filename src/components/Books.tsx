"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import Link from 'next/link';
import type { CustomArrowProps } from 'react-slick';
import Slider from 'react-slick';

import { Article } from '@/types/article';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

function NextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
        <button
            className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-1"
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
            className="absolute left-2 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-1"
            onClick={onClick}
            aria-label="Previous"
            type="button"
        >
            <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
        </button>
    );
}

type BookProps = {
    books: Article[]
}

export default function Books({ books }: BookProps) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 540,
                settings: { slidesToShow: 2 }
            }
        ]
    };

    return (
        <div className='px-5'>
            <div className="max-w-[1100px] mx-auto py-6">
                <h2 className="font-bold border-b border-b-gray-200 text-lg pb-3 mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-red-500 text-xl">/</span>BOOKS
                </h2>
                <Slider {...settings}>
                    {books.map(book => (
                        <div
                            key={book.title}
                            className="p-2"
                        >
                            <Link href={`/article/${book.id}`} className="block hover:opacity-90 transition-opacity">
                                <div className="min-w-[180px] h-[216px] bg-white rounded shadow flex flex-col justify-between">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        width={160}
                                        height={136}
                                        className="w-full h-[136px] object-cover rounded"
                                    />
                                    <div className="font-semibold text-gray-800 p-3 h-full text-sm">{book.title}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
} 