import React from "react";

const List = ({ list, deleteItem }) => {
    return list.map((el) => {
        return (
            <li
                key={el.title}
                className="collection-item"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <span>{el.title}</span>
                <button
                    onClick={() => {
                        deleteItem(el.title);
                    }}
                    className="waves-effect waves-light btn-small red darken-1"
                >
                    Удалить фильм
                </button>
            </li>
        );
    });
};

export default List;
