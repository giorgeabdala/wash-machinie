const monkeyUrl = require('./config/monkeyUrl.js');
const axios = require('axios');
const speakOutStandard = require('./config/SpeakOuts.js');





const onOff = async () => {
    try {
        const response = await axios.get(monkeyUrl.OnfOff);
        return speakOutStandard.SUCESS_MSG;
    }
    catch (error) {
        console.log(speakOutStandard.ERROR_MONKEY_MSG + error);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
}

const jump = async () => {
    try {
        const response = await axios.get(monkeyUrl.jump);
        console.log(response);
        return speakOutStandard.SUCESS_MSG;
    }
    catch (error) {
        console.log(speakOutStandard.ERROR_MONKEY_MSG + error);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
}

const drying = async () => {
    try {
        const response = await axios.get(monkeyUrl.Drying);
        return speakOutStandard.SUCESS_MSG;
    }
    catch (error) {
        console.log(speakOutStandard.ERROR_MONKEY_MSG + error);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
}

const rising = async () => {
    try {
        const response = await axios.get(monkeyUrl.Rising);
        return speakOutStandard.SUCESS_MSG;
    }
    catch (error) {
        console.log(speakOutStandard.ERROR_MONKEY_MSG + error);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
}

module.exports = {onOff, jump, drying, rising};