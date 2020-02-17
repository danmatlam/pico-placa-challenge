import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Modal, Button, Alert } from 'antd';
import moment from 'moment';
import 'moment/locale/es'

import Section from '../../components/common/Section';
import PicoYPlacaForm from '../../components/placas/PicoYPlacaForm';
import NexBlocking from '../../components/placas/NexBlocking';
import Placa from '../../components/placas/Placa';
import LadingImage from '../../images/landing.png';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_CONSULTA, GET_CONSULTAS } from './PlacasQueries'
import Consultas from '../../components/placas/Consultas';


const PlacasPage = (props) => {
  moment.locale('es')
  const [response, setResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const consultasState = useQuery(GET_CONSULTAS);
  const [createConsulta] = useMutation(CREATE_CONSULTA,);

  const onCompleted =()=> {
    alert('some')
  }

  const handleSubmit = (consulta) => {
    createConsulta({ variables: consulta })
      .then(({ data, onCompleted}) => {
        consultasState.refetch();
      })
      .catch(err => console.log(err));
  }


  

  return (
    <>
      <Section>
        <h1>
          Consulta tu pico y placa
        </h1>
      </Section>

      <Row>
        <Col xs={24} sm={24} md={12} lg={12} style={{ display: "flex", justifyContent: 'center' }} >
          <img src={LadingImage} style={{ width: "72%" }}></img>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} >
          <PicoYPlacaForm
            setVisible={setVisible}
            setResponse={setResponse}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>

      <Row>
        <Consultas consultas={consultasState}></Consultas>
      </Row>
      <Modal visible={visible} onCancel={() => setVisible(false)}
        footer={
          <Button key="submit" type="primary" onClick={() => setVisible(false)}>
            Regresar
        </Button>}

      >
        {
          response &&
          <>
            <Section> <Placa placa={response.placa}></Placa></Section>
            <Section>
              {`Consulta: ${moment(response.fecha).format('dddd DD/MM/YYYY')} ${response.hora}`}
            </Section>
            <Section>
              {
                !response.isLocked
                  ? <Alert message="Puede circular" type="success" showIcon />
                  : <Alert message="No puede circular" type="error" showIcon />
              }
            </Section>
            <Section>
              <NexBlocking placa={response.placa} />
            </Section>
          </>
        }
      </Modal>
    </>
  )
}

export default PlacasPage
