import styled from "styled-components";
import { MyDonation } from "../components/common/myDonation";
import { color } from "../styles/global";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCookie } from "../utils/cookie";
import axios from "axios";

interface CheckReview {
  post_id: number;
  title: string;
  address: string;
  start_date: string;
  end_date: string;
  image_url: string;
  applicant_name: string;
}

const BASEURL = process.env.REACT_APP_BASE_URL;

export const Reviewpage = () => {
  const navigate = useNavigate();

  const token = GetCookie("access_token");
  const [data, setData] = useState<CheckReview[]>([]);
  const getWrite = async () => {
    try {
      const res = await axios.get(`${BASEURL}/post/review`, {
        headers: { Authorization: "Bearer " + token },
      });

      setData(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWrite();
  }, []);
  return (
    <View>
      <Header>
        <Title>재능 기부자에게 리뷰 남기기</Title>
      </Header>
      <Reviewlist>
        {data.map((res) => {
          return (
            <ReviewWarpper>
              <Reviewbox>
                <MyDonation
                  post_id={res.post_id}
                  title={res.title}
                  address={res.address}
                  start_date={res.start_date}
                  end_date={res.end_date}
                  image_url={res.image_url}
                  re={false}
                  my={true}
                  name={res.applicant_name}
                />
              </Reviewbox>
              <Checkreviewbtn
                onClick={() => navigate(`/reviewwrite/${res.post_id}`)}
              >
                리뷰 작성하러 가기
              </Checkreviewbtn>
            </ReviewWarpper>
          );
        })}
      </Reviewlist>
    </View>
  );
};

const View = styled.div`
  width: 393px;
  height: 852px;
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  padding-top: 30px;
  padding-left: 20px;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Reviewlist = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ReviewWarpper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Reviewbox = styled.div`
  width: 100%;
`;

const Checkreviewbtn = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  background-color: ${color.green[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 16px;
  font-weight: 500;
  color: ${color.white};
`;
