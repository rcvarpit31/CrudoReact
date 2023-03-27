import axios from 'axios'
import React, { useState } from 'react'
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        website: '',

    })

    const submit = async e => {
        e.preventDefault();
        // console.log(e.target.value);
        await axios.post("http://localhost:3001/users", user);
        console.log("hello");
        navigate('/home');


    }
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card className='shadow sm  mt-3'>
                        <Card.Body>
                            <Form onSubmit={submit}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control value={user.name}
                                        type='text'
                                        placeholder='Name'
                                        onChange={event => setUser({ ...user, name: event.target.value })}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label> User Name</Form.Label>
                                    <Form.Control value={user.username}
                                        type='text'
                                        placeholder='username'
                                        onChange={event => setUser({ ...user, username: event.target.value })}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={user.email}
                                        type='text'
                                        placeholder='username'
                                        onChange={event => setUser({ ...user, email: event.target.value })}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control value={user.phone}
                                        type='number'
                                        placeholder='phone'
                                        onChange={event => setUser({ ...user, phone: event.target.value })}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control value={user.website}
                                        type='text'
                                        placeholder='url'
                                        onChange={event => setUser({ ...user, website: event.target.value })}
                                    ></Form.Control>
                                </Form.Group>
                                <Container className='text-center mt-3 '>
                                    <Button type='submit' variant='primary'>
                                        Submit
                                    </Button>
                                </Container>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default AddUser
