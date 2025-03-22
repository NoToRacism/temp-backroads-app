import Title from './Title'
import { services } from '../data'

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title titlePart1='our' titlePart2='services' />


            <div className="section-center services-center">
                {/* destructuring the service section */}
                {services.map((service) => {
                    const { id, icon, title, message } = service;
                    return (
                        <article className="service">
                            <span key={id} className="service-icon"><i className={icon}></i></span>
                            <div className="service-info">
                                <h4 className="service-title">{title}</h4>
                                <p className="service-text">
                                    {message}
                                </p>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section >
    )
}

export default Services
