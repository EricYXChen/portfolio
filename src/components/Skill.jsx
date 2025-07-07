import javalogo from '../../images/java.svg'
import csharplogo from '../../images/csharp.svg'
import jslogo from '../../images/javascript.svg'
import nodelogo from '../../images/nodejs.svg'
import springlogo from '../../images/spring.svg'
import sqllogo from '../../images/sql.svg'
import reactlogo from '../../images/react.svg'
import pythonlogo from '../../images/python.svg'


import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: javalogo,
      label: 'Java',
      desc: 'Backend Development'
    },
    {
      imgSrc: csharplogo,
      label: 'C#',
      desc: 'Backend Development'
    },
    {
      imgSrc: jslogo,
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: nodelogo,
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: springlogo,
      label: 'Spring Boot',
      desc: 'Java Framework'
    },
    {
      imgSrc: sqllogo,
      label: 'SQL',
      desc: 'Database Management'
    },
    {
      imgSrc: reactlogo,
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: pythonlogo,
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