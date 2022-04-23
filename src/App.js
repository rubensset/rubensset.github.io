import useSound from 'use-sound';
import React, { useState, useEffect, useCallback, useRef } from "react";

import notify from './assets/notify.mp3'
import confirm from './assets/confirm.wav'
import logo from './assets/YELLOW_FEVER.png';
import war from './assets/new-world.png';
import invasion from './assets/corrupted.webp';

import { Button, ButtonContainer, ButtonStart, ButtonText, Container, ContainerSave, Icon, Logo, SavedTime, Timer, Title } from './styles';

const INITIAL_TIMER = 2100

export default function App() {
  const [start, setStart] = useState(false);
  const [type, setType] = useState('GUERRA');
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [savedTime, setSave] = useState([]);
  
  const [play] = useSound(notify,
    { volume: 0.5 });
  const [respawn] = useSound(confirm,
    { volume: 0.25 });

  var minutes = parseInt(timer / 60, 10);
  var seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

  const alertTime = useCallback((time) => {
    if(timer === time+4) play();
    if(timer === time+3) play();
    if(timer === time+2) play();
    if(timer === time+1) play();
    if(timer === time) respawn();
  }, [timer, play, respawn]);

  // console.log(wave)
  
  useEffect(() => {
    if(start){
      id.current = window.setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
      return () => clear();
    }
  }, [start]);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }

    if(type === 'GUERRA'){
      alertTime(1760); //29:20 {respawnSeconds: 1760, respawnMinutes: "29:20" }
      alertTime(1740); //29:00 {respawnSeconds: 1740, respawnMinutes: "29:00" }
      alertTime(1720); //28:40 {respawnSeconds: 1720, respawnMinutes: "28:40" }
      alertTime(1700); //28:20 {respawnSeconds: 1700, respawnMinutes: "28:20" }
      alertTime(1680); //28:00 {respawnSeconds: 1680, respawnMinutes: "28:00" }
      alertTime(1660); //27:40 {respawnSeconds: 1660, respawnMinutes: "27:40" }
      alertTime(1640); //27:20 {respawnSeconds: 1640, respawnMinutes: "27:20" }
      alertTime(1620); //27:00 {respawnSeconds: 1620, respawnMinutes: "27:00" }
      alertTime(1600); //26:40 {respawnSeconds: 1600, respawnMinutes: "26:40" }
      alertTime(1580); //26:20 {respawnSeconds: 1580, respawnMinutes: "26:20" }
      alertTime(1560); //26:00 {respawnSeconds: 1560, respawnMinutes: "26:00" }
      alertTime(1540); //25:40 {respawnSeconds: 1540, respawnMinutes: "25:40" }
      alertTime(1520); //25:20 {respawnSeconds: 1520, respawnMinutes: "25:20" }
      alertTime(1492); //24:52 {respawnSeconds: 1492, respawnMinutes: "24:52" }
      alertTime(1464); //24:24 {respawnSeconds: 1464, respawnMinutes: "24:24" }
      alertTime(1436); //23:56 {respawnSeconds: 1436, respawnMinutes: "23:56" }
      alertTime(1408); //23:28 {respawnSeconds: 1408, respawnMinutes: "23:28" }
      alertTime(1380); //23:00 {respawnSeconds: 1380, respawnMinutes: "23:00" }
      alertTime(1352); //22:32 {respawnSeconds: 1352, respawnMinutes: "22:32" }
      alertTime(1324); //22:04 {respawnSeconds: 1324, respawnMinutes: "22:04" }
      alertTime(1296); //21:36 {respawnSeconds: 1296, respawnMinutes: "21:36" }
      alertTime(1268); //21:08 {respawnSeconds: 1268, respawnMinutes: "21:08" }
      alertTime(1240); //20:40 {respawnSeconds: 1240, respawnMinutes: "20:40" }
      alertTime(1212); //20:12 {respawnSeconds: 1212, respawnMinutes: "20:12" }
      alertTime(1184); //19:44 {respawnSeconds: 1184, respawnMinutes: "19:44" }
      alertTime(1148); //19:08 {respawnSeconds: 1148, respawnMinutes: "19:08" }
      alertTime(1112); //18:32 {respawnSeconds: 1112, respawnMinutes: "18:32" }
      alertTime(1076); //17:56 {respawnSeconds: 1076, respawnMinutes: "17:56" }
      alertTime(1040); //17:20 {respawnSeconds: 1040, respawnMinutes: "17:20" }
      alertTime(1004); //16:44 {respawnSeconds: 1004, respawnMinutes: "16:44" }
      alertTime(968); //16:08 {respawnSeconds: 968, respawnMinutes: "16:08 }
      alertTime(932); //15:32 {respawnSeconds: 932, respawnMinutes: "15:32 }
      alertTime(904); //15:04 {respawnSeconds: 904, respawnMinutes: "15:04 }
      alertTime(860); //14:20 {respawnSeconds: 860, respawnMinutes: "14:20 }
      alertTime(816); //13:36 {respawnSeconds: 816, respawnMinutes: "13:36 }
      alertTime(772); //12:52 {respawnSeconds: 772, respawnMinutes: "12:52 }
      alertTime(728); //12:08 {respawnSeconds: 728, respawnMinutes: "12:08 }
      alertTime(684); //11:24 {respawnSeconds: 684, respawnMinutes: "11:24 }
      alertTime(640); //10:40 {respawnSeconds: 640, respawnMinutes: "10:40 }
      alertTime(596); //9:56 {respawnSeconds: 596, respawnMinutes: "9:56" }
      alertTime(552); //9:12 {respawnSeconds: 552, respawnMinutes: "9:12" }
      alertTime(500); //8:20 {respawnSeconds: 500, respawnMinutes: "8:20" }
      alertTime(448); //7:28 {respawnSeconds: 448, respawnMinutes: "7:28" }
      alertTime(396); //6:36 {respawnSeconds: 396, respawnMinutes: "6:36" }
      alertTime(344); //5:44 {respawnSeconds: 344, respawnMinutes: "5:44" }
      alertTime(292); //4:52 {respawnSeconds: 292, respawnMinutes: "4:52" }
      alertTime(232); //3:52 {respawnSeconds: 232, respawnMinutes: "3:52" }
      alertTime(172); //2:52 {respawnSeconds: 172, respawnMinutes: "2:52" }
      alertTime(112); //1:52 {respawnSeconds: 112, respawnMinutes: "1:52" }
      alertTime(52); //0:52 {respawnSeconds: 52, respawnMinutes: "0:52 }
    }

    if(type === 'INVASÃO'){
      //Valores de invasao
    }
    
  }, [timer, alertTime, type]);

  const buttonText = start ? 'RESET' : 'INICIAR'

  return (
    <Container>
      <Logo src={logo} alt="Logo" />

      <ButtonContainer>
        <Button onClick={() => {
          setType('GUERRA')
          setTimer(INITIAL_TIMER)
          setStart(false)
          setSave([])
        }}>
          <Icon src={war}/>
          <ButtonText>GUERRA</ButtonText>
        </Button>

        <Button onClick={() => {
          setType('INVASÃO')
          setTimer(INITIAL_TIMER)
          setStart(false)
          setSave([])
        }}>
          <Icon src={invasion}/>
          <ButtonText>INVASÃO</ButtonText>
        </Button>  
      </ButtonContainer>

      <Title>{type}</Title>
      <Timer>{minutes}:{seconds}</Timer>

      <ButtonStart 
        onClick={() => {
          if(start) {
            setTimer(INITIAL_TIMER)
            setStart(false)
            setSave([])
          } else {
            setStart(true)
          }
        }}
      >{buttonText}</ButtonStart>

      <ButtonStart onClick={() => setSave([ `${minutes}:${seconds}`, ...savedTime])} >SALVAR TEMPO</ButtonStart>
      

      <ContainerSave>
        {savedTime.map((item) => { 
          return(
            <SavedTime>{item}</SavedTime>
          )
        })}
      </ContainerSave>
      
    </Container>
  );
}
