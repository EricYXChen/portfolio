const workItem = [
    {
        duration: 'Sept. 2024 - Dec. 2024',
        company: 'Sparklease Inc',
        title: 'Full Stack Developer Intern',
        imgSrc: '/images/Sparklease.png',
        description: "Spearheaded the development of an MVC-structured webpage to showcase discounted cars by integrating a back-end flagging system for automated price drop detection and achieving 100+ daily impressions. \nDesigned modular Azure metric tracking functions, enabling performance monitoring and bottleneck detection.\nStreamlined the car listing process by implementing an in-memory cache speeding up page loads by 300%."
    },
    {
        duration: 'Feb. 2024 - Apr. 2024',
        company: 'KELK',
        title: 'Software Developer Intern',
        imgSrc: '/images/KELK.png',
        description: "Developed RESTful endpoints coupled with a UDP Broadcaster to initiate wireless tests and validation, enabling real-time testing for up to 10 concurrent devices. \nDesigned an internal dashboard for testing a new hardware line, utilizing JavaScript and Bootstrap to provide real-time validation of hardware configurations and test results.\nAdded multi-threading capability to existing unit test harness, reducing end-to-end latency by 75%."

    },

    {
        duration: 'Jan. 2023 - Apr. 2023',
        company: 'JANA Solutions',
        title: 'Junior Software Developer Intern',
        imgSrc: '/images/JANA.png',
        description: "Implemented reusable C# generic repository classes to streamline data access across multiple risk calculation entities, improving maintainability and re-usability of code.\nCollaborated with front-end engineers to create endpoints that enabled pagination, uplifting website performance.\nAuthored documentation for 20+ APIs, detailing summaries, parameters and return codes to improve readability."
    },
    {
        duration: 'May. 2022 - Aug. 2022',
        company: 'TD Bank',
        title: 'Software Engineering Intern',
        imgSrc: '/images/TD.png',
        description: "Designed and implemented back-end features for a debit card printing app deployed in 1,000+ branches across the U.S., enabling seamless processing of print requests and customer data with Java and Oracle SQL.\nBuilt efficient endpoints using Spring and GraphQL to support various debit card types, streamlining printing workflows and improving operational efficiency.\nRemoved 2+ hours a week used for deployments with a Python script to automate the triaging of server errors."
    },
    {
        duration: 'Sept. 2021 - Dec. 2021',
        company: 'TD Securities',
        title: 'Software Developer Intern',
        imgSrc: '/images/TD.png',
        description: "Reduced 10+ hours weekly on data entry by creating daily webjobs with Java and Azure to compile numbers from a SQL database into spreadsheets tailored for different business applications.\nMigrated a legacy internal dashboard for viewing trading data to a React and .NET tech stack to create a modernized and maintainable webpage.\nUsed Java to create an internal tool to move daily log files between network drives, saving 15+ minutes daily."
    },
    {
        duration: 'Jan. 2021 - Apr. 2021',
        company: 'TD Bank',
        title: 'Software Developer Intern',
        imgSrc: '/images/TD.png',
        description: "Optimized user experiences on TD’s EasyWeb online banking platform by developing 15+ web modules such as modals, dropdowns, and tables.\nLead the refactoring of a Jakarta Server Page in a Spring MVC project by implementing aria roles to improve the accessibility needs of job access with speech (JAWS) users.\nWorked closely with development team to debug production deployment issues using PuTTY to view error logs."
    }
]

const Work = () => {
    return(
        <section id = "work" className = "section">
            <div className = "container">
                <h2 className = "headline-2">
                    Work Experience
                </h2>

                <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-3 mb-3">
                    {    
                    workItem.map(({duration, company, title, imgSrc, description}, key) => (
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{duration}</time>
                            <div class = "company-headline flex items-center gap-2">
                                <img class ="w-10 h-10" src={imgSrc}></img>
                                <h3 class="headline-3 py-6">{company} - {title}</h3>
                            </div>
                            <ul class = "list-disc pl-5">
                                {description.split('\n').map((line, index) => (
                                    <li key={index} class="text-zinc-400 mt-3 mb-30" >{line}</li>
                                    ))}
                            </ul>
                        </li>
                    ))     
                    }   
                    
                </ol>
            </div>
        </section>



    )
}

export default Work