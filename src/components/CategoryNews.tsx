import Image from 'next/image';

type Article = {
    image: string;
    title: string;
    summary?: string;
};

type CategoryNewsProps = {
    category: string;
    main: Article;
    secondary: Article[]; // 2 items
    list: Article[];      // 5-6 items
};

export default function CategoryNews({ category, main, secondary, list }: CategoryNewsProps) {
    return (
        <div className='px-5 mb-3'>
            <div className="max-w-[1100px] mx-auto">
                {/* Section Title */}
                <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <span className="text-red-500 text-2xl">/</span>
                    <span className="uppercase text-gray-800">{category}</span>
                </h2>
                {/* Main Layout */}
                <div className="flex lg:flex-row flex-col gap-6">
                    <div className='grid lg:w-[70%] w-full lg:grid-cols-3 md:grid-cols-3  grid-cols-1 md:gap-4 gap-0'>
                        {/* Main Article */}
                        <div className="w-full col-span-2 ">
                            <Image
                                src={main.image}
                                alt={main.title}
                                width={600}
                                height={346}
                                className="w-full max-h-[346px] object-cover rounded"
                            />
                            <h3 className="font-bold md:text-2xl text-xl text-gray-800 mt-3 mb-1">{main.title}</h3>
                            {main.summary && <p className="text-gray-700 text-sm">{main.summary}</p>}
                        </div>
                        {/* Secondary Articles */}
                        <div className="grid grid-cols-2 md:grid-cols-1 md:mt-0 mt-4 gap-4 col-span-1 w-full">
                            {secondary.map((art) => (
                                <div key={art.title}>
                                    <Image
                                        src={art.image}
                                        alt={art.title}
                                        width={300}
                                        height={166}
                                        className="w-full max-h-[166px] object-cover rounded"
                                    />
                                    <h4 className="font-semibold md:text-base text-sm mt-2 text-gray-800">{art.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-x-7 lg:gap-x-4 gap-x-0  gap-4 lg:border-l border-l-none border-l-gray-200 lg:pl-5 pl-0 flex-1 w-full">
                        {list.map((art, idx) => (
                            <div
                                key={idx}
                                className={
                                    `flex gap-4 items-start justify-between border-b pb-4 last:border-b-0 border-b-gray-200
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 
