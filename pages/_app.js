import '../styles/globals.css'
import React from 'react'
import { StateContext } from '../context/StateContext';


import Layout from '../components/Layout.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
            <Component {...pageProps}/>
        </Layout>
    </StateContext>)
  
}

export default MyApp
