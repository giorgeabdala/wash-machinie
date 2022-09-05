const monkeyUrl = require('./config/monkeyUrl.js');
const axios = require('axios');


const ERROR_MSG_ONOFF = "Desculpe, não consegui acionar o VoiceMonkey. Tente novamente mais tarde.";
const MSG_SUCESS = "OK";


const speakOutLaunch = () => {
    let speakOut = "Olá, eu sou a assistente virtual da sua máquina de lavar. Eu posso...";
    speakOut = speakOut + "Ligar e desligar a máquina, ";
    speakOut = speakOut + "Ligar o Duplo Enxague, ";
    speakOut = speakOut + "Ligar a Secagem turbo, ";
    speakOut = speakOut + "Pular para a próxima função, ";
    speakOut = speakOut + "O que você gostaria de fazer?";

    return speakOut;
}

const onOff = async () => {
    try {
        const response = await axios.get(monkeyUrl.OnfOff);
        return MSG_SUCESS;
    }
    catch (error) {
        console.log(ERROR_MSG_ONOFF + error);
        return ERROR_MSG_ONOFF;
    }
}

const jump = async () => {
    try {
        const response = await axios.get(monkeyUrl.jump);
        console.log(response);
        return MSG_SUCESS;
    }
    catch (error) {
        console.log(ERROR_MSG_ONOFF + error);
        return ERROR_MSG_ONOFF;
    }
}

const drying = async () => {
    try {
        const response = await axios.get(monkeyUrl.Drying);
        return MSG_SUCESS;
    }
    catch (error) {
        console.log(ERROR_MSG_ONOFF + error);
        return ERROR_MSG_ONOFF;
    }
}

const rising = async () => {
    try {
        const response = await axios.get(monkeyUrl.Rising);
        return MSG_SUCESS;
    }
    catch (error) {
        console.log(ERROR_MSG_ONOFF + error);
        return ERROR_MSG_ONOFF;
    }
}

module.exports = {speakOutLaunch, onOff, jump, drying, rising};