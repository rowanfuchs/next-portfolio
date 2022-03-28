import React, { useEffect } from 'react'
import '../styles/globals.css'
import { wrapper } from '../store/store'
import { useSelector } from 'react-redux'

const MyApp = ({ Component, pageProps }) => {
    const { darkMode } = useSelector((state) => state)
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        }
    })

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
}

export default wrapper.withRedux(MyApp)
