import Title from './Title';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subtitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { id, title, img, date, price, location, duration } = tour;
          return (
            <article key={id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={img} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam dolore nihil explicabo quidem, architecto enim
                similique.
              </p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>
                  {location}
                </p>
                <p>{duration}</p>
                <p>from {price}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
