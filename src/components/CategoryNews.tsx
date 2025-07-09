import Image from 'next/image';
import Link from 'next/link';

type Article = {
    image: string;
    title: string;
    summary?: string;
    id?: string;
};

type CategoryData = {
    category: string;
    main: Article;
    secondary: Article[];
    list: Article[];
};

type CategoryNewsProps = {
    categoryNews: CategoryData[];
};

export default function CategoryNews({ categoryNews }: CategoryNewsProps) {
    const renderCategory = (categoryData: CategoryData) => (
        <div className='px-5 mb-3' key={categoryData.category}>
            <div className="max-w-[1100px] mx-auto">
                {/* Section Title */}
                <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <span className="text-red-500 text-2xl">/</span>
                    <span className="uppercase text-gray-800">{categoryData.category}</span>
                </h2>
                {/* Main Layout */}
                <div className="flex lg:flex-row flex-col gap-6">
                    <div className='grid lg:w-[70%] w-full lg:grid-cols-3 md:grid-cols-3  grid-cols-1 md:gap-4 gap-0'>
                        {/* Main Article */}
                        <div className="w-full col-span-2 ">
                            <Link href={`/article/${categoryData.main.id || 'main'}`} className="block hover:opacity-90 transition-opacity">
                                <Image
                                    src={categoryData.main.image}
                                    alt={categoryData.main.title}
                                    width={600}
                                    height={346}
                                    className="w-full max-h-[346px] object-cover rounded"
                                />
                                <h3 className="font-bold md:text-2xl text-xl text-gray-800 mt-3 mb-1">{categoryData.main.title}</h3>
                                {categoryData.main.summary && <p className="text-gray-700 text-sm">{categoryData.main.summary}</p>}
                            </Link>
                        </div>
                        {/* Secondary Articles */}
                        <div className="grid grid-cols-2 md:grid-cols-1 md:mt-0 mt-4 gap-4 col-span-1 w-full">
                            {categoryData.secondary.map((art, idx) => (
                                <Link key={art.title} href={`/article/${art.id || `secondary-${idx}`}`} className="block hover:opacity-90 transition-opacity">
                                    <Image
                                        src={art.image}
                                        alt={art.title}
                                        width={300}
                                        height={166}
                                        className="w-full max-h-[166px] object-cover rounded"
                                    />
                                    <h4 className="font-semibold md:text-base text-sm mt-2 text-gray-800">{art.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-x-7 lg:gap-x-4 gap-x-0  gap-4 lg:border-l border-l-none border-l-gray-200 lg:pl-5 pl-0 flex-1 w-full">
                        {categoryData.list.map((art, idx) => (
                            <Link
                                key={idx}
                                href={`/article/${art.id || `list-${idx}`}`}
                                className={
                                    `flex gap-4 items-start justify-between border-b pb-4 last:border-b-0 border-b-gray-200 hover:opacity-90 transition-opacity
                                    ${idx > 3 ? 'hidden lg:flex' : 'flex'}`
                                }
                            >
                                <span className="font-semibold text-sm text-gray-800">{art.title}</span>
                                <Image
                                    src={art.image}
                                    alt={art.title}
                                    width={73}
                                    height={73}
                                    className="w-[73px] h-[73px] object-cover rounded"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {categoryNews.map(renderCategory)}
        </>
    );
} 
