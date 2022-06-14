import Recommendations from './Recommendations/Recommendations'
import './Recommended.css'

function Recommended() {
  return (
    <section className="recommended">
        <div className="recommended__hero">
            <h3>"Lo de siempre"</h3>
        </div>
        <Recommendations/>
    </section>
  )
}

export default Recommended