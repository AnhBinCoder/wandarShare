

import { Link } from "react-router-dom";
import Slider from "react-slick";
import properties from "../../data/properties";


const BestProperties = () => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {properties.slice(0, 12).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property">
              <div className="thumb">
                <img
<<<<<<< HEAD

=======
                  
>>>>>>> parent of 6eebdbf (second commit)
                  className="img-whp w-100 h-100 cover"
                  src={item.img}
                  alt="fp1.jpg"
                />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    {item.saleTag.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">{val}</a>
                      </li>
                    ))}
                  </ul>
                  {/* End .tag */}

                  <ul className="icon mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-transfer-1"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart"></span>
                      </a>
                    </li>
                  </ul>
                  {/* End .icon */}

                  <Link
                    to={`/listing-details-v1/${item.id}`}
                    className="fp_price"
                  >
<<<<<<< HEAD
                    {item.price} VND
                    <small>/week</small>
=======
                    ${item.price}
                    <small>/mo</small>
>>>>>>> parent of 6eebdbf (second commit)
                  </Link>
                </div>
              </div>
              {/* End .thumb */}

              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    <Link to={`/listing-details-v1/${item.id}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item.location}
                  </p>

                  <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* End .tc_content */}

                <div className="fp_footer">
                  <ul className="fp_meta float-start mb0">
                    <li className="list-inline-item">
                      <Link to="/agent-v2">
                        <img
<<<<<<< HEAD

=======
                         
>>>>>>> parent of 6eebdbf (second commit)
                          src={item.posterAvatar}
                          alt="pposter1.png"
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/agent-v2">{item.posterName}</Link>
                    </li>
                  </ul>
                  <div className="fp_pdate float-end">{item.postedYear}</div>
                </div>
                {/* End .fp_footer */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default BestProperties;
