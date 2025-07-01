
import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Backend Development'
    },
    {
      imgSrc: '/images/csharp.svg',
      label: 'C#',
      desc: 'Backend Development'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/spring.svg',
      label: 'Spring Boot',
      desc: 'Java Framework'
    },
    {
      imgSrc: '/images/sql.svg',
      label: 'SQL',
      desc: 'Database Management'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Scripting / AI'
    },
  ];


const Skill = () => {
    return(
        <section className = "section">
            <div className = "container">
                <h2 className = "headline-2">
                    Essential Tools I use
                </h2>

                <p className = "text-zinc-400 mt-3 mb-3 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create scalable backend applications and design websites.
                </p>

                <div className = "grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) =>(
                            <SkillCard 
                                key = {key}
                                imgSrc = {imgSrc}
                                label={label}
                                desc = {desc}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill