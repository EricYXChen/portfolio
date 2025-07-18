

import {ButtonPrimary, ButtonOutline} from './Button'
import hero from "../../images/my_photo.jpg"

const Hero = () => {
    return (
        <section id = "home" className = "pt-28 lg:pt-36">
            <div className = "container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div>
                    <div className = "flex items-center gap-3">

                        <div className ="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className = "relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className = "absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            available for work
                        </div>
                    
                    </div>
                    <h2 className = "headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Solutions and Experiences
                    </h2>

                    <div className = "flex items-center gap-3">
                        <ButtonPrimary
                        href = "https://scarlet-perle-83.tiiny.site" 
                        label = "Download CV"
                        icon = "download"/> 

                        <ButtonOutline
                        href = "#about"
                        label = "Scroll Down"
                        icon = " arrow_downward" />
                    </div>
                </div>

                <div className = "hidden lg:block">
                    <figure className = "w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-4040 to-65% rounded-[60px] overflow-hidden">
                        <img src ={hero} width = {656} height = {800} alt = "Eric Chen" className = "w-full"></img>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero