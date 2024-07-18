import styled from "styled-components"
import { color } from "../styles/global"

export const LoginPage = () =>{
  return (
    <View>
      <Titlebox>
        <Title>로그인</Title>
      </Titlebox>
      <Inputcontainer>
      <div>
          <Inputlegend>이메일</Inputlegend>
        <Inputbox>
          <Input type="email" placeholder="이메일을 입력해 주세요." />
        </Inputbox>
      </div>
      <div>
        <Inputlegend>비밀번호</Inputlegend>
        <Inputbox>
        <Input type="password" placeholder="비밀번호를 입력해 주세요."/>
        </Inputbox>
      </div>
      </Inputcontainer>
      <Loginbutton>
        <Innertext>로그인</Innertext>
      </Loginbutton>
      <Signuptext>계정이 없으신가요?<Tosignup href="Signup">회원가입</Tosignup></Signuptext>
    </View>
  )
}


const View = styled.div`
position: relative;
width: 393px;
height: 852px;
display: flex;
flex-direction: column;
gap: 30px;
padding-left: 20px;
`

const Titlebox = styled.div`
margin-top: 100px;
width: 393px;
height: 30px;
`

const Title = styled.p`
font-size: 30px;
font-weight: 500;
letter-spacing: 0;
`

const Inputcontainer = styled.div`
display: flex;
flex-direction: column;
width: 393px;
gap: 30px;
`

const Inputbox = styled.div`
margin-left: 10px;
padding: 20px;
display: flex;
align-items: center;
box-sizing: border-box;
width: 330px;
height: 50px;
left: 31px;
top: 219px;
background: ${color.gray[100]};
border: 1px solid ${color.gray[400]};
border-radius: 30px;
`

const Input = styled.input`
border: none;
&:focus{
  outline: none;
}
background: ${color.gray[100]};
`

const Inputlegend = styled.p`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5%;
  line-height: 2;
`

const Loginbutton = styled.div`
position: absolute;
width: 350px;
height: 50px;
left: 21px;
top: 658px;
background: ${color.green[200]};
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
`

const Innertext = styled.p`
  color: ${color.white};
  font-size: 16px;
  font-weight: 500;
`

const Signuptext = styled.p`
font-size: 16px;
font-weight: 300;
position: absolute;
left: 104px;
top: 718px;
`

const Tosignup = styled.a`
  font-size: 16px;
  font-weight: 300;
letter-spacing: 0.005em;
text-decoration-line: underline;
color: ${color.blue};
`