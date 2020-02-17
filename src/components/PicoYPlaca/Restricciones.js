import React from 'react'
import { Tag } from 'antd';
import moment from 'moment';
import { calculateNextDay } from '../../helpers/check';
const Restricciones = ({ fecha }) => {
    const rules = [
        {
            day: 'lun.',
            restriction: [1, 2]
        },
        {
            day: 'mar.',
            restriction: [3, 4]
        },
        {
            day: 'mié.',
            restriction: [5, 6]
        },
        {
            day: 'jue.',
            restriction: [7, 8]
        },
        {
            day: 'vie.',
            restriction: [9, 0]
        },

    ]

    const day = moment(fecha).format('ddd');
    const nexDate = calculateNextDay(moment(fecha).day())


    debugger

    return (
        <div>
           Bloqueo más cercano:  {moment(nexDate).format('dddd DD/MM/YYYY')}

        </div>
    )
}

export default Restricciones
