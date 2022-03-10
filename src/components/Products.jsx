import React from 'react'

function Products(props) {
  return (
    <>
        {
            props.datas.map(products => {
                return(
                    <div className="column" key={products.id}>
                        <div className="card">
                        <img src={products.image} width="100" alt="" />    
                        <h3>{products.title}</h3>
                        <span>{products.category}</span>
                        <p>Price : ${products.price} | Size : {products.size}</p>
                        </div>
                    </div>
                ) 
            })
        }             
    </>
  )
}

export default Products