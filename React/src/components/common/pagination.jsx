import React from 'react';
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {

const { totalPersons, pageSize, handlePageChange, currentPage} = props;

const pagesCount = totalPersons / pageSize;

if(pagesCount === 1) return null;

let pages = _.range(1,pagesCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={currentPage === page? "page-item active" : "page-item"}>
                        <a onClick={()=>handlePageChange(page)} className="page-link">{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;