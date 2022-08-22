import { Link } from "react-router-dom";

const TopManage = () => {
  return (
    <div className="content" style={{ position: "fixed" }}>
      <div className="Table">
        <div className="mlists">
          <Link className="lisItem" to="/temporayData">
            Entities
          </Link>
          <Link className="lisItem" to="/temporayData">
            Tools
          </Link>
          <Link className="lisItem" to="/temporayData">
            Transforms
          </Link>
          <Link className="lisItem" to="/temporayData">
            Procedures
          </Link>
          <Link className="lisItem" to="/temporayData">
            Check temporary datas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopManage;
