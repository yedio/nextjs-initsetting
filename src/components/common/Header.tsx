import styled from 'styled-components';

export default function Header() {
  return <HeaderWrap>❄️</HeaderWrap>;
}

const HeaderWrap = styled.header`
  display: flex;
  padding: 0 15px;
  align-items: center;
  width: 100vw;
  height: 60px;
  font-size: 30px;
  background-color: navy;
`;
