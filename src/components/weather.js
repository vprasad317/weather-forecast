import { React, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

function Weather(props) {
    const [data, setData] = useState([]);
    const iconArr = [
        { '04n': 'circle-notch' }
    ]

    return (
        <div className="data-holder">
            <div className="weather-dispay-holder col-12 py-2 mt-3 border shadow">
                <h4 className="font-weight-light">Weather</h4>
                <h3 className="font-weight-normal text-center text-sm-left">{props.weatherData?.name}<span>,&nbsp;{props.weatherData.sys.country}</span></h3>
                <div className="row">
                    <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start my-3 my-sm-0">
                        <h1 className="mr-3">{props.weatherData.main.temp}<span><sup>&nbsp;o</sup></span></h1>
                        <h3><FontAwesomeIcon icon="cloud" /></h3>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="mb-0 mb-sm-1">
                            <div className="d-flex justify-content-start">
                                <div className="icon-holder mr-2">
                                    <FontAwesomeIcon icon="circle-notch" />
                                </div>
                                <p className="mr-1">Conditions:</p> <span>{props.weatherData.weather[0].description}</span>
                            </div>
                        </div>
                        <div className="mt-n2 mb-sm-1">
                            <div className="d-flex justify-content-start">
                                <div className="icon-holder mr-2">
                                    <FontAwesomeIcon className="mr-2" icon="tint" />
                                </div>

                                <p>Humidity: {props.weatherData.main.humidity}<span>&nbsp;%</span></p>
                            </div>
                        </div>
                        <div className="mt-n2 mb-sm-1">
                            <div className="d-flex justify-content-start">
                                <div className="icon-holder mr-2">
                                    <FontAwesomeIcon className="mr-2" icon="thermometer-three-quarters" />
                                </div>

                                <p>Feels like: {props.weatherData.main.feels_like}<span><sup>&nbsp;o</sup></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                        <div className="mb-0 mb-sm-1">
                            <div className="d-flex justify-content-start">
                                <div className="icon-holder mr-2">
                                    <FontAwesomeIcon icon="wind" />
                                </div>
                                <p>Wind speed: {props.weatherData.wind.speed}&nbsp;<span>km/h</span></p>
                            </div>
                        </div>

                        <div className="mt-n2 mb-sm-1">
                            <div className="d-flex justify-content-start">
                                <div className="icon-holder mr-2">
                                    <FontAwesomeIcon icon="clock" />
                                </div>
                                <p>Time zone: {new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1]}</p>
                            </div>
                        </div>
                        <div className="mt-n2 mb-sm-1">
                            <div className="d-flex justify-content-start">
                                <div className="icon-holder mr-2">
                                    <FontAwesomeIcon icon="calendar" />
                                </div>
                                <p>Date: {moment().format('LL')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather