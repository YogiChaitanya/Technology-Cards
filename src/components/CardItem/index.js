// Write your code here.
import './index.css'

const JobProfile = props => {
  const {jobDetails} = props
  const {id, title, description, imgUrl, className} = jobDetails
  console.log(id)

  return (
    <li className={`job-card-container ${className}`}>
      <div>
        <h1 className="heading1">{title}</h1>
        <p className="paragraph1">{description}</p>
        <img src={imgUrl} className="job-image" alt={title} />
      </div>
    </li>
  )
}

export default JobProfile
