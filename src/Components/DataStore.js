import React from 'react'
import { useState } from 'react';
import LoginPage from './LoginPage';

function DataStore() {
    const [data, setData] = useState
    (
        [{
        employeeId:'deepthi',
        password:'deepthi123',
        role:'admin'
        },
        {
        employeeId:'Satyam',
        password:'Satyam123',
        role:'employee'
        },
        {
        employeeId:'Raju',
        password:'Raju123',
        role:'trainee'
        }
    ])

   localStorage.setItem('data', JSON.stringify(data))

  return (
    <div>
    </div>
  )
}

export default DataStore