import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { HeroeCard } from '../components';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (heroes.length === 0) && (q.length > 0);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText.toLowerCase().trim()}`);
    }

    return (
        <>
            <h1>Search Page</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Find your heroe"
                            className="form-control"
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/* {
                        (q === '')
                            ? <div className="alert alert-info animate__animated animate__fadeIn"><p>Search a heroe...</p></div>
                            : (heroes.length === 0)
                            && <div className="alert alert-danger animate__animated animate__fadeIn"><p>No heroes with <b>{q}</b>...</p></div>
                    } */}

                    <div
                        className="alert alert-info animate__animated animate__fadeIn"
                        style={{ display: showSearch ? '' : 'none' }}
                    >
                        <p>Search a heroe...</p>
                    </div>

                    <div
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: showError ? '' : 'none' }}
                    >
                        <p>No heroes with <b>{q}</b>...</p>
                    </div>

                    {
                        heroes.map((heroe) => (
                            <HeroeCard key={heroe.id} {...heroe} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
