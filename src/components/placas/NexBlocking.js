import React from 'react'
import { Tag } from 'antd';
import moment from 'moment';
import { calculateNextDay } from '../../helpers/check';
const NexBlocking = ({ placa }) => {

    const nexDate = calculateNextDay(placa)
    return (
        <div>
           Bloqueo más cercano:   {moment(nexDate).format('dddd DD/MM/YYYY')}
        </div>
    )
}

export default NexBlocking;

