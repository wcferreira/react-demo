import React from 'react';
import config from 'react-global-configuration'
import cfg from '../config/config'

config.set(cfg)
const UglyBoy = () => {
    return (
        <div>
            <h1>Personal Information</h1>
            <h3>#ID: {config.get('id')}</h3>
            <h3>Name: {config.get('name')}</h3>
            <h3>Position: {config.get('position')}</h3>
            <h3>company: {config.get('company')}</h3>
        </div>
    )
}

export default UglyBoy