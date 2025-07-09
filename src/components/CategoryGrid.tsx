import Image from 'next/image';
import Link from 'next/link';

type Article = {
    image: string;
    title: string;
    id?: string;
};
type Category = {
    name: string;
    articles: Article[];
};

type CategoryGridProps = {
    categories: Category[];
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <div className='px-4'>
            <div className="max-w-[1100px] mx-auto mt-14 pt-5 border-t-[2px] border-t-black">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((cat) => {
                        const [mainArticle, secondaryArticle1, secondaryArticle2] = cat.articles;

                        return (
                            <div key={cat.name}>
                                {/* Title */}
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-800">
                                    <span className="text-red-500 text-xl">/</span>
                                    <span className="uppercase text-gray-800">{cat.name}</span>
                                </h3>
                                {/* Main Article (only on lg+) */}
                                <div className="hidden lg:block">
                                    <Link href={`/article/${mainArticle.id || 'main'}`} className="block hover:opacity-90 transition-opacity">
                                        <Image
                                            src={mainArticle.image}
                                            alt={mainArticle.title}
                                            width={300}
                                            height={180}
                                            className="w-full h-[140px] object-cover rounded"
                                        />
                                        <div className="font-bold text-base mt-3 text-gray-800 mb-2 line-clamp-2">{mainArticle.title}</div>
                                    </Link>
                                </div>
                                {/* Small Articles */}
                                <div className="grid grid-cols-1 gap-7 mt-4 border-t pt-4">
                                    <div className="lg:hidden">
                                        {cat.articles.map((art, idx) => (
                                            <Link key={idx} href={`/article/${art.id || `article-${idx}`}`} className="block hover:opacity-90 transition-opacity">
                                                <div className="flex gap-2 mb-4 sm:flex-row flex-col">
                                                    <Image
                                                        src={art.image}
                                                        alt={art.title}
                                                        width={105}
                                                        height={70}
                                                        className="min-w-[105px] sm:w-[105px] w-full sm:min-h-[70px] min-h-[100px] max-h-[70px] object-cover rounded"
                                                    />
                                                    <span className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight">{art.title}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="hidden lg:block">
                                        {[secondaryArticle1, secondaryArticle2].map((art, idx) => (
                                            <Link key={idx} href={`/article/${art.id || `secondary-${idx}`}`} className="block hover:opacity-90 transition-opacity">
                                                <div className="flex gap-3 border-t first:border-t-0 pt-3 mb-5">
                                                    <Image
                                                        src={art.image}
                                                        alt={art.title}
                                                        width={105}
                                                        height={70}
                                                        className="min-w-[105px] min-h-[70px] max-h-[70px] object-cover rounded"
                                                    />
                                                    <span className="text-sm font-semibold text-gray-800">{art.title}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
