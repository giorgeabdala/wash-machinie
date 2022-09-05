/*
Mocha tests for the Alexa skill).
Using the Alexa Skill Test Framework (https://github.com/BrianMacIntosh/alexa-skill-test-framework).
'.
*/
const alexaTest = require('alexa-skill-test-framework');


const MSG_LAUNCH_REQUEST = "Olá, eu sou a assistente virtual da sua máquina de lavar. Eu posso...Ligar e desligar " +
    "a máquina, Ligar o Duplo Enxague, Ligar a Secagem turbo, Pular para a próxima função, O que você gostaria de fazer?"


alexaTest.initialize(
    require('../index.js'),
    'amzn1.ask.skill.0c0c0c0c-0c0c-0c0c-0c0c-0c0c0c0c0c0c',
    'amzn1.ask.account.VOID');


describe('Testa o Launch Request. Deve retornar o diálogo de lançamento da skill no speak e no reprompt', function () {
    alexaTest.test([
        {
            request: alexaTest.getLaunchRequest(),
            says: MSG_LAUNCH_REQUEST,
            reprompts: MSG_LAUNCH_REQUEST,
            shouldEndSession: false,
        },
    ]);
});

describe('Testa o Intent Request de Ligar a máquina. Deve retornar OK', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('OnOffIntent'),
            says: 'OK',
            repromptsNothing: false,
            shouldEndSession: true,
        }
    ]);
});

describe('Testa o Intent Request de Pular para a próxima função. Deve retornar OK', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('JumpIntent'),
            says: 'OK',
            shouldEndSession: true,
        },
    ]);
});

describe('Testa o Intent Request de Ligar a Secagem turbo. Deve retornar OK', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('DryingIntent'),
            says: 'OK',
            shouldEndSession: true,
        },
    ]);
});

describe('Testa o Intent Request de Ligar o Duplo Enxague. Deve retornar OK', function () {
    alexaTest.test([
        {
            request: alexaTest.getIntentRequest('RisingIntent'),
            says: 'OK',
            shouldEndSession: true,
        },
    ]);
});

