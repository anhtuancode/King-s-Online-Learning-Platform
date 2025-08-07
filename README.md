# 🎓 King’s Online Learning Platform (KOLP)

> ✍️ **Tác giả:** Nguyễn Anh Tuấn  
> 🛠️ **Dự án:** Nền tảng học trực tuyến toàn diện KOLP  
> 📬 **Liên hệ:** anhtuancode@gmail.com  

---

## 🚀 Giới thiệu

**KOLP (King’s Online Learning Platform)** là một nền tảng học trực tuyến giúp sinh viên dễ dàng đăng ký khóa học, xem nội dung bài học, làm bài kiểm tra, nhận chứng chỉ. Đồng thời, giảng viên và quản trị viên có thể theo dõi tiến độ học tập, quản lý khóa học và phân tích hiệu suất qua dashboard thời gian thực.  
Hệ thống hỗ trợ phân quyền người dùng theo vai trò (**👨‍🎓 Sinh viên**, **👩‍🏫 Giảng viên**, **👨‍💼 Admin**), tích hợp AI dự đoán nguy cơ bỏ học, và triển khai thực tế với Docker, Vercel, Render.

---

## 🧩 Tính năng chính

- ✅ Đăng ký, đăng nhập và phân quyền người dùng  
- ✅ Quản lý khóa học: tạo, duyệt, chỉnh sửa, xoá  
- ✅ Ghi danh sinh viên (thủ công / tự động)  
- ✅ Theo dõi tiến độ học tập và phân tích hiệu suất  
- ✅ Dự đoán nguy cơ bỏ học bằng AI  
- ✅ Dashboard thống kê theo thời gian thực  
- ✅ Triển khai nhanh chóng với Docker, Vercel, Render  

---

## ⚙️ Kiến trúc hệ thống

| Thành phần       | Công nghệ                     | Vai trò                                                                 |
|------------------|-------------------------------|-------------------------------------------------------------------------|
| Frontend UI      | ReactJS + TailwindCSS         | Giao diện người dùng, tương tác trực tiếp                               |
| State Management | Redux Toolkit + RTK Query     | Quản lý trạng thái và xử lý API hiệu quả                                |
| Backend API      | Node.js + Express             | Xử lý logic nghiệp vụ, xác thực người dùng                              |
| Cơ sở dữ liệu    | MongoDB Atlas                 | Lưu trữ dữ liệu người dùng, khóa học, thống kê                         |
| AI & Analytics   | Custom model / OpenAI API     | Dự đoán rủi ro và gợi ý cải thiện học tập                               |

---

## 🛠️ Kỹ năng thực hành

### 📌 Backend & DevOps

- Thiết kế RESTful API với Node.js / Express  
- Xác thực JWT, phân quyền theo vai trò  
- Triển khai Docker, cronjob, CI/CD  
- Quản lý hiệu suất, ghi log, xử lý lỗi  

### 📊 AI & Phân tích dữ liệu

- Tích hợp AI dự đoán hành vi học tập  
- Trích xuất và huấn luyện dữ liệu học tập  
- Dashboard phân tích xu hướng & tỷ lệ hoàn thành  

### 🧠 Frontend React

- Xây dựng UI hiện đại với TailwindCSS  
- Trải nghiệm người dùng tối ưu  
- Tìm kiếm nâng cao với debounce  
- Tích hợp API và cập nhật real-time bằng RTK Query  

---
