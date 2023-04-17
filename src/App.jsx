import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Card, CardBody, CardHeader, CardLink, Col, Modal, Row } from 'reactstrap'
import bell from './assets/bell.png'
function App() {
  const [notifyToggle, setnotifyToggle] = useState(false)

  const handleNotifyModal = () => {
    setnotifyToggle(!notifyToggle)
  }

  return (
    <div className="App">
      <Button className='bellIcon' onClick={handleNotifyModal}>
      <img src={bell} height='17' width='20' alt="" />
      </Button>
      <Button className='notificationCount' onClick={handleNotifyModal}>
        20
      </Button>
      <div>
          {notifyToggle && 
          <Card style={{
            padding: 0,
            position: 'absolute',
            border: '0.11px solid #d4d4d4',
            borderRadius: '4px',
            width: '30rem'
          }}>
            <CardHeader  style={{
              textAlign:'start',
              borderBottom:'1px solid darkgray',
              padding:'15px 10px'
            }}>You have <span style={{color:'blue'}}>20 new</span> notifications</CardHeader>
            <div style={{
                boxShadow: '0px 0px 1px 0px grey',
                }}>
              <Row style={{
                      display: 'flex',
                      padding: '15px 20px 0px 0px',
                      alignItems:'center'
                    }}>
                  <Col md={3} className="messageType">
                    Broadcast 
                  </Col>
                  <Col md={5} style={{marginLeft:'10px'}}>
                    Hi I am a notification
                  </Col>
                  <Col md={4} style={{marginLeft:'auto'}}>
                    <Button className='viewBtn'>View</Button>
                    <Button className='downloadBtn' style={{backgroundColor:'#11cdef !important'}}>Download</Button>
                  </Col>
              </Row>
              <div className='dateNotify'>
              20/04/2023
              </div>
            </div>
            <div style={{
                boxShadow: '0px 0px 1px 0px grey',
                }}>
              <Row style={{
                      display: 'flex',
                      padding: '15px 20px 0px 0px',
                      alignItems:'center'
                    }}>
                  <Col md={3} className="messageType">
                    Broadcast 
                  </Col>
                  <Col md={5} style={{marginLeft:'10px'}}>
                    Hi I am a notification
                  </Col>
                  <Col md={4} style={{marginLeft:'auto'}}>
                    <Button className='viewBtn'>View</Button>
                    <Button className='downloadBtn' style={{backgroundColor:'#11cdef !important'}}>Download</Button>
                  </Col>
              </Row>
              <div className='dateNotify'>
              20/04/2023
              </div>
            </div>
            <div style={{
                boxShadow: '0px 0px 1px 0px grey',
                }}>
              <Row style={{
                      display: 'flex',
                      padding: '15px 20px 0px 0px',
                      alignItems:'center'
                    }}>
                  <Col md={3} style={{background:'red'}} className="messageType">
                    Secondary 
                  </Col>
                  <Col md={5} style={{marginLeft:'10px'}}>
                    Hi I am a notification
                  </Col>
                  <Col md={4} style={{marginLeft:'auto'}}>
                    <Button className='viewBtn'>View</Button>
                    <Button className='downloadBtn' style={{backgroundColor:'#11cdef !important'}}>Download</Button>
                  </Col>
              </Row>
              <div className='dateNotify'>
              20/04/2023
              </div>
            </div>
          </Card>}
        {/* </Modal> */}
      </div>
    </div>
  )
}

export default App
