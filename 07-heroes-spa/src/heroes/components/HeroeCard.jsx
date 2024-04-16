import { Link } from 'react-router-dom';

const CharactersByHeroe = ({ alter_ego, characters }) => {
    // if (alter_ego === characters) return (<></>);
    // return <p>{characters}</p>;
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
}

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroeImageUrl = `/assets/heroes/${id}.jpg`;

    // const charactersByHeroe = (alter_ego === characters);

    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={heroeImageUrl} className="card-img" alt={superhero} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>
                                {/* {
                                    (alter_ego !== characters)
                                    && <p className="card-text">{characters}</p>
                                } */}

                                <CharactersByHeroe alter_ego={alter_ego} characters={characters} />

                                <p className="card-text">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>

                                <Link to={`/heroe/${id}`}>
                                    Más...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
