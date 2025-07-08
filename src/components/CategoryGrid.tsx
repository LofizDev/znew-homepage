import Image from 'next/image';

type Article = { image: string; title: string };
type Category = {
    name: string;
    articles: Article[]; // 3 items
};

const CATEGORIES: Category[] = [
    {
        name: 'Công Nghệ',
        articles: [
            {
                image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
                title: "Apple lại trở thành 'nạn nhân' của Meta",
            },
            {
                image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
                title: "Công nghệ 'mắt thần' tại giải Wimbledon bị chế nhạo",
            },
            {
                image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: "Camera an ninh Trung Quốc có thể 'zoom tới Mặt trăng'?",
            },
        ],
    },
    {
        name: 'Sức Khỏe',
        articles: [
            {
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
                title: 'Bé gái 8 tuổi nhập viện lúc nửa đêm vì ban nhiễm khuẩn',
            },
            {
                image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
                title: 'Thiếu máu thiếu sắt đe dọa sức khỏe phụ nữ thế nào?',
            },
            {
                image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Nốt sưng nhỏ ở mắt khi nào có thể thành biến chứng lớn?',
            },
        ],
    },
    {
        name: 'Đời Sống',
        articles: [
            {
                image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
                title: 'Cảnh tượng nhân viên làm việc dưới bể bơi gây sốc ở Trung Quốc',
            },
            {
                image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
                title: 'Hổ trắng "Ngộ Không" nổi tiếng Thảo Cầm Viên qua đời',
            },
            {
                image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Kết đắng cho KOL Mỹ tung ảnh nóng bạn gái mới của tình cũ lên mạng',
            },
        ],
    },
    {
        name: 'Du Lịch',
        articles: [
            {
                image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
                title: 'Núi lửa đầu lâu và loạt ảnh trên cao gây sửng sốt',
            },
            {
                image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
                title: 'Khách Trung nườm nượp đi Nhật Bản sau lời đồn động đất',
            },
            {
                image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Rùa bạch tạng quý hiếm chào đời ở Côn Đảo',
            },
        ],
    },
];

export default function CategoryGrid() {
    return (
        <div className='px-4'>
            <div className="max-w-[1100px] mx-auto mt-14 pt-5 border-t-[2px] border-t-black">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {CATEGORIES.map((cat) => (
                        <div key={cat.name}>
                            {/* Title */}
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-800">
                                <span className="text-red-500 text-xl">/</span>
                                <span className="uppercase text-gray-800">{cat.name}</span>
                            </h3>
                            {/* Main Article (only on lg+) */}
                            <div className="hidden lg:block">
                                <Image
                                    src={cat.articles[0].image}
                                    alt={cat.articles[0].title}
                                    width={300}
                                    height={180}
                                    className="w-full h-[140px] object-cover rounded"
                                />
                                <div className="font-bold text-base mt-3 text-gray-800 mb-2 line-clamp-2">{cat.articles[0].title}</div>
                            </div>
                            {/* Small Articles */}
                            <div className="grid grid-cols-1 gap-7 mt-4 border-t pt-4">
                                <div className="lg:hidden">
                                    {cat.articles.map((art, idx) => (
                                        <div key={idx} className="flex gap-2 mb-4 sm:flex-row flex-col">
                                            <Image
                                                src={art.image}
                                                alt={art.title}
                                                width={105}
                                                height={70}
                                                className="min-w-[105px] sm:w-[105px] w-full sm:min-h-[70px] min-h-[100px] max-h-[70px] object-cover rounded"
                                            />
                                            <span className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight">{art.title}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="hidden lg:block">
                                    {[cat.articles[1], cat.articles[2]].map((art, idx) => (
                                        <div key={idx} className="flex gap-3 border-t first:border-t-0 pt-3 mb-5">
                                            <Image
                                                src={art.image}
                                                alt={art.title}
                                                width={105}
                                                height={70}
                                                className="min-w-[105px] min-h-[70px] max-h-[70px] object-cover rounded"
                                            />
                                            <span className="text-sm font-semibold text-gray-800">{art.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
