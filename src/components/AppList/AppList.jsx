import React from 'react'
import AppCard from '../Card/Card'
import { List } from 'antd'

const AppList = (props) => {
  return (
    <List
      grid={{
        gutter: 0,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 2,
      }}
      dataSource={props.products}
      renderItem={(product) => (
        <List.Item>
          <AppCard
            key={product.id}
            brand={!product.brand ? 'valantis' : product.brand}
            price={product.price}
            product={product.product}
          />
        </List.Item>
      )}
    />
  )
}

export default AppList
