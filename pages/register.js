
import { useState ,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'


export default function Home() {

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')
  const [users, setUsers] = useState([])

 

  const handlesubmit = async (event) => {
      event.preventDefault()

      const response = await fetch('/api/users/create',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name,password,phone})
      })
      if (response.ok) {
        console.log('paykhana')
      } else {
        // handle error
      }
  }


  
  
    

  const handleDelete = async (id) => {
    const response = await fetch(`/api/users/delete?id=${id}`, { method: 'DELETE' })
    const data = await response.json()
    setUsers(data)
  }

  useEffect(()  => {
    const fetchData = async () => {
      const response = await fetch('/api/users/read')
      const data = await response.json()
      setUsers(data)
    }
    fetchData()
  },[])


  

  return (
    <>

    <h1>register</h1>
    <Form onSubmit={handlesubmit}>


    <label> Name:
      <input type = "text" value = {name} placeholder = "Thanapat" onChange={(event)=>setName(event.target.value)}/>
    </label>

    <label> password:
      <input type = "password" value = {password} placeholder = "0347XYZASD0" onChange={(event)=>setPassword(event.target.value)}/>
    </label>

    <label> Phone
      <input type = "number" value = {phone} placeholder = "(+66)932503470" onChange={(event)=>setPhone(event.target.value)}/>
    </label>

    <Button type="submit">register</Button>


    </Form>

    
    
    </>
  )

    }