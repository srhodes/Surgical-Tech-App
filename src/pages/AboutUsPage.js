
import React, { Component } from 'react'
import NavBarComponent from '../components/NavBarComponent'
import ToggleComponent from '../components/ToggleComponent'
import SubHeader from '../components/SubHeader'
import { Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap'

const AboutUsPage = () => {
    return(<>
       <NavBarComponent/>

       <SubHeader current= 'About Us'/>
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                    We present a curated database of the best merchandise in the
                        country.
                        We verify that each merchandises are up to the standards that
                        client are looking for. We
                        also share review of what the customer think of our merchandise.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Fact at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                        <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>July 30, 2022</dd>
                                <dt className='col-6'>No. of Items in 2022</dt>
                                <dd className='col-6'>563</dd>
                                <dt className='col-6'>No. of Reviews in 2022</dt>
                                <dd className='col-6'>4388</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'> 
                                <p>
                                I will not follow where the path may lead, but I
                                    will go where there is no path, and I will leave
                                    a trail.
                                </p>
                                <footer className='blockquote-footer'>
                                    Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
            <Row className='row-content'>
                 <Col sm='6' xs='12'>
                    <h3>Community Partners</h3>
                 </Col>
                 <Col sm='6'></Col>
                 <Col></Col>
            </Row>

    </>)
}

export default AboutUsPage