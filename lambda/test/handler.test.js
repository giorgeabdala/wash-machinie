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

describe('Testa os Handler standard da Alexa', function () {
    describe("Testa o Intent Request de Ajuda. Deve retornar o diálogo de ajuda", function () {
        alexaTest.test([
            {
                request: alexaTest.getIntentRequest('AMAZON.HelpIntent'),
                says: speakOutStandard.HELP_MSG,
                reprompts: speakOutStandard.HELP_MSG,
                shouldEndSession: false,
            },
        ]);
    });

    describe("Testa o Intent Request de Cancelar. Deve retornar o diálogo de cancelamento e sair", function () {
        alexaTest.test([
            {
                request: alexaTest.getIntentRequest('AMAZON.CancelIntent'),
                says: speakOutStandard.GOODBYE_MSG,
                shouldEndSession: true,
            },
        ]);
    });

    describe("Testa o Intent Request de Parar. Deve retornar o diálogo de cancelament e sair", function () {
        alexaTest.test([
            {
                request: alexaTest.getIntentRequest('AMAZON.StopIntent'),
                says: speakOutStandard.GOODBYE_MSG,
                shouldEndSession: true,
            },
        ]);
    });

    describe("Testa o Intent Request de Fallback. Deve retornar o diálogo de não entendido", function () {
        alexaTest.test([
            {
                request: alexaTest.getIntentRequest('AMAZON.FallbackIntent'),
                says: speakOutStandard.NOT_UNDERSTOOD_MSG,
                reprompts: speakOutStandard.NOT_UNDERSTOOD_MSG,
                shouldEndSession: false,
            },
        ]);
    });


}

)  ;  //  describe

