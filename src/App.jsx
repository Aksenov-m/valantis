import { useEffect, useState } from 'react'
import { Layout } from 'antd'
import AppCard from './components/Card/Card'
import api from './utils/api'
import './App.css'

function App() {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  }
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  }

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  }

  useEffect(() => {
    api
      .get_ids()
      .then((data) => {
        console.log('IDs data:', data)
        // Получение только ID товаров из данных idsData
        const ids = data
        return api.get_items(ids)
      })
      .then((itemsData) => {
        console.log('Items data:', itemsData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Layout>
      <Layout.Header style={headerStyle}>Header</Layout.Header>
      <Layout.Content style={contentStyle}>
        <AppCard />
      </Layout.Content>
      <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
  )
}

export default App
