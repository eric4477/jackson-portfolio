import { useState } from "react";
import { Collapse, Button } from "react-bootstrap";

function TabOne() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="project">
            <div className="desc pt-4">
              <div className="con">
                <h3>
                  <a href="#">Work 01</a>
                </h3>
                <div className="icons">
                  <span>
                    <a href="#">
                      <i className="fa-solid fa-share-nodes"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-eye pe-1"></i>
                      100
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-heart pe-1"></i>
                      49
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project two">
            <div className="desc pt-4">
              <div className="con">
                <h3>
                  <a href="#">Work 02</a>
                </h3>
                <div className="icons">
                  <span>
                    <a href="#">
                      <i className="fa-solid fa-share-nodes"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-eye pe-1"></i>
                      100
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-heart pe-1"></i>
                      49
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project three">
            <div className="desc pt-4">
              <div className="con">
                <h3>
                  <a href="#">Work 03</a>
                </h3>
                <div className="icons">
                  <span>
                    <a href="#">
                      <i className="fa-solid fa-share-nodes"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-eye pe-1"></i>
                      100
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-heart pe-1"></i>
                      49
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project four">
            <div className="desc pt-4">
              <div className="con">
                <h3>
                  <a href="#">Work 04</a>
                </h3>
                <div className="icons">
                  <span>
                    <a href="#">
                      <i className="fa-solid fa-share-nodes"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-eye pe-1"></i>
                      100
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-heart pe-1"></i>
                      49
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Collapse in={open}>
          <div className="col-md-6">
            <div className="project five">
              <div className="desc pt-4">
                <div className="con">
                  <h3>
                    <a href="#">Work 05</a>
                  </h3>
                  <div className="icons">
                    <span>
                      <a href="#">
                        <i className="fa-solid fa-share-nodes"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-regular fa-eye pe-1"></i>
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-regular fa-heart pe-1"></i>
                        49
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse in={open}>
          <div className="col-md-6">
            <div className="project six">
              <div className="desc pt-4">
                <div className="con">
                  <h3>
                    <a href="#">Work 06</a>
                  </h3>
                  <div className="icons">
                    <span>
                      <a href="#">
                        <i className="fa-solid fa-share-nodes"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-regular fa-eye pe-1"></i>
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-regular fa-heart pe-1"></i>
                        49
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {open ? "Show Less" : "Show More"}
      </Button>
    </>
  );
}

export default TabOne;
