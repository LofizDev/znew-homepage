import Books from '@/components/Books';
import CategoryGrid from '@/components/CategoryGrid';
import CategoryNews from '@/components/CategoryNews';
import Magazine from '@/components/Magazine';
import MainNews from '@/components/MainNews';
import Multimedia from '@/components/Multimedia';
import NewsSpotlight from '@/components/NewsSpotlight';
import TrendingTags from '@/components/TrendingTags';
import VideoPopular from '@/components/VideoPopular';

async function getNews() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/news`, { cache: 'no-store' });
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default async function Home() {
  const { trendingTags, mainNews, books, multipleTags, multimedia,
    newsSpotlight, categoryNews, categoryGrid, magazine, videoPopular } = await getNews();


  return (
    <main>
      <TrendingTags trendingTags={trendingTags} />
      <MainNews news={mainNews} />
      <Books books={books} />
      <Multimedia multipleTags={multipleTags} multimedia={multimedia} />
      <NewsSpotlight newsSpotlight={newsSpotlight} />
      <CategoryNews categoryNews={categoryNews} />
      <CategoryGrid categories={categoryGrid} />
      <Magazine magazine={magazine} />
      <VideoPopular videos={videoPopular} />
    </main>
  );
}
