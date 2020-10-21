import React from "react";
import {Form, Input,Row, Col, Button, Checkbox} from 'antd';



class CreateOrder extends  React.Component{
  constructor(props) {
    super(props);
  }
  render(){

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return(

      <div>
        <Form
          {...layout}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Name">
            <Input />
          </Form.Item>

          <Form.Item label="Pizza-Type">
            <Input />
          </Form.Item>

          <Form.Item label="Date">
            <Input />
          </Form.Item>

          <Form.Item label="Flat-Number">
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </div>
    );
  }
}

export default CreateOrder;
