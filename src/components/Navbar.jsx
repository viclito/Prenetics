import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"
import data from "../utils/prod.json"
import "../css/navbar.css"
import { useState } from "react"

const Navbar = () => {

    const [active , setActive ] = useState("nav2list")
    const [product , setProduct] =useState("products")

    const products =()=>{
        let active = ("activeprod")
        return setProduct(active)
    }
    const noProducts =()=>{
        let active = ("products")
        return setProduct(active)
    }

    const open = () =>{
        let active1 = ("add")
        return setActive(active1)
     }
    const close =() =>{
        let active1 = ("nav2list")
        return setActive(active1)

    }
  return (
    <div className="head">
        <nav >
            <div className="navbar">
                <div className="innernav">
                    <div className="inner">
                        <img src={logo} alt="" className="" />
                        <ul className="">
                            <li><a href="" className=""  onMouseOver={()=>products()}>Our Products</a></li>
                            <li><a href="" className="" onMouseOver={()=>noProducts()}>Learn</a></li>
                            <li><a href="" className="" onMouseOver={()=>noProducts()}>DNA Report</a></li>
                            <li><a href="" className="" onMouseOver={()=>noProducts()}>Testimonials</a></li>
                            <li><a href="" className="" onMouseOver={()=>noProducts()}>Blog</a></li>
                            <li><a href="" className="" onMouseOver={()=>noProducts()}>For Buisness</a></li>
                        </ul>
                    </div>

                    <div className="icons">
                        <ion-icon name="globe"></ion-icon>
                        <ion-icon name="wifi"></ion-icon>
                        <ion-icon name="arrow-round-down"></ion-icon>
                        <ion-icon name="person"></ion-icon>
                        <ion-icon name="cart"></ion-icon>
                    </div>
                </div>
            </div>
        </nav>

        <div className="navbar2">
            <div className="innernav2">
                <ion-icon className="ion-icon" name="menu" onClick={()=> open()} ></ion-icon>
                <img src={logo2} alt="" />
                <ion-icon name="cart" ></ion-icon>
            </div>
            
        </div>
        <div className={active}>
            <div className="float">
                <div className="innerfloat">
                    <ion-icon className="ion-icon" name="close" onClick={()=> close()} ></ion-icon>
                </div>
            </div>
            
            <ul className="">
                <li><a href="" className=" ">Our Products</a></li>
                <li><a href="" className="">Learn</a></li>
                <li><a href="" className="">DNA Report</a></li>
                <li><a href="" className="">Testimonials</a></li>
                <li><a href="" className="">Blog</a></li>
                <li><a href="" className="">For Buisness</a></li>
            </ul>
        </div>
        <div className={product} >
            <div className="innerproducts" >
                {data.map((item,i)=>(
                    <div key={i} className="list">
                        <img src={item.img} className="" alt="" />
                        <div className="title">{item.title}</div>
                        <div className="discrip" >{item.discription}</div>

                    </div>
                ))}
                
            </div>
            <div className="line" onMouseOver={()=>noProducts()}></div>
            
        </div>
    </div>
  )
}

export default Navbar