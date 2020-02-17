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
import LadingImage from  '../images/landing.png'
const PicoYPlacaPage = (props) => {
  moment.locale('es')

  const [response, setResponse] = useState(null);
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} style={{display:"flex", justifyContent:'center'}} >
          <img src={LadingImage} style={{ width:"72%"}}></img>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} >
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
              <Placa placa={response.placa}></Placa>
            </Section>
            <Section>
              {response.fecha && response.hora &&

                `Consulta: ${moment(response.fecha).format('dddd DD/MM/YYYY')} 
               ${ moment(response.hora).format('HH:mm')}
              `
              }
            </Section>
            <Section>
              {
                !response.isLocked
                  ? <Alert message="Puede circular" type="success" showIcon />
                  : <Alert message="No puede circular" type="error" showIcon />
              }
            </Section>



            <Section>
              <Restricciones fecha={response.fecha && response.fecha} />
            </Section>
          </>
        }
      </Modal>
    </div>
  )
}

export default PicoYPlacaPage
