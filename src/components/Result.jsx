import '../styles/result.css'

function Result({outputTitle, outputValue}) {
  return (
    <div className = "result-container">
       <p className = "result-title">{outputTitle}</p>
       <p className = "result-value">{outputValue}</p>
    </div>

  )
}

export default Result;