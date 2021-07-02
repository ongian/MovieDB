import React from 'react';

const Category = () => {
    return (
        <div className="category">
            <div className="category_button">
                <button>Upcoming Movie</button>
                <button>What's New?</button>
                <button>Trending</button>
                <button>See All</button>
            </div>
            <form>
                <input type="search" />
            </form>
        </div>
    )
}

export default Category