import FlexView from "../../components/atoms/flexView/flexView";
import Navbar from "../../components/molecule/navbar/navbar";

function Feed() {
  return (
    <>
      <Navbar />
      <FlexView
        column
        justifyContent={"center"}
        alignItems={"center"}
      ></FlexView>
    </>
  );
}

export default Feed;
