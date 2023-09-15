import image1 from "../assets/first1.png"
import image2 from "../assets/first2.png"
import china from "../assets/china.webp"
import "../css/Landingpage.css"

const Landingpage = () => {
  return (
    <div>
        <div className="landimg">
            <div className="innerlandimg">
                <img src={image1} alt="" className=""/>
                <h1 className="">About Us</h1>
            </div>
            <div className="innerlandimg2">
                <img src={image2} alt="" className=""/>
                <h1 className="title">About Us</h1>
            </div>
        </div>


        <div className="landtext">
            <h1 className="landtitle" >HEAR FROM OUR FOUNDER, DANNY YEUNG</h1>
            <div className="landdisc" > 

                <div className="left">
                    <h1 className=""> HEAR FROM OUR FOUNDER, DANNY YEUNG</h1>
                    <blockquote className="">At CircleDNA, we empower individuals with valuable health insights to live healthier and happier lives. We give everyone the power to be in control of their own health.</blockquote>
                    <p className="">Danny Yeung, CEO of Prenetics</p>
                    <button className="">Play Video</button>
                </div>
                
                <div className="right">
                    <img src={china} alt="" className=""/>
                </div>
            </div>

            <div className="landpara">
                <div className="left">
                    <div className="title">Our Vision</div>
                    <p>In our ideal world, late disease and cancer detection would cease to exist. People would be cured before they even get sick. Every person would be equipped with the information they need to make the best decisions possible for their current and future health. To make this a reality, healthcare and prevention needs to be personalised to each individual. That’s where CircleDNA comes in.</p>
                </div>
                <div className="right">
                    <div className="title">Our Mission</div>
                    <p>CircleDNA empowers people to proactively manage their health with insights derived from the most personal source of information there is – your DNA. We are honoured and humbled to unite with others who share our mission, including celebrities, ChangeMakers, and the media. Together, we can work to build a world with good health, prevention, and empowerment for all.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Landingpage