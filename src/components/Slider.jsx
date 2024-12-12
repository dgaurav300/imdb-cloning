import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slide1.jpeg'
import slide2 from '../images/slide2.jpeg'
import slide3 from '../images/slide3.jpeg'
export default function Slider(){

    return (
        <Carousel>
          <Carousel.Item>
            <img src={slide1} style={{width:"100%",height:"300px"}}/>
            <Carousel.Caption style={{background:"rgba(245,197,24,0.9)",color:"black"}}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>



          <Carousel.Item>
          <img src={slide2} style={{width:"100%",height:"300px"}}/>
            <Carousel.Caption style={{background:"rgba(245,197,24,0.9)",color:"black"}}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={slide3} style={{width:"100%",height:"300px"}}/>
            <Carousel.Caption style={{background:"rgba(245,197,24,0.9)",color:"black"}}>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}