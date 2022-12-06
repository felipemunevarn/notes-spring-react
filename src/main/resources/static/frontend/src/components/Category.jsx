import React from "react";

const Category = ({ name, onDelete }) => {

    return (
        <>
            <div className="category-group">
                <img src="../../icons8-etiqueta-de-precio-30.png" alt="tag-image" width="15" height="15"/>
                <p className="category-txt">{name}</p>
                <img src="../../icons8-eliminar-30.png" alt="del-image" width="15" height="15"
                onClick={e => onDelete(e, name)}/>
            </div>
        </>
    )
}

export default Category;