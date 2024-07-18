import { url } from "inspector"
import styled from "styled-components"
import { color } from "../styles/global"

export const ModifyProfilepage = () => {
  return(
    <View>
      <Header>
        <Iconarrow src="/images/leftarrow.svg"/>
        <Title>내 정보 수정하기</Title>
      </Header>
      <Main>
        <Profilebox>
          <Profile src="/images/profile.svg"/>
          <Profilebtn type="button" />
        </Profilebox>
        <Namecontainer>
          <Nametext>이름</Nametext>
          <Namebox><Myname>길동맨</Myname></Namebox>
        </Namecontainer>
      </Main>
        <Modifybtn><Btntext>수정하기</Btntext></Modifybtn>
    </View>
  )
}

const View = styled.div`
  position: relative;
  width: 393px;
  height: 852px; 
` 

const Header = styled.div`
  width: 393px;
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  gap: 20px;
  background-color: #fff;
`

const Iconarrow = styled.img`
  width: 10px;
  height: 15px;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`

const Main = styled.div`
  width: 393px;
  background-color: #fff;
`

const Profilebox = styled.div`
  width: 300px;
  height: 140px;
  display: flex;
  padding-left: 25px;
  gap: 15px;
  align-items: center;
`

const Profile = styled.img`
  width: 80px;
  height: 80px;
`

const Profilebtn = styled.input`
  background-image: url("/images/plus.svg");
  background-repeat: no-repeat;
  background-position: center center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #aaa;
`

const Namecontainer = styled.div`
  width: 393px;
  padding-left: 17px;
  gap: 7px;
  display: flex;
  flex-direction: column;
`

const Nametext = styled.p`
  font-size: 14px;
  font-weight: 500;
`

const Namebox = styled.div`
width: 350px;
height: 50px;
background-color: ${color.gray[100]};
border: 1px solid #aaa;
border-radius: 8px;
margin-left: 5px;
display: flex;
align-items: center;
padding-left: 15px;
`

const Myname = styled.p`
  font-size: 16px;
  font-weight: 200;
  color: ${color.black};
`

const Modifybtn = styled.div`
position: absolute;
width: 350px;
height: 50px;
left: 21px;
top: 300px;
background-color: ${color.green[200]};
border-radius: 25px;
border: none;
color: ${color.white};
display: flex;
justify-content: center;
align-items: center;
`

const Btntext = styled.p`
  font-size: 16px;
  font-weight: 500;
` 