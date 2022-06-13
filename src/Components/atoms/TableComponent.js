import React from 'react'
// import './../../EmplyeeComponents/EmployeeInitialPage.css'
import './../../EmplyeeComponents/EmployeeDetails.css'

function TableComponent({
    theading='',
    firstRow={},
    secondRow={},
    thirdRow={}
}) {
  return (
    <div>
      <table className='empTable'>
        <thead>
          <tr>
            <th>{theading}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {firstRow.map((val, ind) => {
              return (
                  Object.keys(val).map((value, idx1) => {
                      return (
                        <td key={idx1}>
                          {value}:<b>{val[value]}</b>{" "}
                        </td>
                      );
                  })
              )
            })}
          </tr>
          <tr>
            {secondRow.map((val, ind) => {
                return (
                    Object.keys(val).map((value, idx1) => {
                        return (
                          <td key={idx1}>
                            {value}:<b>{val[value]}</b>{" "}
                          </td>
                        );
                    })
                )
            }
            )}
          </tr>
          <tr>
            {thirdRow.map((val, ind) => {
                return (
                    Object.keys(val).map((value, idx1) => {
                        return (
                          <td key={idx1}>
                            {value}:<b>{val[value]}</b>
                          </td>
                        );
                    })
                )
            }
            )}
          </tr>
        </tbody>
      </table>
      <hr
        style={{
          borderTop: "2px dotted black",
          width: "100%",
          backgroundColor: "white",
        }}
      />
    </div>
  );
}

export default TableComponent


