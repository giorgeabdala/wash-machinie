const monkeyUrl = require('./config/monkeyUrl.js');
const axios = require('axios');
const speakOutStandard = require('./config/SpeakOuts.js');


const onOff = async () => {
    try {
        const response = await axios.get(monkeyUrl.OnfOff);
        if (response.status === 200) {
            return speakOutStandard.SUCESS_MSG;
        }
        console.log(speakOutStandard.ERROR_MONKEY_MSG + response.data.status);
        return speakOutStandard.ERROR_MONKEY_MSG;

    }
    catch (error) {
        console.log(speakOutStandard.ERROR_MONKEY_MSG + error);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
}

const jump = async () => {
    try {
        const response = await axios.get(monkeyUrl.jump);
        if (response.status === 200) {
            return speakOutStandard.SUCESS_MSG;
        }
        console.log(speakOutStandard.ERROR_MONKEY_MSG + response.data.status);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
    catch (error) {
        console.log(speakOutStandard.ERROR_MONKEY_MSG + error);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
}

const drying = async () => {
    try {
        const response = await axios.get(monkeyUrl.Drying);
        if (response.status === 200) {
            return speakOutStandard.SUCESS_MSG;
        }
        console.log(speakOutStandard.ERROR_MONKEY_MSG + response.data.status);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
    catch (error) {
        console.log(speakOutStandard.ERROR_MONKEY_MSG + error);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
}

const rising = async () => {
    try {
        const response = await axios.get(monkeyUrl.Rising);
        if (response.status === 200) {
            return speakOutStandard.SUCESS_MSG;
        }
        console.log(speakOutStandard.ERROR_MONKEY_MSG + response.data.status);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
    catch (error) {
        console.log(speakOutStandard.ERROR_MONKEY_MSG + error);
        return speakOutStandard.ERROR_MONKEY_MSG;
    }
}


module.exports = {onOff, jump, drying, rising};