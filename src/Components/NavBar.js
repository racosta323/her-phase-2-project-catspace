import {Navbar, Form, Button, Nav, Image, NavLink, Stack, Col, Row } from 'react-bootstrap'
import { useState } from "react" 
import CatProfile from './CatProfile'

function NavBar({ cats }){

    // cats is from other component
    // console.log(cats)
    
    const [search, setSearch] = useState("")

    function onChangeHandler(e){
        setSearch(e.target.value)
    }

    const lowerCaseSearch = search.toLowerCase()
    

    
   
    // if(cats !== undefined){
    //     cats.filter((cat)=>console.log(cat.name))
    // }
    
  

    function onClickHandler(){

        if(cats !== undefined){
            cats.filter((cat)=>{
                const lowerCaseCat = cat.name.toLowerCase()
                console.log(lowerCaseCat)

                }
            )
        }
    }

    


    return(
        <>
            <Navbar 
                bg="primary" 
                data-bs-theme="light" 
                className='justify-content-between p-2'
                sticky="top"
            >
                <a href="/">
                    <Image 
                        src="https://shorturl.at/pxDY6"
                        alt="UPDATE THIS"
                        roundedCircle
                        width={100}
                        height={100}
                        className='p-1 ms-4'
                    /> {' '}
                </a>

                <Row>
                    <Col className='me-3'>
                        <Stack className='text-light p-2 mt-1'>
                            <h3 className='fw-semibold'>Catspace</h3>
                            <p>Where cats have profiles</p>
                        </Stack>
                    </Col>
                </Row>
    
                <Navbar.Collapse>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <NavLink className="text-light fw-light" href="/">Home</NavLink>
                        <NavLink className="text-light fw-light" href="/about">About</NavLink>
                        <NavLink className="text-light fw-light" href="/addacat">Add a cat!</NavLink>
                    </Nav>
                   
                    {/*Search a cat*/}

                    <Form className="d-flex p-4">
                        <Form.Control
                            type="search"
                            placeholder="Search a cat"
                            className="me-2"
                            aria-label="Search"
                            onChange={onChangeHandler}
                        />
                        <ul>
                            {/* <li>Something</li> */}
                        </ul>
                       
                        <Button variant="dark" onClick={onClickHandler}>Search</Button>


                    </Form>                    

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar