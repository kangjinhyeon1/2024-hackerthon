import styled from "styled-components";
import { Reviw } from "../components/Review";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCookie } from "../utils/cookie";
import axios from "axios";

interface ReviewType {
  review_id: string;
  post: {
    writer_id: number;
    applicant_id: number;
    post_id: number;
    title: string;
    address: string;
    start_date: string;
    end_date: string;
    image_url: string;
    re: boolean;
  };
  writer: {
    user_id: number;
    email: string;
    username: string;
    password: string;
    profile_url: string;
  };
  rating: number;
  content: string;
}

const BASEURL = process.env.REACT_APP_BASE_URL;

export const Reviewallpage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const token = GetCookie("access_token");
  const [data, setData] = useState<ReviewType[]>([]);
  console.log(data);
  const getReview = async () => {
    try {
      const res = await axios.get(`${BASEURL}/review/${params.id}`, {
        headers: { Authorization: "Bearer " + token },
      });

      setData(res.data.reviews);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <View>
      <Header>
        <Icon onClick={() => navigate("/my")} src="/images/leftarrow.svg" />
        <Title>리뷰 모두 보기</Title>
      </Header>
      <Reviewlist>
        {data.map((res) => {
          return (
            <Reviw
              profile={res.writer.profile_url}
              title={res.writer.username}
              rating={res.rating}
              start_date={res.post.start_date}
              end_date={res.post.end_date}
              content={res.content}
            />
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
  width: 393px;
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  gap: 20px;
`;

const Icon = styled.img`
  width: 10px;
  height: 15px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Reviewlist = styled.ul`
  display: flex;
  flex-direction: column;
`;
