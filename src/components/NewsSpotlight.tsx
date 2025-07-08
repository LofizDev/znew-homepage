import Image from 'next/image';

import SponsorCoffeThumbnail from '../../public/sponsor.webp';
import SponsorThumbnail from '../../public/trungnguyen_bg.webp';
import PodcastThumbnail from '../../public/Vodcast_thumbnail.webp';

const mainNews = [
    {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        title: 'Doanh nghiệp bất động sản ký hợp đồng gần 40 tỷ đồng với Quang Hải',
        summary: 'Tập đoàn Sunshine đã ký kết 4 thỏa thuận phân bổ quyền sử dụng hình ảnh cá nhân của cầu thủ Nguyễn Quang Hải cho các công ty trong hệ sinh thái, tổng giá trị 38 tỷ đồng.'
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Chồng MC Minh Trang thừa nhận thiếu kiềm chế',
        summary: 'Vũ Đức Thành, chồng MC Minh Trang, lên tiếng xin lỗi trên fanpage Làng Hào Hức. Anh thừa nhận bản thân đã có những lời nói thiếu kiềm chế khi trao đổi với phụ huynh.'
    },
    {
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
        title: 'Chelsea chốt giá bán Nkunku cho MU',
        summary: 'Chelsea sẵn sàng chịu lỗ với thương vụ Christopher Nkunku khi Manchester United cân nhắc chiêu mộ tiền đạo này trong kỳ chuyển nhượng mùa hè 2025.'
    },
];

const sidebarNews = [
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        category: 'SỨC KHỎE',
        title: '30 tuổi suy thận giai đoạn cuối vì bỏ qua dấu hiệu cảnh báo',
    },
    {
        image: 'https://images.unsplash.com/photo-1502767089025-6572583495b4',
        category: 'THẾ GIỚI',
        title: 'Nghi án thảm sát giới đá gà chấn động Philippines',
    },
    {
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        category: 'KINH DOANH',
        title: 'Chân dung cựu sếp TPBank vừa bị khởi tố',
    },
    {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        category: 'XÃ HỘI',
        title: 'Người bán trà đá đuổi cô gái đứng trên vỉa hè Hà Nội bị phạt 2,5 triệu',
    },
    {
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
        category: 'GIÁO DỤC',
        title: 'Người nước ngoài, thầy giáo 4 lần IELTS 9.0 cũng giải sai đề Tiếng Anh',
    },
];

const podcasts = [
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: "Tân Hoa hậu Phương Linh: 'Các sếp cho treo hình tôi khắp công ty'",
    },
    {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        title: "Thu Trang: 'Tôi tham vọng có phim mấy trăm tỷ đồng'",
    },
    {
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
        title: "BAT Việt Nam: Phát triển bền vững không phải đánh đổi lợi ích kinh tế",
    },
    {
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
        title: "Lãnh đạo Shopee: 'Cạnh tranh là cần thiết'",
    },
];

export default function NewsSpotlight() {
    return (
        <section className="px-4 py-6">
            <div className="grid max-w-[1100px] mx-auto grid-cols-1 lg:grid-cols-3 gap-x-20">
                {/* Main news list */}
                <div className="md:col-span-2 flex flex-col gap-5">
                    {mainNews.map((item, idx) => (
                        <div key={idx} className="flex cursor-pointer gap-4 border-b last:border-b-0 pb-5">
                            <div className="relative lg:w-[257px] w-[144px] lg:h-[172px] h-[96px]" >
                                <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                            </div>
                            <div className="flex-1 flex flex-col justify-start">
                                <h3 className="font-bold text-xl text-gray-900  hover:text-blue-500 transition-all leading-snug mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Sidebar */}
                <div className='grid grid-cols-1 gap-5'>
                    <aside className="bg-white lg:block hidden rounded-lg p-4 border md:col-span-1 flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-4">Đọc nhiều</h4>
                        <div className="flex flex-col gap-4">
                            {sidebarNews.map((item, idx) => (
                                <div key={idx} className="flex gap-3 cursor-pointer items-start">
                                    <div className="relative" style={{ width: 72, height: 72 }}>
                                        <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[11px] font-bold uppercase text-gray-600 mb-1">{item.category}</div>
                                        <div className="text-sm font-medium text-gray-900 hover:text-blue-500 transition-all leading-tight line-clamp-2">{item.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Podcast */}
                    <aside
                        className="relative lg:block hidden rounded-md p-6 flex-1 flex flex-col overflow-hidden"
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
                        <div className="relative cursor-pointer z-10 mb-4 ">
                            <div className="relative mx-auto rounded-lg overflow-hidden mb-2 min-w-full min-h-[175px] " >
                                <Image src={PodcastThumbnail} alt={'PodcastThumbnail'} fill className="object-cover object-bottom" />
                            </div>
                            <div className="text-white font-bold text-base leading-snug hover:text-blue-500 transition-all">{podcasts[0].title}</div>
                        </div>
                        <div className="relative z-10 flex flex-col gap-3">
                            {podcasts.slice(1).map((item, idx) => (
                                <div key={idx} className="flex gap-3 cursor-pointer items-center border-t border-t-gray-400/30 pt-3">
                                    <div className="relative rounded overflow-hidden flex-shrink-0" style={{ width: 72, height: 49 }}>
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <div className="text-white text-sm font-medium leading-tight hover:text-blue-500 transition-all line-clamp-2">{item.title}</div>
                                </div>
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
                            <div className="rounded-lg overflow-hidden flex flex-col items-center">
                                <div className="relative w-full h-[85px] mt-2">
                                    <Image src="https://images.unsplash.com/photo-1562737794-88835094442e?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trung Nguyên Legend" fill className="object-cover rounded" />
                                </div>
                                <div className="text-black text-xs font-medium  pt-1 text-start line-clamp-2">
                                    Trung Nguyên Legend liên tục sáng tạo chinh phục toàn…
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden flex flex-col items-center">
                                <div className="relative w-full h-[85px] mt-2">
                                    <Image src="https://images.unsplash.com/photo-1562737794-88835094442e?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trung Nguyên E-Coffee" fill className="object-cover rounded" />
                                </div>
                                <div className="text-black text-xs font-medium pt-1 text-start line-clamp-2">
                                    Trung Nguyên E-Coffee tiếp tục phát triển mạnh mẽ tại Mỹ
                                </div>
                            </div>
                        </div>
                    </aside>



                </div>
            </div>
        </section>
    );
} 