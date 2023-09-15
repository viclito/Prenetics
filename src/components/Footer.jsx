import logo from "../assets/logo.png" 
import "../css/Footer.css"

const Footer = () => {
  return (
    <div className="whole">
        <div className="footer">
            <img src={logo} alt="" className=""/>
            <div className="top">
                <div className="left">
                    <div className="one">
                        <div className="title">Our Product</div>
                        <div className="font-light">Premium DNA test</div>
                        <div className="font-light">Vital DNA Test</div>
                        <div className="font-light">Health DNA Test</div>
                        <div className="font-light">Family PLanning Test</div>
                    </div>
                    <div className="two">
                        <div className="title">Learn</div>
                        <div className="font">About Us</div>
                        <div className="font-light">Technology</div>
                        <div className="font-light">DNA privacy</div>
                        <div className="font-light">FAQ</div>
                        <div className="font-light">Contact Us</div>
                    </div>
                    <div className="three">
                        <div className="">DNA Reports</div>
                        <div className="font-semibold ">Teatimonials</div>
                        <div className="font-semibold ">Blog</div>
                        <div className="font-semibold ">Refer a Friend</div>
                        <div className="font-semibold ">Family PLanning Test</div>
                    </div>
                    <div className="four">
                        <div className="title">For Buisness</div>
                        <div className="font-light">For Employers</div>
                        <div className="font-light">For Corporate Gifting</div>
                        <div className="font-light">For Exclusive Distributors</div>
                    </div>
                </div>
                <div className="secondleft">
                    <ul className="">
                        <li><a href="" className=" ">Our Products</a></li>
                        <li><a href="" className="">Learn</a></li>
                        <li><a href="" className="">DNA Report</a></li>
                        <li><a href="" className="">Testimonials</a></li>
                        <li><a href="" className="">Blog</a></li>
                        <li><a href="" className="">For Buisness</a></li>
                    </ul>
                </div>

                <div className="right">
                    <h1 className="">Want 25% off your first purchase?</h1>
                    <h2>Join our newsletter and gain privileged access to exclusive offers, sneak peeks, and 25% off your first order!</h2>
                    <div className="type">
                        <input type="text" placeholder="Enter your email address" className=""/>
                    </div>
                    <button className="">Get my discount now</button>


                </div>
                
            </div>

            <div className="bottom">
                <div className="">Tearms of Service</div>
                <div className="">Privacy Poclicy</div>
                <div className="">Informed Consent</div>
            </div>
        </div>

        
    </div>
  )
}

export default Footer