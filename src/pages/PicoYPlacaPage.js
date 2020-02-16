import React, { useState } from 'react'
import { Row, Col } from 'antd';
import PicoYPlacaForm from '../components/PicoYPlaca/PicoYPlacaForm';
import Placa from '../components/PicoYPlaca/Placa';
import { Modal, Button } from 'antd';
import { set } from 'mongoose';
import Section from '../components/common/Section';
import moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work
import { Alert } from 'antd';
import Restricciones from '../components/PicoYPlaca/Restricciones';

const PicoYPlacaPage = (props) => {
  moment.locale('es')

  const [response, setResponse] = useState(null);
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <PicoYPlacaForm setVisible={setVisible} setResponse={setResponse} />
        </Col>
      </Row>

      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        {
          response &&
          <>
            <Section>
              <Restricciones fecha={response.fecha && moment(response.fecha).format('ddd')} />
            </Section>
            <Section>
              {response.fecha && response.hora &&

              `Fecha: ${moment(response.fecha).format('dddd')} ${response.fecha}
               ${ moment(response.hora).format('HH:mm')}
              `
          
               

              }
            </Section>

            <Section>
              <Placa placa={response.placa}></Placa>
            </Section>
            <Section>
              {
                !response.isLocked
                  ? <Alert message="Puede circular" type="success" showIcon />
                  : <Alert message="No puede ciruclar" type="error" showIcon />
              }
            </Section>

          </>
        }
      </Modal>
    </div>
  )
}

export default PicoYPlacaPage
