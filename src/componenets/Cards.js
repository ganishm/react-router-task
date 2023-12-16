const Cards = ({ data }) => {
    // Map over the keys of the JSON object and render them
    const renderJsonData = () => {
      return data.map((item) => (
        <div className="elementor-post elementor-grid-item">
            <div className="elementor-post__card">
                <a className="elementor-post__thumbnail__link" href={`https://www.example.com/card-`}>
                    <div className="elementor-post__thumbnail">
                        <img
                            width="800"
                            height="500"
                            src={item.imageUrl}
                            className="attachment-full size-full wp-image-12345"
                            alt={`Feature - Card`}
                        />
                    </div>
                </a>
                <div className="elementor-post__text">
                    <p className="elementor-post__title">
                        <a href={`https://www.example.com/card-`} style={{ textDecoration: 'none', color: '#333' }}>{item.title}</a>
                    </p>
                    <div className="elementor-post__excerpt">
                        <p>{item.content}</p>
                    </div>
                    <a className="elementor-post__read-more" href={`https://www.example.com/card-`}>
                        Read More »
                    </a>
                </div>
            </div>
        </div>
      ));
    };
  
    return(
        <>
            <div className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid elementor-has-item-ratio">
            {renderJsonData()}
            </div>
        </>
    );
  };
  
  export default Cards;
  