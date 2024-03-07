import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppCard from '../../Card/Card'
import { List } from 'antd'
import Preloader from '../../Preloader/Preloader'

const AppList = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (props.search) {
      navigate('/NotFound')
    }
  }, [props.search])

  const filteredProducts = props.products.filter(
    (item, index, array) =>
      index === array.findIndex((elem) => elem.id === item.id),
  )

  return (
    <>
      <Preloader isLoading={props.isLoading}></Preloader>
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
    </>
  )
}

export default AppList
