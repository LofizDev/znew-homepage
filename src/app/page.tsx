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
    const baseUrl = process.env.PUBLIC_DOMAIN;
    const url = baseUrl ? `${baseUrl}/api/news` : 'http://localhost:3000/api/news';
    const response = await fetch(url, { cache: 'no-store' });
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default async function Home() {
  const data = await getNews();

  if (!data) return null

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
