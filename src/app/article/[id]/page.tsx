export default function ArticleDetail({ params }: { params: { id: string } }) {
    return (
        <div style={{ padding: 40, textAlign: 'center' }}>
            <h1>Chi tiết bài viết (dummy)</h1>
            <p>ID bài viết: {params.id}</p>
            <p>Trang này chỉ là dummy để chuyển trang.</p>
        </div>
    );
} 