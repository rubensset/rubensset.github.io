import styled from 'styled-components';

export const Container = styled.div`
  flex:1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;

export const Logo = styled.img`
  height: 250px;
  margin: 40px 0 60px 0;
`;

export const Title = styled.div`
  color: white;
  font-size: 32px;
  text-align: center;
  font-weight: bolder;
  margin-top: 40px; 
`;

export const Timer = styled.div`
  color: white;
  font-size: 64px;
  text-align: center;
  font-weight: bolder;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
	border: 2px solid white;
  color: white;
	cursor: pointer;
  background: #fab533;
  margin: 0 10px;
  padding-right: 10px;
  border-radius: 20px;

`

export const Icon = styled.img`
  height: 40px;
  margin: 0 5px 0 10px;
  background: #fab533;
  border-right: 2px solid white;
  padding-right: 10px;
`;

export const ButtonText = styled.div`
  font-weight: bolder;
  margin: 0 10px 0 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ButtonStart = styled.div`
  display: flex;
  align-items: center;
	border: 2px solid white;
  color: white;
	cursor: pointer;
  background: #fab533;
  margin-top: 20px;
  text-align: center;
  width: 150px;
  height: 44px;
  justify-content: center;
  font-weight: bolder;
  border-radius: 20px;
`

export const SavedTime = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;


export const ContainerSave = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  margin: 30px 0;
`;