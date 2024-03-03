import React from 'react'

import { Card, Space } from 'antd'
const AppCard = (props) => (
  <Space direction="vertical" size={16}>
    <Card
      title={props.product}
      style={{
        width: 300,
      }}
    >
      <p>{props.id}</p>
      <p>{props.brand}</p>
      <p>{props.price}</p>
    </Card>
  </Space>
)
export default AppCard
