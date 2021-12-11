import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cart.css'
import reportWebVitals from './reportWebVitals';

function Student(){
  var [product,setProduct] = React.useState([
    {id: 0, name: "Jeans", price: 1000, quantity: 0},
    {id: 1, name: "Shirt", price: 2000, quantity: 0},
    {id: 2, name: "Trousers", price: 500, quantity: 0},
    {id: 3, name: "Shoes", price: 100, quantity: 0},
    {id: 4, name: "Belt", price: 4000, quantity: 0},
    {id: 5, name: "Tie", price: 1500, quantity: 0}])
   
    var [quantity,setQuantity] = React.useState(0);
    var [tprice,setTprice] = React.useState(0);
    
   
  
      var inceremant = (pri, index) => {
      setTprice(tprice + pri)
      product.map((p) => {
        if(p.id === index){
          const newproduct = [...product];
          newproduct[index].quantity = p.quantity + 1
          setProduct(newproduct)
        }
      })
    }
      var decremant = (pri, index) => {
        if(tprice > 0){
         
          product.map((p) => {
            if(p.id === index && p.quantity > 0){
              setTprice(tprice - pri)
              const newproduct = [...product];
              newproduct[index].quantity = p.quantity - 1
              setProduct(newproduct)
            }
          })
        }
   }
    
    return(
         <div className="maindiv">
           <table className="table">
                               
                                <tr>
                                  <th> Product </th>
                                  <th> Price </th>
                                  <th> Add </th>
                                  <th> Quantity </th>
                                  <th> Remove </th>
                                  
                                </tr>
                                </table>
                                       {product.map((p)=>  
        
                          <div>
                              <table className="table">
                                <tr>
                                  <td>
                                    {p.name}
                                  </td>
                                  <td>
                                    {p.price}
                                  </td>
                                  <td>
                                  <button type="button" onClick={() => inceremant(p.price,p.id)} class="btn btn-success">Add</button>
                                    
                                  </td>
                                  <td>
                                    {p.quantity}
                                  </td>
                                  <td>
                                  <button type="button" onClick={() => decremant(p.price,p.id)} class="btn btn-success">Remove</button>
                                  
                                  </td>
                                </tr>
                                 
                              </table>
                              
                              
                          </div>)}
        <h1>Total Price = {tprice}</h1>
    </div>
    )
  }

ReactDOM.render(
  <Student />,
  document.getElementById('root')
)
reportWebVitals();