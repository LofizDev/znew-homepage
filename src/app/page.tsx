import Books from '@/components/Books';
import CategoryGrid from '@/components/CategoryGrid';
import CategoryNews from '@/components/CategoryNews';
import Magazine from '@/components/Magazine';
import MainNews from '@/components/MainNews';
import Multimedia from '@/components/Multimedia';
import NewsSpotlight from '@/components/NewsSpotlight';
import TrendingTags from '@/components/TrendingTags';
import VideoPopular from '@/components/VideoPopular';

export default function Home() {
  return (
    <main>
      <TrendingTags />
      <MainNews />
      <Books />
      <Multimedia />
      <NewsSpotlight />
      <CategoryNews
        category="KINH DOANH"
        main={{
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "'Siêu phường' mới nổi tại Hà Nội, TP.HCM",
          summary: "Việc bỏ đơn vị hành chính cấp quận và sáp nhập địa giới hành chính các phường đã định hình lại bản đồ doanh nghiệp, từ đó xuất hiện những “siêu phường tỷ USD” tại Hà Nội, TP.HCM."
        }}
        secondary={[
          { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Máy bay Vietnam Airlines phải hạ cánh khẩn cấp tại Ấn Độ" },
          { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Dòng chảy hàng hóa Trung Quốc đổi hướng" }
        ]}
        list={[
          { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam" },
          { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Giá vàng bất ngờ lao dốc" },
          { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam" },
          { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Giá vàng bất ngờ lao dốc" },
          { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam" },
        ]}
      />
      <CategoryNews
        category="LIFE STYLE"
        main={{
          image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "'Siêu phường' mới nổi tại Hà Nội, TP.HCM",
          summary: "Việc bỏ đơn vị hành chính cấp quận và sáp nhập địa giới hành chính các phường đã định hình lại bản đồ doanh nghiệp, từ đó xuất hiện những “siêu phường tỷ USD” tại Hà Nội, TP.HCM."
        }}
        secondary={[
          { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Máy bay Vietnam Airlines phải hạ cánh khẩn cấp tại Ấn Độ" },
          { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Dòng chảy hàng hóa Trung Quốc đổi hướng" }
        ]}
        list={[
          { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam" },
          { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Giá vàng bất ngờ lao dốc" },
          { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam" },
          { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Giá vàng bất ngờ lao dốc" },
          { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam" },
        ]}
      />
      <CategoryGrid />
      <Magazine />
      <VideoPopular />
    </main>
  );
}
