import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = router.query.items;
    console.log('items:', items);
    if (items) {
      const itemStrings = items.split(';');
      const parsedItems = itemStrings.map((str) => {
        const [id, count] = str.split('-');
        return { id, count: parseInt(count) };
      });
      console.log('parsedItems:', parsedItems);
      setCartItems(parsedItems);
    }
  }, [router.query.items]);

  console.log('cartItems:', cartItems);

  return (
    <div>
      <h1>Your Order Details</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>Item {item.id}</td>
              <td>$10</td>
              <td>{item.count}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}