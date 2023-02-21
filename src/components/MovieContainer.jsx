export default function MovieContainer() {
  return (
    <div className="MovieContainer">
      <div className="movie">
        <div className="movieCardBox">
          <div className="movieCard" id="movie">
            <div className="imgMovieBox">
              <img
                src="https://images8.alphacoders.com/129/1291625.jpg"
                alt="movie image"
                className="movieCover"
              />
            </div>
            <div className="infoMovie">
              <div className="movieHeader">
                <p className="movieTitle">Guillermo del Toro's Pinocchio</p>
                <p className="movieDate">2023 - Animação/Fantasia - 114min</p>
              </div>

              <p className="movieSinopse">
                A história clássica do boneco de madeira que deseja virar gente
                numa versão musical em stop-motion. Ambientada na Itália entre a
                Primeira e a Segunda Guerras Mundiais, essa abordagem traz o
                fascismo como pano de fundo.
              </p>
            </div>

            <div className="movieBoxInstruction">
              <p className="movieBoxInstructionText">Passe o mouse em cima</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
