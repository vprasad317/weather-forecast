import React, { Component, useEffect, useState } from 'react';
import Weather from './weather';
import Loader from './loader';
import {results} from '../data';


class Content extends React.Component {
    
    AppUrl = 'https://api.openweathermap.org/data/2.5';
    API_Key = 'f7c0ba2fad574dffa3986e99c51907d2';
    lat;
    long;
    state;
    
    constructor(props) {
        super (props);
        this.state = {
            lat : null,
            long: null,
            data: null
        }
       
    }
    componentWillMount() {
       const getGeoInfo = () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(position => {
                    let coordinates = 
                    {lat : position.coords.latitude,
                     long : position.coords.longitude
                    }

                    resolve(coordinates);
                })
            })
        }
       getGeoInfo().then(data => {
        fetch(`${this.AppUrl}/weather/?lat=${data.lat}&lon=${data.long}&units=metric&APPID=${this.API_Key}`)
            .then(data => data.json())
            .then(result => {
                this.setState({data :result });
               
            }, error => {
               
            });
    })
    }
    

    render() {
    const loading = (this.state.data !== null);
    return (
        <div className="container pb-5">
           {loading ?
                <Weather weatherData = {this.state.data} /> :
                <Loader />}
        </div>
    );
}
}

export default Content