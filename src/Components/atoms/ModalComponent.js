import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export const ModalComponent = (
    {
        children,
        show=()=>
        {

        },
        onHide={},
        className='',
        title='',
        footerText='',
        size='',
        handleClose=()=>{}
    }
) => {
  return (
    <div>
        <Modal size={size} show={show} onHide={onHide} className={className}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
            {children}

            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           {footerText}
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}
