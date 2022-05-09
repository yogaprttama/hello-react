import styled from "styled-components";

const View = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = (props) => {
  return <View>{props.children}</View>;
};

export default Container;
