import { Card,Alert, InputGroup, Form, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";

import React,{useState,useEffect} from "react";

import Data from './MOCK_DATA.json'




const App = () => {
  const [Filter, setFilter] = useState("")
  const setFilterVal = (e) =>{
    setFilter(e.target.value)
  }

  return (
        <div className="App">
      <main className="content d-flex justify-content-center align-items-center bg-dark">
        <Card classname="bg-dark">
          <Card.Title className="card-header card-outline card-danger">
            <p className="h1">Search Filter</p>
            <InputGroup>
            {/* aria-label="Search"
            aria-aria-describedby="basic-addon1" */}
            <Form.Control 
            placeholder ="Search"

            onChange={setFilterVal}
            />
            <InputGroup.Text>
            <i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
            </InputGroup>
          </Card.Title>
          <Card.Body className="h-50 overflow-auto">
          <ListGroup as="ul">
            <p className="h1">
              Names
            </p>
            {Data.filter((val)=>{
              // if(!Filter){
              //   if(val.first_name.toLowerCase().includes(Filter.toLowerCase())){
              //     return val
              //   }
              // }
              // return val

              if(Filter == ""){
                return val
              }else if(val.first_name.toLowerCase().includes(Filter.toLowerCase())){
                return val
              }
            }).map((val, key)=>{
              return(
                <>
                <ListGroupItem key={key} as="li" >
                  {val.first_name}
                </ListGroupItem>
                </>
              )
            })}
            </ListGroup>
            
            
          </Card.Body>

        </Card>
      </main>
    </div>
  )
}

export default App