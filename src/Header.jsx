function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://via.placeholder.com/100x40?text=V-Project"
          alt="Project Logo"
          className="logoImage"
        />
      </div>
      <nav className="nav">
        <a href="#" className="navLink">
          제휴 문의
        </a>
        <a href="#" className="navLink">
          리뷰 쓰기
        </a>
        <a href="#" className="navLink">
          앱 다운로드
        </a>
        <button className="loginButton">로그인</button>
      </nav>
    </header>
  );
}

export default Header;
