import React, {useEffect, useState} from 'react';

const GifSearch = ({onSearch}) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            onSearch(query);
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleInputChange}/>
        </div>
    );
};

export default GifSearch;
