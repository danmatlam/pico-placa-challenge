import React from 'react';
import styled from 'styled-components';
import { Input, Form } from 'antd';
import 'antd/dist/antd.css';

function DynamicRule(props) {
  const { getFieldDecorator } = props.form;
  return (

        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input your name'
              }
            ]
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>

  );
}

export default Form.create()(DynamicRule);
