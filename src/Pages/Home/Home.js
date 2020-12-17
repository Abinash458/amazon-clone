import React from 'react';

import Product from '../../components/Product/Product';

import './home.css';
import banner from '../../assets/amazonBanner.jpg';
import LeanStartUpBook from '../../assets/theLeanStartUpBook.jpg'
import Kenwood from '../../assets/Kenwood.jpg';
import Samsung59 from '../../assets/Samsung59.jpg';
import AmazonEcho from '../../assets/amazonEcho.jpeg';
import AppleIpad from '../../assets/appleIpad.jpg';
import SamsungSuperUltra from '../../assets/samsungSuper.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img src={banner} alt="" className="home_image" />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image={LeanStartUpBook}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image={Kenwood}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung 59.8 cm (23.5 inch) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI"
                        price={199.99}
                        rating={3}
                        image={Samsung59}
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image={AmazonEcho}
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image={AppleIpad}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image={SamsungSuperUltra}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
