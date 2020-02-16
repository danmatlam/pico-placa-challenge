import React from 'react'
import { Tag } from 'antd';

const Restricciones = ({fecha}) => {
    debugger
    const rules = [
        {
            day:'lun.',
            restriction: [1, 2]
        },
        {
            day:'mar.',
            restriction: [3, 4]
        },
        {
            day:'mié.',
            restriction: [5, 6]
        },
        {
            day:'jue.',
            restriction: [7, 8]
        },
        {
            day:'vie.',
            restriction: [9, 0]
        },

    ]
      
    return (
        <div>
            Categorías: {
                rules.map(item=> 
                item.day !== fecha ? 
                <Tag >
                     {item.restriction[0]} y {item.restriction[1]}
                </Tag>
                : <Tag color="red">
                        {item.day}: {item.restriction[0]} y {item.restriction[1]}
                    </Tag>
                )
            }
        </div>
    )
}

export default Restricciones
