export default function MovieContainer() {
    return(
        <div className="MovieContainer">
            <div className="columns movie">
                <div className="movieCardBox" >
                    <div className="movieCard" id="movie">
                        <div className="imgMovieBox">
                            <img src="https://occ-0-768-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTdQEk1cq4XPU1JajVf4wRyzuRIamC6Ra_RBVVZfD2-o6B40layNHPvcj1BAx7zHIP69hlgr17WncZxvF-FM3qYJUl8LaVDPzImu.jpg?r=b82" alt="movie image" className="movieCoverMobile"/>
                            <img src="https://occ-0-768-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTdQEk1cq4XPU1JajVf4wRyzuRIamC6Ra_RBVVZfD2-o6B40layNHPvcj1BAx7zHIP69hlgr17WncZxvF-FM3qYJUl8LaVDPzImu.jpg?r=b82" alt="movie image" className="movieCoverDesktop"/>
                        </div>
                        <div className="infoMovie">
                          <div className="movieHeader">
                                <p className="movieTitle">A Origem dos Guardiões</p>
                                <p className="movieDate">2012 - Animação/Fantasia - 97min</p>
                            </div>
                            
                            <p className="movieSinopse">Jack Frost, um garoto que controla o inverno, se junta ao seleto time dos Guardiões Imortais para impedir Breu, o bicho-papão, de transformar todos os sonhos das crianças em pesadelo e usar seus poderes maquiavélicos para governar o mundo.</p>
                        </div>

                        <div className="movieBoxInstruction">
                            <p className="movieBoxInstructionText">Passe o mouse em cima</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
};