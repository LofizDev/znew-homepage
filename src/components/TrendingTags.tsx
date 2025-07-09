import Image from 'next/image';

type TrendingTagsProps = {
    trendingTags: string[]
}

export default function TrendingTags({ trendingTags }: TrendingTagsProps) {
    return (
        <div className="bg-white px-4 md:block hidden">
            <div className="max-w-[1100px] mx-auto py-3 flex gap-2 overflow-x-auto">
                <Image src="https://static.znews.vn/images/stat.svg" alt="stat" width={24} height={24} />
                {trendingTags.map(tag => (
                    <span
                        key={tag}
                        className="bg-gray-100 flex items-center text-gray-800 px-3 rounded-full text-sm whitespace-nowrap cursor-pointer hover:bg-gray-200 transition">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
} 