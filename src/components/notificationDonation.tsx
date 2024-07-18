import styled from "styled-components";
import { color } from "../styles/global";
import axios from "axios";
import { MyDonation } from "./common/myDonation";
import { useEffect, useState } from "react";
import { GetCookie } from "../utils/cookie";

const BASEURL = process.env.REACT_APP_BASE_URL;

interface DataType {
  post_id: number;
  title: string;
  address: string;
  start_date: string;
  end_date: string;
  image_url: string;
}

export const NotificationDonation = () => {
  const token = GetCookie("access_token");
  const [data, setData] = useState<DataType[]>([]);
  const getWrite = async () => {
    try {
      const res = await axios.get(`${BASEURL}/post/writed`, {
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
    <Wapper>
      <TContainer>
        <Title>공지한 기부 활동</Title>
        <Count>{data.length}</Count>
      </TContainer>
      <DonationWarp size={data.length}>
        {data.map((res, idx) => {
          return (
            <>
              <MyDonation
                key={idx}
                post_id={res.post_id}
                title={res.title}
                address={res.address}
                start_date={res.start_date}
                end_date={res.end_date}
                image_url={res.image_url}
                re={false}
              />
              <Line />
            </>
          );
        })}
      </DonationWarp>
    </Wapper>
  );
};

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  gap: 25px;
  margin-bottom: 40px;
`;

const TContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${color.black};
`;

const Count = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${color.green[200]};
`;

const DonationWarp = styled.div<{ size: number }>`
  height: ${({ size }) => (size > 3 ? "400px" : "none")};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.gray[100]};
  margin: 12px 0;
`;
