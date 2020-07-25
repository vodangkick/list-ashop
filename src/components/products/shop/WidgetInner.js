import React from 'react';


export default function WidgetInner({ items, title, value, type }) {

    // eslint-disable-next-line no-unused-vars
    const { handleChangeFilter, products, category, color, brand } = value;
    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item.fields[value]))];
    }
    let types = getUnique(products, type);
    function getCategories(arrFuc, type) {
        let arrNew = [];
        for (let valueKey of type) {
            arrFuc.forEach(item => {
                if (item.id === valueKey) {
                    arrNew.push(item);
                }
            })
        }
        return arrNew;
    }

    // eslint-disable-next-line no-eval
    const typesName = (getCategories(eval(type), types));

    return (
        <div className="widgets_inner">
            {title ? <h4>{title}</h4> : ''}
            <ul className="list">
                <li className="active"><a href onClick={(event) => handleChangeFilter(event, 'all', type)}>All</a></li>
                {typesName.map((item, index) => <li key={index} ><a href onClick={(event) => handleChangeFilter(event, item.id, type)}>{item.name}</a></li>)}
            </ul>
        </div >
    )
}
