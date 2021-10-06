import Nav from "../components/Nav";
import Tag from "../components/Tag";
import Title from "../components/Title";

const Main = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Title />
      <Nav />
      <div className="main">{props.children}</div>
      <Tag />
    </div>
  );
};

export default Main;
