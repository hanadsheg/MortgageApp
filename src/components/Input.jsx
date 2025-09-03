import '../styles/input.css'

function InputCalculator({inputTitle, inputMeasure, value, name, onChange}) {
  let isPound = false;

  if (inputMeasure === "£") {
    isPound = true;
  } 

  return (
    <div className="input-calculator">
      <p className = "input-title">{inputTitle}</p>
      <div className = "field-container">
        {isPound && <p className="input-measure">{inputMeasure}</p>}
        <input className="input-field" name = {name} value = {value} onChange = {onChange} type="text" />
        {!isPound && <p className="input-measure">{inputMeasure}</p>}
      </div>
    </div>
  )

}


export default InputCalculator;