import React, {useState} from 'react';
import GifSearch from './Components/Gif/Search';
import GifList from './Components/Gif/List';

const API_KEY = '6ZtClTrhl25Ruu5drhnmUJuFApwJmB7H';
const API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search';
const FETCH_OFFSET = 3;

const App = () => {
    const [gifs, setGifs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [query, setQuery] = useState('');

    const handleSearch = (q) => {
        setQuery(q);
        setOffset(0);
        fetchGifs(q, 0);
    };

    const handleLoadMore = () => {
        fetchGifs(query, offset + FETCH_OFFSET);
        setOffset(offset + FETCH_OFFSET);
    };

    const fetchGifs = (q, o) => {
        const url = `${API_ENDPOINT}?api_key=${API_KEY}&q=${q}&offset=${o}&limit=${FETCH_OFFSET}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setGifs((prevGifs) => {console.log(prevGifs, data.data); return [...prevGifs, ...data.data]}))
            .catch((error) => console.error(error));
    };

    return (
        <div className="container">
            <h1 className="header">Moravio hiring front-end giphy</h1>
            <GifSearch onSearch={handleSearch}/>
            <GifList gifs={gifs} onLoadMore={handleLoadMore}/>
        </div>
    );
};

export default App;
