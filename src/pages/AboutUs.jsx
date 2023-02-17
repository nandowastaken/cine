import "../styles/AboutUs.css";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="whoWeAre">
        <h1 className="aboutUsSectionTitle">Quem somos?</h1>
        <p className="aboutUsSectionDescription">
          Nós somos o Cineclube, Cine pros mais íntimos, somos um clube de
          cinema do IFAL campus Maceió que visa reunir alunos que gostam muito
          de filmes para discutir, formar novas amizades, e aprender mais sobre
          o cinema. Tudo começou em 2021, no meio da pandemia, quando a cinéfila
          Talita Raquel criou este clube, e nós seguimos adiante.
        </p>
      </div>

      <div className="howItWorks">
        <h1 className="aboutUsSectionTitle">Como funciona?</h1>

        <div className="howItWorksDescContainer">
          {/* <img src="../src/assets/left-arrow.svg" alt="" className="arrow" /> */}
          <p className="aboutUsSectionDescription">
            Todo mês nós temos duas reuniões em uma Sexta-feira, uma no turno da
            manhã e a outra na da tarde, sobre um filme escolhido previamente. O
            tema e a data serão sempre exibidos neste site, então não precisam
            ficar preocupados em ficarem desinformados.
          </p>
          {/* <img src="../src/assets/right-arrow.svg" alt="" className="arrow" /> */}
        </div>
      </div>

      <div className="nextMeeting">
        <h1 className="aboutUsSectionTitle">Próxima Reunião</h1>
        <p className="aboutUsSectionDescription">
          Nossa próxima reunião é dia 03/03/2023. O tema é stop-motion, e o filme escolhido é Pinocchio do Del Toro! Acontecerá no horário de 13:00 até às 14:40 na sala de vídeo da biblioteca.
        </p>

        <button className="seeMovie">Ver Filme</button>
      </div>
    </div>
  );
}
