import styled from "styled-components";
import { color } from "../styles/global";

interface ReType {
  profile: string;
  title: string;
  rating: number;
  start_date: string;
  end_date: string;
  content: string;
}

export const Reviw = ({
  profile,
  title,
  rating,
  start_date,
  end_date,
  content,
}: ReType) => {
  const level = [1, 2, 3, 4, 5];

  return (
    <div>
      <List>
        <Profile>
          <Icon src={profile} />
          <Title>{title}</Title>
        </Profile>
        <Reviewinfo>
          <Stars>
            {level.map((idx) => {
              return idx > rating ? (
                <Star id={String(idx)} src="/images/star_empty.svg" />
              ) : (
                <Star id={String(idx)} src="/images/star_filed.svg" />
              );
            })}
          </Stars>
          <Date>{start_date + " ~ " + end_date}</Date>
        </Reviewinfo>
        <Reviewtextbox>
          <Reviewtext>{content}</Reviewtext>
        </Reviewtextbox>
      </List>
    </div>
  );
};

const List = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 7px;
  margin-top: 30px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 10px;
`;
const Reviewinfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
`;
const Stars = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 99px;
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 200;
`;

const Reviewtextbox = styled.div`
  width: 339px;
  margin: 0 26px;
`;

const Reviewtext = styled.p`
  font-size: 12px;
  font-weight: 400px;
`;
