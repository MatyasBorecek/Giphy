import React from 'react';

const GifList = ({gifs, onLoadMore}) => {
    return (
        <div className="gifs-list">
            {gifs && gifs.map((gif) => (
                <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))}
            <button onClick={onLoadMore}>Load more</button>
        </div>
    );
};

export default GifList;
