/*
Mocha tests for the Alexa skill).
Using the Alexa Skill Test Framework (https://github.com/BrianMacIntosh/alexa-skill-test-framework).
'.
*/
const alexaTest = require('alexa-skill-test-framework');
const speakOutStandard = require('../config/SpeakOuts.js');

alexaTest.initialize(
    require('../index.js'),
    'amzn1.ask.skill.0c0c0c0c-0c0c-0c0c-0c0c-0c0c0c0c0c0c',
    'amzn1.ask.account.VOID');


describe('Testa o Launch Request. Deve retornar o diálogo de lançamento da skill no speak e no reprompt', function () {
    alexaTest.test([
        {
            request: alexaTest.getLaunchRequest(),
            says: speakOutStandard.LAUNCH_MSG,
            reprompts: speakOutStandard.SIMPLE_LAUNCH_MSG,
            shouldEndSession: false,
        },
    ]);
});

describe('Testa o Intent Request de Ligar a máquina. Deve retornar OK', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('PowerOnOffIntent'),
            says: speakOutStandard.SUCESS_MSG,
            reprompts: speakOutStandard.REPROMPT_MSG,
            shouldEndSession: false,
        }
    ]);
});

describe('Testa o Intent Request de Pular para a próxima função. Deve retornar OK', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('JumpIntent'),
            says: speakOutStandard.SUCESS_MSG,
            shouldEndSession: false,
        },
    ]);
});

describe('Testa o Intent Request de Ligar a Secagem turbo. Deve retornar OK', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('TurboDryingIntent'),
            says: speakOutStandard.SUCESS_MSG,
            repromptsNothing: false,
            shouldEndSession: false,
        },
    ]);
});

describe('Testa o Intent Request de Ligar o Duplo Enxague. Deve retornar OK', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('DoubleRinseIntent'),
            says: speakOutStandard.SUCESS_MSG,
            shouldEndSession: false,
        },
    ]);
});

describe('Testa o Simple Intent Request. Deve retornar o diálogo  de lançamento simples  no SpeakOut e no reprompt', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('SimpleLaunchIntent'),
            says: speakOutStandard.SIMPLE_LAUNCH_MSG,
            reprompts: speakOutStandard.SIMPLE_LAUNCH_MSG,
            shouldEndSession: false,
        },
    ]);
});

