import React from 'react';

function Navbar () {
    return (
        <div>
            <style jsx> {`
                ul {
                    list-style-type: none;
                    text-align: right;
                    margin-right: 1%;
                }
                li {
                    display: inline;
                    margin-left: 3%;

                }
                a {
                    color: white;
                    text-decoration: none;
                }
                
            `}
            </style>
            <ul>

            <li><a href='#'>Become a host  </a></li>
            <li><a href='#'>Help  </a></li>
            <li><a href='#'>Sign up  </a></li>
            <li> <a href='#'>Log in</a></li>
            </ul>
        </div>
    )
}

export default Navbar;