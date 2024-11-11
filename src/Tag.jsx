function Tag() {
  return (
    <section className="tagSection">
      {['멀티비타민', '비타민C', '콜라겐', '유산균', '투퍼데이'].map(tag => (
        <button key={tag} className="tagButton">
          {tag}
        </button>
      ))}
    </section>
  );
}

export default Tag;
