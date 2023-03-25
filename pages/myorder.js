import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (response.ok) {
      window.location.href = 'makeorder'
    } else {
      setError('Invalid credentials');
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={credentials.name} onChange={(event) => setCredentials({ ...credentials, name: event.target.value })} />
        </label>
        <label>
          Password:
          <input type="password" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} />
        </label>
        <button type="submit" className="btn btn--rounded">Login</button>
      </form>
    </>
  );
}

export default Login;