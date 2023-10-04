import React from 'react'
import List from './List'

const Generics = () => {
    return (
        <div>
            <List items={[
                {id: 0, first: 'Bruce', last: 'Wayne'},
                {id: 1, first: 'Clark', last: 'Kent'},
                {id: 2, first: 'Princes', last: 'Diana'},
            ]} onClick={(item) => console.log(item)}/>
        </div>
    )
}

export default Generics