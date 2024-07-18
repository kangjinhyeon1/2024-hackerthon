import styled from "styled-components";
import { color } from "../styles/global";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetCookie } from "../utils/cookie";
import axios from "axios";

const BASEURL = process.env.REACT_APP_BASE_URL;

export const Revierwritepage = () => {
  const [star, setStar] = useState<number>(0);
  const [content, setContent] = useState<string>("");
  const level = [1, 2, 3, 4, 5];
  const navigate = useNavigate();
  const params = useParams();
  const token = GetCookie("access_token");

  const handleWrite = async () => {
    try {
      const res = await axios.post(
        `${BASEURL}/review/${params.id}`,
        {
          content: content,
          rating: star,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      navigate("/review");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Header>
        <p onClick={() => navigate("/review")}>취소</p>
        <Title>리뷰</Title>
      </Header>
      <Stars>
        {level.map((idx) => {
          return idx > star ? (
            <Star
              id={String(idx)}
              onClick={() => setStar(idx)}
              src="/images/star_empty.svg"
            />
          ) : (
            <Star
              id={String(idx)}
              onClick={() => setStar(idx)}
              src="/images/star_filed.svg"
            />
          );
        })}
      </Stars>
      <Writereviewcontainer>
        <Writereviewtext>내용</Writereviewtext>
        <Writereview>
          <Wrriteviewinput
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="내용을 작성해 주세요"
          />
        </Writereview>
      </Writereviewcontainer>
      <Writereviewbtn onClick={handleWrite}>
        <Btntext>작성 완료</Btntext>
      </Writereviewbtn>
    </View>
  );
};

const View = styled.div`
  width: 393px;
  height: 852px;
`;

const Header = styled.div`
  width: 393px;
  margin-top: 40px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const Reviewbox = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
`;

const Stars = styled.div`
  width: 393px;
  padding-left: 15px;
  margin-top: 20px;
`;

const Star = styled.img`
  width: 35px;
  height: 35px;
`;

const Writereviewcontainer = styled.div`
  width: 393px;
`;

const Writereviewtext = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0 5px 22px;
`;

const Writereview = styled.div`
  width: 350px;
  height: 197px;
  border-radius: 8px;
  background-color: ${color.gray[200]};
  padding: 20px;
  margin-left: 22px;
`;

const Wrriteviewinput = styled.textarea`
  background-color: ${color.gray[200]};
  width: 300px;
  height: 160px;
  border: none;
  word-wrap: break-word;
  &:focus {
    outline: none;
  }
`;

const Writereviewbtn = styled.div`
  width: 350px;
  height: 50px;
  border-radius: 50px;
  background-color: ${color.green[200]};
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 9px;
  top: 694px;
`;

const Btntext = styled.p`
  font-family: 16px;
  font-weight: 500;
  color: ${color.white};
`;
