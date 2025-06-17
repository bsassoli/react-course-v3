const BtnContainer = ({ jobs, callback }) => {
    const renderedJobs = jobs.map((job) => {
        return <button
            key={job.id}
            className="job-btn"
            onClick={() => callback(job.id)}>
                {job.company}
            </button>
    }
    );
    return (
        <div className="btn-container">
            {renderedJobs}
        </div>
    )
}
export default BtnContainer;