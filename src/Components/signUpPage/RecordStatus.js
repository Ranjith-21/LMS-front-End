import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecordStatus() {
    const [show, setshow] = useState(true)

    let handleClose = () => {
        setshow(false)
    }

    let navigate=useNavigate()
    let navigateToLogin=()=>
    {
        navigate('/')
    }

  return (
    <div>
         <Modal show={show} size='md' aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header>
          <Modal.Title style={{fontSize:'30px',color:'#086288',marginLeft:'40px'}}>Record Updated Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Header className='justify-content-center'>
          <button onClick={navigateToLogin} className='btn btn-primary' style={{padding:'2px 30px',fontSize:'25px'}}>OK</button>
        </Modal.Header>
      </Modal>
    </div>
  )
}

export default RecordStatus