import React from "react";

const TopBanner = () => {
  return (
    <div className="container">
      <div className="card mb-3" Style="max-width: 540px;">
        <div className="row g-0">
          <div className="col-md-4">
            <img
            style={{width: "500px" , height:"300px"}}
              src="https://image.shutterstock.com/image-photo/shopping-grand-bazar-traditional-turkish-260nw-1912636420.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
