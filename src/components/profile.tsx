import styled from "styled-components";
import { color } from "../styles/global";
import { useEffect, useState } from "react";
import axios from "axios";
import { GetCookie } from "../utils/cookie";

interface ProfileType {
  username: string;
  email: string;
  user_id: number;
  profile_url: string;
}

const BASEURL = process.env.REACT_APP_BASE_URL;

export const ProfileComponents = () => {
  const token = GetCookie("access_token");
  const [profile, setProfile] = useState<ProfileType>();

  const uuu = async () => {
    const res = await axios.get(`${BASEURL}/user/mypage`, {
      headers: { Authorization: "Bearer " + token },
    });
    setProfile(res.data);
  };

  useEffect(() => {
    uuu();
  }, []);

  return (
    <Wapper>
      <ProfileContainer>
        <ProfileImg src={profile?.profile_url} />
        <div>
          <Name>{profile?.username}</Name>
          <Email>{profile?.email}</Email>
        </div>
      </ProfileContainer>
    </Wapper>
  );
};

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 30px 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const ProfileImg = styled.img`
  width: 100px;
  border-radius: 99px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${color.black};
`;

const Email = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${color.gray[400]};
`;

const FixBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${color.white};
  background-color: ${color.green[100]};
  border: none;
  border-radius: 8px;
  padding: 9px 0;
  outline: none;
`;
