# Sử dụng hình ảnh Node.js
FROM node:14

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép các tệp cần thiết từ thư mục build sau khi chạy "npx next build"
COPY ./.next ./.next

# Khai báo cổng mà ứng dụng sẽ lắng nghe
EXPOSE 3000

# Khởi chạy ứng dụng Next.js
CMD ["npm", "start"]
