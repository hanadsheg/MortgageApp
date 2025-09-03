import Calculator from '../components/Calculator.jsx'
import Header from '../components/Header.jsx'
import ReviewSection from '../components/ReviewSection.jsx'

function HomePage() {
  return (
    <>
      <div className = "calculator-wrapper">
        <Calculator />
      </div>
      <ReviewSection HomePage={true} />
    </>
  )
}

export default HomePage