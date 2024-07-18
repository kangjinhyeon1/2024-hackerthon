import styled from "styled-components";
import { color } from "../styles/global";

export const Tree = () => {
  return (
    <Wapper>
      <Title>기부 나무 🌱</Title>
    </Wapper>
  );
};

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  gap: 25px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${color.black};
  margin-bottom: 500px;
`;
