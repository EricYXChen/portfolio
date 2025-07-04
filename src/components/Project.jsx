import React from 'react'
import ProjectCard from './ProjectCard'; 

const works = [
  {
    imgSrc: '',
    title: 'Chatroom App',
    tags: ['Websockets', 'Web App', 'Spring Boot'],
    projectLink: ''
  },
  {
    imgSrc: '/images/musclememo.png',
    title: 'Workout App',
    tags: ['Mobile', 'API'],
    projectLink: 'https://github.com/RohitKrishnaGit/Muscle-Memo'
  },
  {
    imgSrc: '/images/recommender.png',
    title: 'Anime recommender',
    tags: ['Data Science', 'Clustering', 'Python'],
    projectLink: 'https://colab.research.google.com/drive/1L6EcwY8mUQJKfLN7f9viTctcF5egkh13?usp=sharing'
  },
];

const Project = () => {
    return (
        <section className="section" id= "project">
            <div className ="container">
                <h2 className="headline-2 mb-8">
                    Project Highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                        <ProjectCard
                            key ={key}
                            imgSrc = {imgSrc}
                            title = {title}
                            tags = {tags}
                            projectLink = {projectLink}

                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;