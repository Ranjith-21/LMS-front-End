import React from 'react'
import { Table } from 'react-bootstrap'

export const TableComponent = (
    {
        children,
        headerOne,
        headerTwo,
        headerThree,
        headerFour,
        headerFive,
        headerSix,
        headerSeven,
        headerEight,
        headerNine,
        headerTen,
    }
)=>
    {

        
  return (
    <div>
        <Table>
            <thead>
                <td>{headerOne}</td>
                <td>{headerTwo}</td>
                <td>{headerThree}</td>
                <td>{headerFour}</td>
                <td>{headerFive}</td>
                <td>{headerSix}</td>
                <td>{headerSeven}</td>
                <td>{headerEight}</td>
                <td>{headerNine}</td>
                <td>{headerTen}</td>
           </thead>
           <tbody>
               {children}
           </tbody>
        </Table>
    </div>
  )
}
