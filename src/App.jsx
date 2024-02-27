import { useEffect, useState } from 'react'
import { Layout } from 'antd'
import AppList from './components/AppList/AppList'
import AppForm from './components/AppForm/AppForm'
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

  const [products, setProducts] = useState([])
  const [filterText, setFilterText] = useState('')
  const [select, setSelect] = useState('price')
  const [isLoading, setIsLoading] = useState(false)
  console.log(select)
  useEffect(() => {
    api
      .get_ids()
      .then((data) => {
        // Получение только ID товаров из данных idsData
        const ids = data
        return api.get_items(ids)
      })
      .then((itemsData) => {
        setProducts(itemsData)
      })
      .catch((error) => console.log(error))
  }, [])

  // function handleSelect(e) {
  //   setSelect(e.target.value)
  // }

  return (
    <Layout>
      <Layout.Header style={headerStyle}>Header</Layout.Header>
      <AppForm
        select={select}
        handleSelect={setSelect}
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <Layout.Content style={contentStyle}>
        <h1>{filterText}</h1>
        <AppList products={products} filterText={filterText} select={select} />
      </Layout.Content>
      <Layout.Footer products={products}>Footer</Layout.Footer>
    </Layout>
  )
}

export default App
