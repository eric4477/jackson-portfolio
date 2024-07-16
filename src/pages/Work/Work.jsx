import "./Work.css";
import TabOne from "../../components/TabOne/TabOne";
import TabThree from "../../components/TabThree/TabThree";
import TabTwo from "../../components/TabTwo/TabTwo";
import { Tabs, Tab, Container } from "react-bootstrap";

function Work() {
  return (
    <div className="work container py-5 mt-lg-0 mt-3">
      <p className="subheading">MY WORK</p>
      <h2 className="heading">RECENT WORK</h2>

      <Container className="p-0">
        <Tabs
          defaultActiveKey="graphic-design"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="graphic-design" title="Graphic Design">
            <TabOne />
          </Tab>
          <Tab eventKey="apps" title="Apps">
            <TabTwo />
          </Tab>
          <Tab eventKey="software" title="Software">
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Work;
