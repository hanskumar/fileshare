import React from 'react'
import Header from './Header'
import Footer from './Footer'

const index = ({children}) => {
    return (
        <>
            <Header/>
                { children } 
            <Footer/>
        </>
    )
}

export default index
