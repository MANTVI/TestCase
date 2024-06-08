import React from 'react'
import FormComponent from './FormComponent'
import EZ from './image/EZ.png'
import './Email.css'

function Email() {
    return (
        <div className="email">
        <div className="email-header">
          <img src={EZ} alt="Logo" className="card-logo" />
          <h2 className="email-heading">suit Of business Support Service</h2>
        </div>
        <div className="email-content">
          <p>This is the content of the card. It can include text, images, and other HTML elements.This is the content of the card. It can include text, images, and other HTML elements.</p>
        </div>
        <div className="email-form">
            <FormComponent/>
          
        </div>
      </div>
    )
}

export default Email
