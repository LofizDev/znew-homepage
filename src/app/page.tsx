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
    const baseUrl = process.env.PUBLIC_DOMAIN || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/news`, { cache: 'no-store' });
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default async function Home() {
  const data = await getNews();

  if (!data) {
    return (
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
            <p className="text-gray-600">Unable to load news data</p>
          </div>
        </div>
      </main>
    );
  }

  const { trendingTags, mainNews, books, multipleTags, multimedia,
    newsSpotlight, categoryNews, categoryGrid, magazine, videoPopular } = data;


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
