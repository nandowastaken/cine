import { Link } from "react-router-dom";
import "../../styles/OscarSection.css";

export default function OscarSection() {
  return (
    <div className="OscarSection">
      <div className="oscar-image"></div>
      <div className="invite-section">
        <h1 className="invite-title">PARTICIPE DO BOLÃO!</h1>
        <p className="invite-desc">
          Todo ano, o Cine faz um bolão a respeito dos vencedores do Óscar, quem
          adivinhar mais vencedores, ganha! Os participantes pagam uma taxa de
          R$ 5,00 e o vencedor leva todo o dinheiro acumulado.{" "}
        </p>

        <Link className="invite-button" to="/oscar">Participar</Link>
      </div>
    </div>
  );
}
