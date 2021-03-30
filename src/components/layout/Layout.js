import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'

const Layout = (props) => {
    return (
        <div>
        <Header></Header>
          <Container>  {props.children}</Container>
          
        </div>
    )
}

export default Layout;

