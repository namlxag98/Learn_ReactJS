import React from 'react';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu.js';
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="ExComponent">
      <TopMenu/>
      <Header/>
      <Content title='Khoa học' conPosition="order-lg-1" imgPosition="order-lg-2" imglink="img/01.jpg" text="Chiều 28/9, ca sĩ Quang Hà xuất hiện tại địa điểm tổ chức chương trình biểu diễn thay thế. Anh buồn bã và mệt mỏi khi biết thiệt hại nặng nề từ vụ cháy."/>
      <Content title="Giải trí" conPosition="order-lg-2" imgPosition="order-lg-1" imglink="img/02.jpg" text="Trước lễ cưới hai ngày, Justin Bieber ôn lại kỷ niệm với vợ sắp cưới bằng bức ảnh chụp chung của cả hai nhiều năm trước." />
      <Content title="Âm nhạc" conPosition="order-lg-1" imgPosition="order-lg-2" imglink="img/03.jpg" text="Louis Vuitton xoá bài tuyên bố Phạm Băng Băng là người đại diện?" />
      <Footer/>
    </div>
  );
}

export default App;
