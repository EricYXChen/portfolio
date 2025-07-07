import slLogo from '../../images/Sparklease.png'
import kelkLogo from '../../images/KELK.png'
import janaLogo from '../../images/JANA.png'
import tdLogo from '../../images/TD.png'

const workItem = [
    {
        duration: 'Sept. 2024 - Dec. 2024',
        company: 'Sparklease Inc',
        title: 'Full Stack Developer Intern',
        imgSrc: slLogo,
        description: "Spearheaded the development of an MVC-structured webpage to showcase discounted cars by integrating a back-end flagging system for automated price drop detection and achieving 100+ daily impressions. \nDesigned modular Azure metric tracking functions, enabling performance monitoring and bottleneck detection.\nStreamlined the car listing process by implementing an in-memory cache speeding up page loads by 300%."
    },
    {
        duration: 'Feb. 2024 - Apr. 2024',
        company: 'KELK',
        title: 'Software Developer Intern',
        imgSrc: kelkLogo,
        description: "Led the development of an internal tool for testing hardware using JavaScript, Bootstrap and Python Flask.\nDeveloped a UDP broadcaster and receiver to send REST requests over a local network, allowing for wireless testing and validation of hardware.\nDesigned a state machine using Python to track the progress of each test along with a multi-threaded component to test devices in parallel, reducing total runtime by over 50%."

    },

    {
        duration: 'Jan. 2023 - Apr. 2023',
        company: 'JANA Solutions',
        title: 'Junior Software Developer Intern',
        imgSrc: janaLogo,
        description: "Implemented C# generic repository classes to streamline data access across multiple risk calculation services, improving maintainability and code re-usability.\nResolved page overflow and loading errors by implementing backend pagination endpoints, reducing the response times of search results and page loads by 40%.\nAuthored documentation for 20+ APIs, detailing summaries, parameters and return codes to improve readability."
    },
    {
        duration: 'May. 2022 - Aug. 2022',
        company: 'TD Bank',
        title: 'Software Engineering Intern',
        imgSrc: tdLogo,
        description: "Designed and implemented back-end features for a new debit card printing app deployed in 200+ branches across the U.S., enabling seamless processing of print requests and customer data with Java and Oracle SQL.\nDeveloped Spring-based GraphQL endpoints to support multiple debit card types, and integrated them into a React frontend using Axios and TypeScript objects.\nCreated a database schema for storing detailed print requests in a SQL database, ensuring reliable data entry for all supported card types."
    },
    {
        duration: 'Sept. 2021 - Dec. 2021',
        company: 'TD Securities',
        title: 'Software Developer Intern',
        imgSrc: tdLogo,
        description: "Automated the retrieval and analysis of high-frequency securities data with SQL stored procedures and Java post-processing to reduce query time by 30%.\nImplemented an automated outlier detection system for spreadsheets utilizing the Java Workbook object to highlight anomalies such as missing dates or stock prices.\nMigrated a webpage for viewing trading data to a React front-end utilizing React hooks to create dynamic tables."
    },
    {
        duration: 'Jan. 2021 - Apr. 2021',
        company: 'TD Bank',
        title: 'Software Developer Intern',
        imgSrc: tdLogo,
        description: "Improved user experiences on TD’s EasyWeb online banking platform by developing 15+ web modules such as modals, dropdowns, and tables.\nLed the refactoring of a JSP in Spring Boot to meet accessibility standards for JAWS users, improving UI usability across assistive technologies.\nUtilized PuTTY to SSH into production servers and troubleshoot issues, minimizing system downtime."
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