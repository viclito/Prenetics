import final from "../assets/final.webp"
import fea1 from "../assets/fea1.webp"
import fea2 from "../assets/fea2.webp"
import fea3 from "../assets/fea3.webp"
import fea4 from "../assets/fea4.webp"
import fea5 from "../assets/fea5.webp"
import fea6 from "../assets/fea6.webp"
import "../css/features.css"

const Features = () => {
  return (
    <div>
        <div className="dna">
            <div className="innerdna">
                <div className="text">
                    <div className="title">We always put your privacy first</div>
                    <div className="sub">Privacy is in our DNA</div>
                    <p>By testing with CircleDNA, we understand that you’re giving us access to your most personal information. That’s a responsibility we take seriously. Protecting your privacy and data security is our top priority, so you can feel rest assured that we are deeply committed to ensuring you can continue to learn about the stories in your DNA - without worrying about your privacy.</p>

                    <button className="">Learn About Our DNA Security</button>
                </div>
                <div className="image">
                    <img src={final} alt="" />
                </div>
            </div>
        </div>


        <div className="feature">
            <div className="heading">As featured in...</div>
            <div className="items">
                <div className="item">
                    <img className="" src={fea1} alt="" />
                    <img className="" src={fea2} alt="" />
                </div>
                <div className="item">
                    <img className="" src={fea3} alt="" />
                    <img className="" src={fea4} alt="" />
                </div>
                <div className="item">
                    <img className="fifth" src={fea5} alt="" />
                    <img className="" src={fea6} alt="" />
                </div>
                
                
                
            </div>
        </div>

        <div className="box">
            <div className="circle">
                <div className="title">Join over 600,000 Circlers who have taken control of their health</div>
                <button className="">Shop Now</button>
            </div>
        </div>

        <div className="box2">
            <ion-icon name="logo-facebook" className="icon"></ion-icon>
            <ion-icon name="logo-instagram" className="icon"></ion-icon>
        </div>
    </div>
  )
}

export default Features