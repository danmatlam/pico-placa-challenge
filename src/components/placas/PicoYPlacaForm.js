import React, { useState, useEffect } from 'react'
import { Input, Button, Form } from 'antd'
import { checkBlocked } from '../../helpers/check';
import Section from '../common/Section';

import { TimePicker } from 'antd';
import moment from 'moment';
const hourFormat = 'HH:mm';


function PicoYPlacaForm(props) {

    const { setVisible, setResponse, handleSubmit } = props;

    const [placa, setPlaca] = useState('PCB1046');
    const [fecha, setFecha] = useState(moment().format('YYYY/MM/DD'));
    const [hora, setHora] = useState(moment(new Date(), hourFormat));
    const onSubmit = (e) => {
        e.preventDefault();
        
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const newObj = {
                    placa,
                    fecha: fecha,
                    hora: moment(hora).format('HH:mm'),
                    isLocked: checkBlocked(placa, fecha, hora)
                }
                console.log(newObj);
                setVisible(true)
                setResponse(newObj);
                handleSubmit(newObj);
            }
          });

  
    }


    const { getFieldDecorator } = props.form;

    const placaValidator = (rule, value, callback) => {
        if (value.length < 6 || isNaN(value.charAt(value.length-1)) )  {
            callback('Ingrese una placa valida');
        } else {
            callback();
        }
    };

    const dateValidator = (rule, value, callback) => {
        const date = moment(value, 'YYYY/MM/DD', true)
        if (!date.isValid()) {
            callback('Ingrese una fecha valida YYYY/MM/DD');
        } else {
            callback();
        }
    };







    return (
        <Form onSubmit={onSubmit}>
            <Section>

                <Form.Item
                    value={placa}
                    onChange={e => setPlaca(e.target.value)}
                    hasFeedback>
                    {getFieldDecorator('placa', {
                        rules: [
                            {
                                required: true,
                            },
                            {
                                validator: placaValidator,
                            },
                        ],
                    })(<Input placeholder="PCB1046" />)}
                </Form.Item>
            </Section>



            <Section>
                <Form.Item
                    placeholder="YYYY/MM/DD"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)} hasFeedback>
                    {getFieldDecorator('fecha', {
                        rules: [
                            {
                                required: true,
                            },
                            {
                                validator: dateValidator,
                            },
                        ],
                    })(<Input onBlur={() => { }} placeholder="YYYY/MM/DD" />)}
                </Form.Item>
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

        </Form>
    )
}


export default Form.create()(PicoYPlacaForm);


