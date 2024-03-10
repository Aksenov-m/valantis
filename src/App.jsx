import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  redirect,
} from 'react-router-dom'
import { Layout } from 'antd'
import ErrorPage from './components/layout/ErrorPage/ErrorPage'
import AppList from './components/layout/AppList/AppList'
import NotFound from './components/layout/NotFound/NotFound'
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
  const [disabledArrowRight, setDisabledArrowRight] = useState(true)
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState(false)
  const OFFSET = 51
  const LIMIT = 50

  function setArrowAvailability(products, page) {
    if (!products) {
      setDisabledArrowRight(true)
    }

    if (page !== 0) {
      setDisabledArrowLeft(false)
    } else {
      setDisabledArrowLeft(true)
    }
  }

  function handleNavigateBack() {
    setSearch(false)

    setTimeout(() => {
      setDisabledArrowRight(false)
    }, 5000) //  (5 секунда)
  }

  useEffect(() => {
    setIsLoading(true)
    api
      .get_ids(OFFSET * page, LIMIT)
      .then((data) => {
        // Получение только ID товаров из данных idsData
        const ids = data
        return api.get_items(ids)
      })
      .then((itemsData) => {
        setProducts(itemsData)
        setDisabledArrowRight(false)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setArrowAvailability(products, page)
        setIsLoading(false)
      })
  }, [page, search])

  const handleClickBack = () => {
    setPage((prevPage) => prevPage - 1)
    console.log(page + '-')
  }

  const handleClickNext = () => {
    setPage((prevPage) => prevPage + 1)
    console.log(page + ' +')
  }

  const handleChange = (event) => {
    setFilterText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault() // Предотвращаем стандартное поведение отправки формы (перезагрузку страницы)
    setIsLoading(true)
    setDisabledArrowRight(true)
    api
      .filter(select, filterText)
      .then((data) => {
        if (data.length === 0) {
          setProducts([])
          setDisabledArrowRight(true)
          return setSearch(true)
        } else {
          const ids = data
          return api.get_items(ids)
        }
        // Получение только ID товаров из данных idsData
      })
      .then((itemsData) => {
        if (itemsData.length > 0) {
          setProducts(itemsData)
        }
        return
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setArrowAvailability(products, page)
        setIsLoading(false)
        setFilterText('')
      })
  }

  const router = createBrowserRouter([
    {
      path: '/valantis',
      element: (
        <Layout.Content style={contentStyle}>
          <AppList products={products} isLoading={isLoading} search={search} />
        </Layout.Content>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: 'NotFound',
      element: <NotFound handleNavigateBack={handleNavigateBack} />,
    },
  ])

  return (
    <Layout>
      <Layout.Header style={headerStyle}>Header</Layout.Header>
      <div className="content">
        <AppForm
          select={select}
          handleSelect={setSelect}
          filterText={filterText}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
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
      </div>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  )
}

export default App
