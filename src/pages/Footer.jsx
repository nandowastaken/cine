import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer" id="Footer">
      <img
        src="src/assets/if-logo.svg"
        alt="Logo do Ifal."
        className="if-logo"
      />
      <div className="if-info">
        <p className="if-info-name">
          Instituto Federal de Educação, Ciência e Tecnologia de Alagoas
        </p>

        <p className="if-info-campus">Campus Maceió</p>
      </div>

      <div className="copyright">
        <div className="copyright-text">© 2023 Cineclube</div>
        <div className="copyright-warning">Todos os direitos reservados.</div>
      </div>
    </div>
  );
}
