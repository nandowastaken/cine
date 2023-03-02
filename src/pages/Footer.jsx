import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer" id="Footer">
      <img
        src="https://raw.githubusercontent.com/nandowastaken/cine/adf4c1c695cc4f8c934c0321637bb2c113fd7f3b/svgs/if-logo.svg"
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
