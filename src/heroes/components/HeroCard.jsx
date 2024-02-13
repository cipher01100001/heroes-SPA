import { Link } from "react-router-dom";

const CharactersByHero = ({ characters, alter_ego }) => {
  if (characters === alter_ego) {
    return null;
  }
  return <p>{characters}</p>;
}

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

  const heroImageUrl = `../../../assets/heroes/${id}.jpg`;

  return (
    <div className="cols">
      <div className="card animate__animated animate__fadeInUp animate__faster">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/* {
                (alter_ego !== characters) && <p>{characters}</p>
              }  este es un modo de hacerlo pero para mantener mas orden se hace por un componente en el mismo archivo*/}

              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="card-text">
                <small className="text-mute">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>
                Mas...
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
