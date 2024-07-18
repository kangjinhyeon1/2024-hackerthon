import styled from "styled-components";
import { color } from "../../styles/global";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { GetCookie } from "../../utils/cookie";

interface DataType {
  post_id: number;
  title: string;
  address: string;
  start_date: string;
  end_date: string;
  image_url: string;
  re: boolean;
  my?: boolean;
  name?: string;
}

const BASEURL = process.env.REACT_APP_BASE_URL;

export const MyDonation = ({
  post_id,
  title,
  address,
  start_date,
  end_date,
  image_url,
  re,
  my,
  name,
}: DataType) => {
  const navigate = useNavigate();
  const token = GetCookie("access_token");
  const [data, setData] = useState<number>(0);

  const getReview = async () => {
    try {
      const res = await axios.get(`${BASEURL}/review/${post_id}`, {
        headers: { Authorization: "Bearer " + token },
      });

      if (res.data.reviews.length > 0) {
        console.log(res.data.reviews.length);
        setData(res.data.reviews.length);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <Wapper
      onClick={() =>
        data !== 0 && re ? navigate(`/reviewall/${post_id}`) : console.log(123)
      }
    >
      <Img src={image_url} />
      <ContentContainer>
        <Title>{title}</Title>
        <Address>{address}</Address>
        <DateFlex>
          <Date>{start_date + " ~ " + end_date}</Date>
          <Review>
            {data !== 0 && re && (
              <>
                <ReviewImg src="/img/review.svg" />
                <ReviewCnt>{data}</ReviewCnt>
              </>
            )}
          </Review>
        </DateFlex>
        {my && <Address>{"참여자: " + name}</Address>}
      </ContentContainer>
    </Wapper>
  );
};

const Wapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 5px;
  object-fit: contain;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
  gap: 5px;
`;

const Title = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${color.black};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Address = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: ${color.gray[400]};
`;

const DateFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Date = styled.p`
  width: 80%;
  min-width: 151px;
  font-size: 14px;
  font-weight: 400;
  color: ${color.black};
`;

const Review = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ReviewImg = styled.img`
  width: 20px;
`;

const ReviewCnt = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${color.green[300]};
`;
