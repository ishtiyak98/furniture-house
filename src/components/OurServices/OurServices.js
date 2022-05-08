import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { GiCardboardBox } from 'react-icons/gi';
import { GiBoxUnpacking } from 'react-icons/gi';
import { FaFighterJet } from 'react-icons/fa';

import "./OurServices.css"

const OurServices = () => {
    return (
        <div className="pb-5 mb-5 container">
        <h1 className="text-center mb-5 fw-bold"> Our <span className="text-warning">Services</span> </h1>
        <div className="row gx-lg-5 gy-5">
            <div className='col-lg-6 px-5'>
            <div className='service-card'>
                    <div className='d-lg-flex align-items-center text-center text-lg-start'>
                        <div className='service-icon px-5 py-5'>
                            <FaTruck size={"4em"}/>
                        </div>
                        <div className='px-4 py-2'>
                            <h4 className='fw-bold mt-2 mb-3'>GROUND TRANSPORT</h4>
                            <p className='mb-0'>
                                Our Warehouse began providing transportation solutions to Transport’s contract warehousing customers in the 1980s.
                            </p>
                        </div>
                    </div>
            </div>
            </div>

            <div className='col-lg-6 px-5'>
            <div className='service-card'>
                    <div className='d-lg-flex align-items-center text-center text-lg-start'>
                        <div className='service-icon px-5 py-5'>
                            <GiBoxUnpacking size={"4em"}/>
                        </div>
                        <div className='px-4 py-2'>
                            <h4 className='fw-bold mt-2 mb-3'>WAREHOUSING</h4>
                            <p className='mb-0'>
                                We provides warehousing, fulfillment services, and transportation management across Bangladesh.
                            </p>
                        </div>
                    </div>
            </div>
            </div>

            <div className='col-lg-6 px-5'>
            <div className='service-card'>
                    <div className='d-lg-flex align-items-center text-center text-lg-start'>
                        <div className='service-icon px-5 py-5'>
                            <GiCardboardBox size={"4em"}/>
                        </div>
                        <div className='px-4 py-2'>
                            <h4 className='fw-bold mt-2 mb-3'>PACKAGING AND STORAGE</h4>
                            <p className='mb-0'>
                                We offers complete, customized solutions for all of your business storage needs.
                            </p>
                        </div>
                    </div>
            </div>
            </div>

            <div className='col-lg-6 px-5'>
            <div className='service-card'>
                    <div className='d-lg-flex align-items-center text-center text-lg-start'>
                        <div className='service-icon px-5 py-5'>
                            <FaFighterJet size={"4em"}/>
                        </div>
                        <div className='px-4 py-2'>
                            <h4 className='fw-bold mt-2 mb-3'>LOGISTIC SERVICE</h4>
                            <p className='mb-0'>
                                We offers a host of logistic management services and supply chain solutions.
                            </p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default OurServices;