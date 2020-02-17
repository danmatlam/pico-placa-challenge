import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd'
import { checkBlocked } from '../../helpers/check';
import Section from '../common/Section';

import { TimePicker } from 'antd';
import moment from 'moment';
const hourFormat = 'HH:mm';


const PicoYPlacaForm = ({ setVisible ,setResponse, handleSubmit}) => {
    const [placa, setPlaca] = useState('PCB1046');
    const [fecha, setFecha] = useState(moment().format('YYYY/MM/DD'));
    const [hora, setHora] = useState(moment(new Date(), hourFormat));


    const onSubmit = (e) => {
        e.preventDefault()
        const newObj = {
            placa,
            fecha:fecha,
            hora: moment(hora).format('HH:mm'),
            isLocked: checkBlocked(placa, fecha, hora)
        }
    
       console.log(newObj);
        setVisible(true)
        setResponse(newObj);
        handleSubmit(newObj);
    }


    return (
        <form onSubmit={onSubmit}>

            <Section>
                <Input placeholder="Placa"
                    value={placa}
                    onChange={e => setPlaca(e.target.value)}
                />
            </Section>
            <Section>
                <Input placeholder="Fecha"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
            </Section>
            <Section>
                <TimePicker
                    value={hora}
                    onChange={time => setHora(time)}
                    format={hourFormat}
                />
            </Section>

            <Section>
                <Button htmlType="submit">
                    Consultar
            </Button>

            </Section>

        </form>
    )
}

export default PicoYPlacaForm
