import styled from "styled-components";
import { BaseBox } from "../shared";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled(BaseBox)`
  padding: 20px 0px;
  text-align: center;
  /* <Link> 태그는 react-router-dom에서 <a> 태그로 변환하기 때문에 <Link> 스타일이 적용됨  */
  a {
    font-weight: 600;
    color: ${(props) => props.theme.mainColor};
    margin-left: 5px;
    text-decoration: none;
  }
`;

function BottomBox({ cta, link, linkText }) {
  return (
    <Container>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </Container>
  );
}

BottomBox.propTypes = {
  cta: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
export default BottomBox;
