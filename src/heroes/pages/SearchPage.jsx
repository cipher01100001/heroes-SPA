import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";


// un modo rapido de separar los parametros del query en la url es instalando una dependencia con
// yarn add query-string

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q)


  const { searchText, handleInputChange } = useForm({
    searchText: q,
  });

  const hadleSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 0) return
    // console.log({ searchText })
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-4">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={hadleSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              className="btn btn-primary mt-4"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-8">
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ?
              <div className="alert alert-primary">
                Search a hero
              </div>
              : (heroes.length === 0) && <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }


        </div>
      </div>
    </>
  )
}