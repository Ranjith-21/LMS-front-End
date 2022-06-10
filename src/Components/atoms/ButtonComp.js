import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComp = (
    {
        variant='',
        size='md',
        onClick=()=>
        {

        },
        label,
    }
) => {
  return (
    <div>
          <Button
                  variant={variant}
                  size={size}
                  onClick={onClick}
                >
                  {label}
                </Button>
    </div>
  )
}

export default ButtonComp