import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import JobCard from './CustomersCard'




function Jobs() {
  const url = `http://localhost:2006/company`
  const [query, setQuery] = useState("")


  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
  })



  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false

    })

    axios.get(url)
      .then(response => {
        setProducts({
          loading: false,
          data: response.data,
          error: false
        })

          .catch(() => {
            setProducts({
              loading: false,
              data: null,
              error: true
            })
          })
      })
  }, [url])

  let content = null
  


  if (products.loading) {
    content = <Loader />
  }

  if (products.error) {
    content = <p>Error! Try Again!</p>
  }

  if (products.data) {
    content =
      products.data.map((product) =>
        <div key={product.id}>
          <JobCard product={product} />
        </div>
      )

  }


  if (products.data) {
    
    content =
      products.data.filter(product => {
        if (query === "") {

          return product;

        } else if (product.name.toLowerCase().includes(query.toLowerCase())) {

          return product;
        }
        
        return "";
      }).map((product) =>
        <div key={product.id}>
          <JobCard product={product} />
        </div>
      ).reverse();
  }

  return (
    <div>
      <div className='flex my-3  container '>
        <h1 className='text container ml-4 font-bold' style={{  fontSize: '35px', alignItems: 'center', display: 'flex' }}>Companies</h1>
        <form className='searchJob mb-5' style={{ alignItems: 'center', display: 'flex', top: '20px' }}>
          <input className='searchBar bg-orange-500 text-black mr-5 rounded-xl mt-2 p-2' placeholder='Search' onChange={event => setQuery(event.target.value)} type='text'></input>
          <button className='search__submit' type='submit'>
            {/* <img src='' alt='some value' /> */}
          </button>
        </form>
      </div>

      {content}

    </div>
  )
}

export default Jobs