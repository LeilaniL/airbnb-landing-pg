import React from 'react';
import PropTypes from 'prop-types';

function DisplaySearch(props) {
return(
    <div>
        <style jsx>{`
            .box {
                background-color: rgba(0, 0, 0, 0.1);
                width: 30%;
                margin: auto;
                border-radius: 5px;
            }
            p {
                font-size: 12px;
            }
        `}
        </style>
        {props.searchQueries.map((search)=>
            <div className='box'>
                <h4>{search.where}</h4>
                <p>{search.checkIn}</p>
                <p>{search.checkOut}</p>
                <p>{search.guests}</p>
                <p>{search.id}</p>
            </div>
        )}
    </div>
)
}

DisplaySearch.propTypes = {
    searchQueries: PropTypes.array
}

export default DisplaySearch;