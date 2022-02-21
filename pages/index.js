import Head from 'next/head'
import Login from "../components/Login"
import { useMoralis } from "react-moralis";


export default function Home() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  

  if(!isAuthenticated)return<Login/>
  return (
    <div className="h-screen">
      <Head>
        <title>Metavers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <h1>welome</h1>
     <button onClick={logout}>logout</button>
      
    </div>
  )
}
