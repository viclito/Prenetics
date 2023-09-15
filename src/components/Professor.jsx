import {Swiper , SwiperSlide} from "swiper/react"
import "Swiper/css"
import data from "../utils/docs.json"
import { SliderSettings } from "../utils/common"
import "../css/Professor.css"

const Professor = () => {
  return (
    <div className="prof">
        <div className="title">Developed by global leaders in DNA sequencing</div>

        <div className="swiper">
            <Swiper {...SliderSettings}>
                {data.map((item ,i)=>(
                    <SwiperSlide key={i}>
                        <div className="item">
                            <img src={item.img} alt="" className=""/>
                            <div className="name">{item.Name}</div>
                            <div className="studies"> {item.studies}</div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <div className="btn">
            <button className="">Learn About Our Science</button>
        </div>
    </div>
  )
}

export default Professor