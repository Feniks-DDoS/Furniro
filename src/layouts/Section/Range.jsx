import RangeBody from "@/components/RangeBody.jsx"

const Range = () => {
  return (
    <section className="section section__range" aria-labelledby="range-title">
        <div className="section__inner container">
            <div className="range">
                <div className="range__inner">
                    <div className="range__header">
                        <h2 className="range__title h3" id="range-title">Browse The Range</h2>
                        <p className="range__subtitle h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <RangeBody/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Range