import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function SearchBox(props) {
    let _where = null;
    let _checkIn= null;
    let _checkOut= null;
    let _guests= null;
    let _id = null;

    function handleSubmission(event) {
        event.preventDefault();
        props.onSubmission({ where: _where.value, checkIn: _checkIn.value, checkOut: _checkOut.value, guests: _guests.value, id: v4()});
        _where.value='';
        _checkIn.value='';
        _checkOut.value='';
        _guests.value='';

    }
    return(
        <div>
            <form onSubmit={handleSubmission}>
                <h2>Book unique homes and experiences.</h2>
                <input
                ref={(input)=> {_where = input; }}
                type='text'
                id='where'
                placeholder='Where'
                ></input>
                <input
                ref={(input) => { _checkIn = input; }}
                type='text'
                id='checkIn'
                placeholder='Check in'></input>
                <input
                ref={(input) => { _checkOut = input; }}
                type='text'
                id='checkOut'
                placeholder='Check out'></input>
                <input
                ref={(input)=> {_guests = input;}}
                type='text'
                id='guests'
                placeholder='Guests'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}
SearchBox.propTypes = {
    onSubmission: PropTypes.func
}

export default SearchBox;