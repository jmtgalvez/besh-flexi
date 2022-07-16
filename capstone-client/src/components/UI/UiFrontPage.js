import React from 'react'
import { UIHeader } from '../Body/UIHeader'
import UiNewsFeedsForm from './UiNewsFeedsForm'
import UiNavbar from './UiNavbar'
// import UiFooter from './UiFooter'
import UiSide from './UiSide'


export default function UiFrontPage(){

 
    return (
      <div className='frontPage'>
        {window.innerWidth > 800 && 
          <div className="header">
            <UIHeader />
          </div> 
          }
          <div className="content">
            <div className="navbar">
                <UiNavbar  />
            </div>
            
            <div className="content-body">
              <div className="newsfeeds">
                  <UiNewsFeedsForm />
              </div>
              
              {window.innerWidth > 675 && 
              <div className="side">
                  <UiSide />
              </div>
              }
             
            </div>
          
            
          </div>
        
      </div>
    )
  }
