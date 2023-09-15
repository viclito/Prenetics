import one from "../assets/one.webp"
import two from "../assets/two.webp"
import three from "../assets/three.webp"
import four from "../assets/four.webp"
import "../css/Picswithdis.css"

const Picwithdis = () => {
  return (
    <div>
        <div className="picwith">
            <div className="one">
                <div className="left">
                    <div className="title">Actionable insights to jumpstart your health journey</div>
                    <div className="disc">Achieve your every health goal with information and insights provided by our tests’ comprehensive DNA reports. Discover your personalised path to losing weight, improving nutrition, or getting fit, and learn how you can optimise your overall well-being by uncovering how your DNA influences your stress levels, sleep, skin, behaviour, talents, traits, and more.</div>
                </div>
                <div className="right">
                    <img src={one} alt="" />
                </div>
            </div>


            <div className="two">
                <div className="left">
                    <div className="title">We are in a fight for prevention — not treatment</div>
                    <div className="disc">Our tests take preventive healthcare to the next level by helping you understand your inherited risks for cancer, heart disease, dementia and more, so you can take early action as necessary.</div>
                </div>
                <div className="right">
                    <img src={two} alt="" />
                </div>
            </div>



            <div className="one">
                <div className="left">
                    <div className="title">Know your carrier status, protect their future</div>
                    <div className="disc">Learn about any potentially carried health risks that may be passed on to your children, and make a difference inyour family’s well-being by ensuring you are as prepared as possible for this stage of your life.</div>
                </div>
                <div className="right">
                    <img src={three} alt="" />
                </div>
            </div>




            <div className="two">
                <div className="left">
                    <div className="title">Discover your roots and genetic traits</div>
                    <div className="disc">Our tests can highlight previously unknown information about your family history and ancestry. Take a deep dive into your DNA to understand more about why you are the way you are: your physical, personality, success, and behavioural traits can all be uncovered with just a single swab.</div>
                </div>
                <div className="right">
                    <img src={four} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Picwithdis