

export default function Footer() {
    return (
        <footer className="bg-gray-100 px-5 rounded-b-lg md:mt-7 mt-2">
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between md:items-end items-start gap-6 py-6 text-xs text-gray-500">
                <div className="space-y-1 leading-relaxed">
                    <div>Tạp chí điện tử Tri Thức</div>
                    <div>Cơ quan chủ quản: Hội Xuất bản Việt Nam</div>
                    <div>
                        Giấy phép báo chí: số 75/GP-BTTTT và số 442/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020 và ngày 29/11/2023
                    </div>
                    <div>Phó tổng biên tập phụ trách: Lâm Quang Hiếu</div>
                    <div>© Toàn bộ bản quyền thuộc Tri Thức</div>
                </div>
                <div className="space-y-1 leading-relaxed md:text-right">
                    <div>Tòa soạn: Tầng 10, D29 Phạm Văn Bạch, phường Yên Hòa, Hà Nội</div>
                    <div>Hotline: 0931.222.666</div>
                    <div>Liên hệ: toasoan@znews.vn</div>
                </div>
            </div>
        </footer>
    );
} 