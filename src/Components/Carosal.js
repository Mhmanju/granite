import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                        <div>  
                         <div class='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "20px" }} >  
                          
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel>  
                         <Carousel.Item style={{'height':"257px"}} >  
                         <img style={{'height':"257px"}}  
                         className="d-block w-100"  
                        src={'https://tse3.mm.bing.net/th?id=OIP.es4QBHIljbdPRRhgjpmERQHaDO&pid=Api&P=0&w=396&h=173'} alt="description of image" />  
                           <Carousel.Caption>  
                             
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"257px"}}>  
                                 <img style={{'height':"257px"}}  
                                   className="d-block w-100"  
                                    src={'https://tse3.mm.bing.net/th?id=OIP.es4QBHIljbdPRRhgjpmERQHaDO&pid=Api&P=0&w=396&h=173'}   alt="description of image" />  
                                       <Carousel.Caption>  
                                   
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"257px"}}>  
                                       <img style={{'height':"257px"}}  
                                        className="d-block w-100"  
                                         src={'https://tse3.mm.bing.net/th?id=OIP.es4QBHIljbdPRRhgjpmERQHaDO&pid=Api&P=0&w=396&h=173'} alt="description of image"  />  
                                        <Carousel.Caption>  
                                           
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarousel  