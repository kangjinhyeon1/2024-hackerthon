import styled from "styled-components";
import { ProfileComponents } from "../components/profile";
import { color } from "../styles/global";
import { JoinDonation } from "../components/joinDonation";
import { NotificationDonation } from "../components/notificationDonation";
import { Tree } from "../components/tree";

export const MyPage = () => {
  return (
    <>
      <Header>마이페이지</Header>
      <MLine />
      <ProfileComponents />
      <LLine />
      <JoinDonation />
      <LLine />
      <NotificationDonation />
      {/* <LLine />
        <Tree /> */}
    </>
  );
};

const Header = styled.div`
  padding: 20px 0 12px 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${color.black};
`;

const MLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.gray[150]};
`;

const LLine = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${color.gray[200]};
`;
