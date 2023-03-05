import '../styles/LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="load-screen-container">
      <section className="load-screen">
        <div className="load-screen__line"></div>
        <span className="load-screen__asterisk">*</span>
      </section>

      <p className="loading-message"><span className="cine">Cine.</span> está carregando.</p>
    </div>
  );
}