import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';



export default function TestingPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [itemsString, setItemsString] = useState('');

  const [phone,setphone] = useState('')
  const [adress,setadress] = useState('')

  useEffect(() => {
    const items = router.query.items;
    console.log('items:', items);
    if (items) {
      const parsedItems = JSON.parse(items);
      console.log('parsedItems:', parsedItems);
      setCartItems(parsedItems);
      const str = parsedItems
        .map((item) => `${item.id}-${item.count}`) // concatenate id and count into a string for each item
        .join(';'); // join the strings with a separator of your choice
      setItemsString(str);
    }
  }, [router.query.items]);

  console.log('cartItems:', cartItems);
  console.log('itemsString:', itemsString);


  const handlesubmit = async (event) => {
    event.preventDefault()
    
    const response = await fetch('/api/customerorder/create',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({phone,adress,itemsString})
    })
    if (response.ok) {
      console.log('paykhana')
    } else {
      // handle error
    }
}

  return (
    <div>
      <h1>Please Check your order Once before Confirming</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
        <h1>
        {itemsString}
        </h1>
      </Table>
      <h1>Please fill in the information below to confirm your your order: </h1>


    <Form onSubmit={handlesubmit}>

    <label> Phone:
      <input type = "text" value = {phone}  onChange={(event)=>setphone(event.target.value)}/>
    </label>

    <label> adress:
      <input type = "text" value = {adress}  onChange={(event)=>setadress(event.target.value)}/>
    </label>

    <Button type="submit">Confirm Order</Button>

    </Form>


    </div>
  );
}
