
import { useState ,useEffect } from 'react'
import { Button } from 'react-bootstrap';


export default function Home() {

  const [productid,setproductid] = useState('')
  const [quantity,setquantity] = useState('')
  const [phone,setPhone] = useState('')
  const [users, setUsers] = useState([])

 

  const handlesubmit = async (event) => {
      event.preventDefault()

      const response = await fetch('/api/order/create',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({productid,quantity,phone})
      })
      if (response.ok) {
        console.log('paykhana')
      } else {
        // handle error
      }
  }

  function redirectToAnotherPage() {
    window.location.href = "/Thankyoupage";
  }


  
  
    




  

  return (
    <>

    <h1>Create Your Order :</h1>
    <form onSubmit={handlesubmit}>


    <label> productid:
      <input type = "text" value = {productid} onChange={(event)=>setproductid(event.target.value)}/>
    </label>

    <label> quantity:
      <input type = "number" value = {quantity} onChange={(event)=>setquantity(event.target.value)}/>
    </label>

    <label> Phone:
      <input type = "number" value = {phone} onChange={(event)=>setPhone(event.target.value)}/>
    </label>

    <Button type="submit" onclick="redirectToAnotherPage()"> Order Now</Button>


    </form>

    
    <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  )

    }