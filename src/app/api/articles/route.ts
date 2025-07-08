import { NextResponse } from 'next/server';

export async function GET() {
    // Main articles for the homepage
    const mainArticles = [
        {
            id: 1,
            title: 'Lý Long Cơ khóc khi đón người yêu ra tù',
            summary: 'Diễn viên Lý Long Cơ cầm hoa, rơi nước mắt khi đến đón hôn thê Vương Thanh Hà ra tù.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1',
        },
        {
            id: 2,
            title: 'Real đau đầu vì Endrick',
            summary: 'Tương lai của tài năng trẻ Endrick tại Real Madrid đang trở thành chủ đề được bàn tán sôi nổi.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2',
        },
        {
            id: 3,
            title: 'Jun Phạm đính chính',
            summary: 'Jun Phạm cho biết số tiền mua laptop và chỉ trả học phí cho gia đình vùng cao trong chương trình Gia đình Haha không phải một mình anh bỏ ra.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3',
        },
        // ...more articles
    ];

    // Most read articles for the sidebar
    const mostRead = [
        {
            id: 101,
            title: 'Nữ ca sĩ giải đúng 40/40 câu đề thi tốt nghiệp THPT 2025',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
            category: 'Giáo dục',
        },
        {
            id: 102,
            title: 'Tâm Tít táo bạo với váy ren xuyên thấu',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
            category: 'Lifestyle',
        },
        {
            id: 103,
            title: 'Nhan sắc mẹ đơn thân vừa cưới cầu thủ Dương Thanh Hào',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
            category: 'Đời sống',
        },
        {
            id: 104,
            title: 'Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam',
            image: 'https://images.unsplash.com/photo-1502767089025-6572583495b4',
            category: 'Kinh doanh',
        },
        {
            id: 105,
            title: 'Vardy bị chỉ trích tham tiền',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
            category: 'Thể thao',
        },
    ];

    // Podcast widget data
    const podcasts = [
        {
            id: 201,
            title: 'Tân Hoa hậu Phương Linh: "Các sếp cho treo hình tôi khắp công ty"',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        },
        {
            id: 202,
            title: 'Thu Trang: "Tôi tham vọng có phim mấy trăm tỷ đồng"',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        },
        {
            id: 203,
            title: 'BAT Việt Nam: Phát triển bền vững không phải đánh đổi lợi ích kinh tế',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        },
        {
            id: 204,
            title: 'Lãnh đạo Shopee: "Cạnh tranh là cần thiết"',
            image: 'https://images.unsplash.com/photo-1502767089025-6572583495b4',
        },
    ];

    return NextResponse.json({
        mainArticles,
        mostRead,
        podcasts,
    });
} 