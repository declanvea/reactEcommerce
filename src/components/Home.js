import React from 'react';
import '../styles/App.css';
import { Jumbotron, Button } from 'reactstrap';
import Slider from 'react-slick';

export default class Home extends React.Component {


  render(){
    const settings = {
        dots: true,
        autolay: true,
        autoplaySpeed: 500,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
      <div className="container">
        <Jumbotron style={{backgroundColor:'#013174', marginTop:'10px'}}>
          <h1 className="display-3" style={{fontFamily: 'cursive', textAlign:'center', margin:'30px', color:'white'}}>Welcome to the <span style={{color:'white', textShadow: '2px 0 #000066, 0 2px #000066, 2px 0 #000066, 0 2px #000066'}}>PGA</span> <span style={{color:'red', textShadow: '2px 0 white, 0 2px white, 2px 0 white, 0 2px white'}}>Tour</span> Store!</h1>
          <Slider {...settings}>
            <div style={{display:'flex', justifyContent:'center'}}><img style={{borderRadius: '0.3rem'}} src="http://www.product-reviews.net/wp-content/uploads/Masters-Golf-2013-apps-for-schedule-and-live-streams.jpg" alt='img1'/></div>
            <div style={{display:'flex', justifyContent:'center'}}><img style={{borderRadius: '0.3rem'}} src="http://res.cloudinary.com/usga/image/upload/c_fill,g_face,q_70,w_800/v1/usga/images/article-splash/2016/AS_ShinnecockHillsHole1672.jpg" alt='img2'/></div>
            <div style={{display:'flex', justifyContent:'center'}}><img style={{borderRadius: '0.3rem'}} src="http://blog.williamhill.com.au/wp-content/files/sites/13/2015/07/britishopen.jpg" alt='img3'/></div>
          </Slider>
          </Jumbotron>
      </div>
    );
  }

}
