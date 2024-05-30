import React from "react";
import Information from '../data.json';
import Design from '../components/design.json';

const Data = () => {
  return (
    <>
      <div className="container">
        <div className="fw-semibold text-center">
          "Empower Your Potential with Cutting-Edge AI Tools: Unlocking Efficiency, Innovation, and Growth."
        </div>
        <br />
        <br />
        <div className="row">
          <div className="d-flex justify-content-start me-12 col-lg-6">
          <div className="p-3">
              <div className="fw-bolder fs-3 text-center">For Developers</div>
              {
                Information.aiToolsForStudents.map(datas => {
                  return (
                    <div key={datas.name} className="row p-3">
                      <div className="card col-12 p-3">
                        <div className="card-body">
                          <h5 className="card-title">{datas.name}</h5>
                          <p className="card-text">
                            {datas.description}
                          </p>
                          <a href={datas.link} className="btn btn-primary">
                            Go to {datas.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="d-flex justify-content-end col-lg-6">
            <div className="p-3">
              <div className="fw-bolder fs-3 text-center">For Designers</div>
              {
                Design.aiToolsForFrontEndDesigners.map(datas => {
                  return (
                    <div key={datas.name} className="row p-3">
                      <div className="card col-12 p-3">
                        <div className="card-body">
                          <h5 className="card-title">{datas.name}</h5>
                          <p className="card-text">
                            {datas.description}
                          </p>
                          <a href={datas.link} className="btn btn-success">
                            Go to {datas.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Data;
