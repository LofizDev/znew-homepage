"use client";
import {
  useRef,
  useState,
} from 'react';

import Image from 'next/image';

import { PlayIcon } from '@heroicons/react/24/solid';

type Video = {
    id: number;
    url: string;
    thumb: string;
    title: string;
    category: string;
};

type VideoPopularProps = {
    videos: Video[];
};

export default function VideoPopular({ videos }: VideoPopularProps) {
    const [current, setCurrent] = useState(0);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const handleSelect = (idx: number) => {
        setCurrent(idx);
        setPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className='px-5'>
            <section className="max-w-[1100px] mx-auto py-8">
                <h2 className="font-bold text-xl mb-6 flex items-center gap-2 text-gray-800">
                    <span className="text-red-500 text-2xl">/</span>VIDEO
                </h2>
                <div className="flex flex-col lg:flex-row gap-3">
                    {/* Main Video */}
                    <div className="flex-1 flex items-center justify-center rounded-lg relative w-full aspect-video overflow-hidden lg:min-h-[320px] lg:max-h-[520px]">
                        <video
                            ref={videoRef}
                            src={videos[current].url}
                            poster={videos[current].thumb}
                            className="w-full h-full object-cover bg-black"
                            controls={playing}
                            onEnded={() => setPlaying(false)}
                        />
                        {/* Play Button Overlay (centered, only when paused) */}
                        {!playing && (
                            <button
                                className="absolute inset-0 flex items-center justify-center transition"
                                onClick={handlePlayPause}
                                aria-label="Play video"
                            >
                                <span className="flex cursor-pointer items-center bg-[#00558aba]  justify-center w-15 h-15 rounded-xl transition">
                                    <PlayIcon className="w-12 h-12 text-white group-hover:text-yellow-400" />
                                </span>
                            </button>
                        )}
                    </div>
                    {/* Video List */}
                    <div className="w-full lg:w-[25%] max-w-full">
                        <div className="h-full rounded-lg bg-gray-100 overflow-y-auto pr-2 custom-scrollbar">
                            {videos.map((v, idx) => (
                                <div
                                    key={v.id}
                                    className={`flex items-start gap-3 pt-3 px-3 rounded cursor-pointer transition group hover:bg-gray-100`}
                                    onClick={() => handleSelect(idx)}
                                >
                                    <div className="relative min-w-[120px] w-[120px] h-[70px] rounded overflow-hidden flex-shrink-0">
                                        <Image
                                            src={v.thumb}
                                            alt={v.title}
                                            fill
                                            className="object-cover rounded"
                                        />

                                        <span className="absolute bottom-0 left-0 flex items-center justify-center">
                                            <span className="w-5 h-5 rounded-sm bg-[#00558aba] flex items-center justify-center shadow-md">
                                                <PlayIcon className='w-4 h-4 text-white' />
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-gray-800 font-medium line-clamp-2 leading-tight">{v.title}</div>
                                        <div className="text-xs text-gray-500 font-semibold uppercase mt-1">{v.category}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Custom scrollbar styles */}
            </section>
        </div>
    );
}
