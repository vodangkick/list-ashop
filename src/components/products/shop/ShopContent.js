import React from 'react';
import ShopList from './ShopList';
import FilterSelect from './FilterSelect';

export default function ShopContent({ value }) {
    const { sortShop, currentPage, todosPerPage, handleClick, nextPaging, prevPaging } = value;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = sortShop.slice(indexOfFirstTodo, indexOfLastTodo);
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortShop.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <>
                <li className={currentPage === number ? "active" : ""} key={number} id={number} onClick={(e) => handleClick(e)} >
                    {number}
                </li>
            </>
        );
    });
    return (
        <div className="col-lg-9">
            <div className="product_top_bar">
                <FilterSelect value={value} />
                {pageNumbers.length > 1 ?
                    <ul className="right_page page-numbers ml-auto">
                        {currentPage > 1 ? <li onClick={() => prevPaging()}>Prev</li> : ""}
                        {renderPageNumbers}
                        {currentPage < pageNumbers.length ? <li onClick={() => nextPaging()}>Next</li> : ""}
                    </ul>
                    : ''}
            </div>
            <ShopList value={value} data={currentTodos} />
        </div>
    )
}
