import Title from './Title'
import { tours } from '../data'

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title titlePart1='featured' titlePart2='tours' />

            <div className="section-center featured-center">
                {tours.map((tour) => {
                    const { id, images, date, title, info, location, days, price } = tour;
                    return (
                        <article key={id} className="tour-card">
                            <div className="tour-img-container">
                                <img src={images} className="tour-img" alt="" />
                                <p className="tour-date">{date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{title}</h4>
                                </div>
                                <p>
                                    {info}
                                </p>
                                <div className="tour-footer">
                                    <p>
                                        <span><i className="fas fa-map"></i></span> {location}
                                    </p>
                                    <p>{days}</p>
                                    <p>{price}</p>
                                </div>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}

export default Tours
