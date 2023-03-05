import { Link, useLocation } from "react-router-dom";

function VotesPerNominee() {
  const state = useLocation().state;
  const votes = state.votes;

  return (
    <>
      <Link 
        to={`/admin/categoriesOscar/${state.CategoryOscarId}`} 
        state={state.CategoryOscar}>
        Voltar
      </Link>

      <div className="categoryNominees">
        Votos em indicado: { state.nominated.toUpperCase() }
      </div>

      {
        (votes.length)
          ? (
            <ul className="usersWhoVoted">
              {votes.map(el => (
                <li key={el.id}>{ el.user }</li>
              ))}
            </ul>
          )
          : (
            <span>Não houveram votos nessa indicação</span>
          )
      }
    </>
  );
}

export default VotesPerNominee;