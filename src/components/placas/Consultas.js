import React from 'react'
import { List, Badge } from 'antd';
import { Tag } from 'antd';
import Section from '../common/Section';

const Consultas = (props) => {
    const { data, loading, error } = props.consultas;
    debugger
    return (
        <>

        <Section>
        <h1>
        Ultimas Consultas
    </h1>
        </Section>

        <List
            itemLayout="horizontal"
            dataSource={data && data.GetConsultas}
            loading={loading && loading}
            renderItem={item => (
                <List.Item style={{padding:'1em'}}>
                    <List.Item.Meta
                        title={<a href="https://ant.design">{item.placa}</a>}
                        description={`${item.fecha} - ${item.hora}`}
                    />

                    {
                        item.isLocked ? <Tag color="red">locked</Tag> : <Tag color="green">free</Tag>
                    }

                </List.Item>
            )}
        />

        </>
    )
}

export default Consultas
