import React from 'react'

type Props<T> = {
    items: T[]
    onClick: (value: T) => void
}

const List = <T extends {id: number}>({items, onClick}: Props<T>) => {
    console.log(items);
    return (
        <div>
            <h3>List of Items</h3>

            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {/* <h5>{item.id} {item.name}</h5> */}
                    </div>
                )
            })}
        </div>
    )
}

export default List