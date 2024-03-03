import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import { Layout } from 'antd'
import ErrorPage from './components/ErrorPage/ErrorPage'
import AppList from './components/AppList/AppList'
import AppForm from './components/AppForm/AppForm'
import ArrowButton from './components/ArrowButton/ArrowButton'
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
  const [disabledArrowLeft, setDisabledArrowLeft] = useState(true)
  const [disabledArrowRight, setDisabledArrowRight] = useState(false)
  const [page, setPage] = useState(0)
  const [pageQty, setPageQty] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  console.log(select)
  const OFFSET = 51
  const LIMIT = 50

  useEffect(() => {
    api
      .get_ids(OFFSET * page, LIMIT)
      .then((data) => {
        // Получение только ID товаров из данных idsData
        const ids = data
        return api.get_items(ids)
      })
      .then((itemsData) => {
        setProducts(itemsData)
      })
      .catch((error) => console.log(error)).finally
    if (page !== 0) {
      setDisabledArrowLeft(false)
    } else {
      setDisabledArrowLeft(true)
    }
  }, [page])

  // function handleSelect(e) {
  //   setSelect(e.target.value)
  // }

  const handleClickBack = () => {
    setPage((prevPage) => prevPage - 1)
    console.log(page + '-')
  }

  const handleClickNext = () => {
    setPage((prevPage) => prevPage + 1)
    console.log(page + ' +')
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout.Content style={contentStyle}>
          <h1>{filterText}</h1>
          <AppList
            products={products}
            filterText={filterText}
            select={select}
          />
        </Layout.Content>
      ),
      errorElement: <ErrorPage />,
    },
    // {
    //   path: "dimax/form",
    //   action: saveCertificateAction,
    //   element: <FormPage certificate={certificate} errorMessage='Поля: Имя, Телефон, Почта - обязательные' />,
    // },
  ])

  return (
    <Layout>
      <Layout.Header style={headerStyle}>Header</Layout.Header>
      <AppForm
        select={select}
        handleSelect={setSelect}
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <div className="AppArrowButton">
        <ArrowButton
          direction={'left'}
          isDisabled={disabledArrowLeft}
          onClick={handleClickBack}
        ></ArrowButton>
        <ArrowButton
          isDisabled={disabledArrowRight}
          onClick={handleClickNext}
        ></ArrowButton>
      </div>
      <RouterProvider router={router} />
      <Layout.Footer products={products}>Footer</Layout.Footer>
    </Layout>
  )
}

export default App
