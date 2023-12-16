// Banner.jsx

import React from 'react';
// import CustomNavbar from './CustomNavbar';

const Banner = ({data}) => {
  return (
    <div className="elementor-widget-wrap elementor-element-populated">
      <div className="elementor-element elementor-element-dccf949 elementor-widget elementor-widget-image" data-id="dccf949" data-element_type="widget" data-widget_type="image.default">
        <div className="elementor-widget-container">
          <figure className="wp-caption">
              <img
                decoding="async"
                fetchpriority="high"
                style={{ width: '100%', height: 'auto' }}
                src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header.png"
                className="attachment-full size-full wp-image-14302"
                alt=""
              />
            <figcaption className="widget-image-caption wp-caption-text"></figcaption>
          </figure>
        </div>
      </div>
      {/* <CustomNavbar /> */}
    </div>
  );
};

export default Banner;
