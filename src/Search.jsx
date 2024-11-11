function Search() {
  return (
    <section className="searchSection">
      <input
        type="text"
        placeholder="찾으시는 건강기능식품을 입력해주세요!"
        className="searchInput"
      />
      <button className="searchButton">검색</button>
    </section>
  );
}

export default Search;
