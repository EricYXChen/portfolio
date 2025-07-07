import resume from "../../images/resume.pdf"


const ResumeViewer = () => {
    return (
        <>
        <iframe src={resume} width="100%" height="1000vh" style={{border: 'none' }} title="Resume Viewer" />
        </>
    )
}

export default ResumeViewer;