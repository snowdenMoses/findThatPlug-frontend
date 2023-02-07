import React, {useContext} from 'react'
import UsersContext from '../context/context_api'

function AllProducts() {
  const [ _ , products] = useContext(UsersContext) 
  return (
    <div>{products.map(product => {
      return (
        <h2>{product.name}</h2>
      )
    })}</div>
  )
}

export default AllProducts