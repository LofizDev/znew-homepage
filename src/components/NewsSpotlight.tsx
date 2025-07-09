import Image from 'next/image';
import Link from 'next/link';

import type { NewsSpotlight } from '@/types/article';

import SponsorCoffeThumbnail from '../../public/sponsor.webp';
import SponsorThumbnail from '../../public/trungnguyen_bg.webp';
import PodcastThumbnail from '../../public/Vodcast_thumbnail.webp';

type NewsSpotlightProps = {
    newsSpotlight: NewsSpotlight
}

export default function NewsSpotlight({ newsSpotlight }: NewsSpotlightProps) {
    const featuredPodcast = newsSpotlight.podcasts[0]
    const mainPodcasts = newsSpotlight.podcasts.slice(1)
    return (
        <section className="px-4 py-6">
            <div className="grid max-w-[1100px] mx-auto grid-cols-1 lg:grid-cols-3 gap-x-20">
                {/* Main news list */}
                <div className="md:col-span-2 flex flex-col gap-5">
                    {newsSpotlight.mainNews.map((item, idx) => (
                        <Link key={idx} href={`/article/${item.id}`} className="flex cursor-pointer gap-4 border-b last:border-b-0 pb-5 hover:opacity-90 transition-opacity">
                            <div className="relative lg:w-[257px] w-[144px] lg:h-[172px] h-[96px]" >
                                <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                            </div>
                            <div className="flex-1 flex flex-col justify-start">
                                <h3 className="font-bold text-xl text-gray-900  hover:text-blue-500 transition-all leading-snug mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Sidebar */}
                <div className='grid grid-cols-1 gap-5'>
                    <aside className="bg-white lg:block hidden rounded-lg p-4 border md:col-span-1 flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-4">Đọc nhiều</h4>
                        <div className="flex flex-col gap-4">
                            {newsSpotlight.mostRead.map((item, idx) => (
                                <Link key={idx} href={`/article/${item.id}`} className="flex gap-3 cursor-pointer items-start hover:opacity-90 transition-opacity">
                                    <div className="relative" style={{ width: 72, height: 72 }}>
                                        <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[11px] font-bold uppercase text-gray-600 mb-1">asdfasd</div>
                                        <div className="text-sm font-medium text-gray-900 hover:text-blue-500 transition-all leading-tight line-clamp-2">{item.title}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>

                    {/* Podcast */}
                    <aside
                        className="relative lg:block hidden rounded-md p-6 flex-1  flex-col overflow-hidden"
                        style={{
                            background: 'linear-gradient(180deg, #23243a 0%, #18192a 100%)',
                        }}
                    >
                        {/* Blurred background image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={PodcastThumbnail}
                                alt="Podcast background"
                                fill
                                className="object-cover w-full h-full blur-[80px] scale-110 opacity-40"
                                priority
                            />
                        </div>
                        {/* Content */}
                        <h4 className="relative z-10 text-white font-bold text-lg text-center tracking-widest mb-4">PODCAST</h4>
                        <Link href={`/article/${featuredPodcast.id}`} className="relative cursor-pointer z-10 mb-4 block hover:opacity-90 transition-opacity">
                            <div className="relative mx-auto rounded-lg overflow-hidden mb-2 min-w-full min-h-[175px] " >
                                <Image src={PodcastThumbnail} alt={'PodcastThumbnail'} fill className="object-cover object-bottom" />
                            </div>
                            <div className="text-white font-bold text-base leading-snug hover:text-blue-500 transition-all">{featuredPodcast.title}</div>
                        </Link>
                        <div className="relative z-10 flex flex-col gap-3">
                            {mainPodcasts.map((item, idx) => (
                                <Link key={idx} href={`/article/${item.id}`} className="flex gap-3 cursor-pointer items-center border-t border-t-gray-400/30 pt-3 hover:opacity-90 transition-opacity">
                                    <div className="relative rounded overflow-hidden flex-shrink-0" style={{ width: 72, height: 49 }}>
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <div className="text-white text-sm font-medium leading-tight hover:text-blue-500 transition-all line-clamp-2">{item.title}</div>
                                </Link>
                            ))}
                        </div>
                    </aside>

                    {/* Sponsors */}
                    <aside className='w-full relative lg:block hidden'>
                        <div className=" w-full" style={{ height: 600 }}>
                            <Image src={SponsorThumbnail} alt={'SponsorThumbnail'} fill className="object-cover rounded" />
                        </div>
                        <div
                            style={{
                                height: 180,
                                width: '90%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                top: 150,
                            }}
                            className="absolute rounded-lg overflow-hidden"
                        >
                            <Image
                                src={SponsorCoffeThumbnail}
                                alt="SponsorThumbnail"
                                fill
                                className="object-cover"
                            />

                            <div
                                className="absolute inset-0 rounded-lg"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.06) 60%, rgba(0,0,0,1.05) 100%)',
                                }}
                            />
                            <div className="absolute left-0 bottom-0 w-full px-4 pb-3 z-10">
                                <div className="text-white text-sm font-medium leading-tight">
                                    Kỳ IX: Quỷ Cốc Tử mưu lược toàn thư - Ma thiên
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] transform -translate-x-1/2  left-1/2 absolute  top-82 grid grid-cols-2 gap-3 my-4">
                            {newsSpotlight.sponsors.map(sponsor => (
                                <Link key={sponsor.id} href={`/article/${sponsor.id}`} className="block hover:opacity-90 transition-opacity">
                                    <div className="rounded-lg overflow-hidden flex flex-col items-center">
                                        <div className="relative w-full h-[85px] mt-2">
                                            <Image src={sponsor.image} alt="Trung Nguyên Legend" fill className="object-cover rounded" />
                                        </div>
                                        <div className="text-black text-xs font-medium  pt-1 text-start line-clamp-2">
                                            {sponsor.title}
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </aside>



                </div>
            </div>
        </section>
    );
} 