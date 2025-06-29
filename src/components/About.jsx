
const aboutItems = [
    {
      label: 'Internships Done',
      number: 6
    },
    {
      label: 'Years of experience',
      number: 2
    }
  ];

const About = () =>{
    return (
        <section id = "about" className ="section">
            <div className = "container">
                <div className = "bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className = "text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome! I'm Eric a recent graduate from the University of Waterloo with a degree in Computer Engineering. As a part of my studies, I completed six internships across four  companies totaling two years of software development experience. I specialize in creating scalable backend platforms and bringing ideas to life on websites.
                    </p>
                

                    <div className = "flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key = {key}>
                                    <div className = "flex items-center md:mb-2">
                                        <span className = "text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className = "text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className = "text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img src="/images/logo.svg" alt ="Logo" width = {30} height = {30} className = "ml-auto md:w-[40px] md:h-[40px]"></img>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default About;