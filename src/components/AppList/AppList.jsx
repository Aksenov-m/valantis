import React from 'react'
import AppCard from '../Card/Card'
import { List } from 'antd'

const AppList = (props) => {
  console.log(props.select)
  const filteredProducts = props.products
    .filter(
      (item, index, array) =>
        index === array.findIndex((elem) => elem.id === item.id),
    )
    .filter((article) => {
      const searchString = props.filterText.toLowerCase()
      const { product, price, brand } = article
      switch (props.select) {
        case 'name':
          return product && product.toLowerCase().includes(searchString)
        case 'price':
          return price && price.toString().toLowerCase().includes(searchString)
        case 'brand':
          return brand && brand.toLowerCase().includes(searchString)
        default:
          return true
      }
    })

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
      dataSource={filteredProducts}
      renderItem={(article) => (
        <List.Item>
          <AppCard
            key={article.id}
            id={article.id}
            brand={!article.brand ? 'valantis' : article.brand}
            price={article.price + ' руб.'}
            product={article.product}
          />
        </List.Item>
      )}
    />
  )
}

export default AppList
