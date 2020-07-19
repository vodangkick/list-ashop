import React from 'react';

export default function FilterSelect({ value }) {
    const { handleChangeFilter } = value;
    const SELECT = [
        { value: "all", title: 'ALL' },
        { value: "max", title: 'Lowest Price' },
        { value: "min", title: 'Highest Price' },
    ]
    const SELECT_PERPAGE = [
        { value: "6", title: 'Show 6' },
        { value: "12", title: 'Show 12' }
    ]
    return (
        <>
            <div className="left_dorp dis-select">
                <select name="price" className="sorting" onChange={(event) => handleChangeFilter(event, value, 'price')}>
                    {SELECT.map((item, index) => <option key={index} value={item.value}>{item.title}</option>)}
                </select>
            </div>
            <div className="left_dorp dis-select">
                <select name="show" className="show" onChange={(event) => handleChangeFilter(event, value, 'todosPerPage')}>
                    {SELECT_PERPAGE.map((item, index) => <option key={index} value={item.value}>{item.title}</option>)}
                </select>
            </div>
        </>

    )
}
