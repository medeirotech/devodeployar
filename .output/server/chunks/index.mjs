import { defineEventHandler } from 'h3';

const getRandomMessage = (messages2) => messages2[Math.floor(Math.random() * messages2.length)];

const messages = {
  monday: [
    {
      emoji: "\u231A\uFE0F",
      message: "Voc\xEA ainda tem bastante tempo pra resolver suas cagadas essa semana"
    },
    { emoji: "\u{1F47E}", message: "S\xF3 se voc\xEA confiar nos seus testes e debugs" },
    {
      emoji: "\u{1F4C8}",
      message: "Ter\xE7a-feira \xE9 um bom dia pra corrigir os bugs de segunda"
    },
    {
      emoji: "\u231A\uFE0F",
      message: "Se der errado, voc\xEA tem a semana toda pra corrigir"
    }
  ],
  tuesday: [
    { emoji: "\u{1F4A4}", message: "S\xF3 se voc\xEA n\xE3o quiser passar a noite acordado" },
    { emoji: "\u2615\uFE0F", message: "Tome um caf\xE9 e bora" },
    { emoji: "\u{1F4C5}", message: "Os bugs aumentam, o prazo n\xE3o" },
    {
      emoji: "\u{1F4A3}\uFE0F",
      message: "Se estiver inseguro \xE9 s\xF3 jogar a bomba pro colega de time"
    }
  ],
  wednesday: [
    { emoji: "\u26BD\uFE0F", message: "O futebol de quarta \xE0 noite te espera" },
    { emoji: "\u{1F5D3}\uFE0F", message: "O dia da entrega est\xE1 chegando" },
    { emoji: "\u{1F5A5}\uFE0F", message: "N\xE3o d\xE1 pra usar se estiver s\xF3 na sua m\xE1quina" },
    { emoji: "\u{1F4B8}", message: "Voc\xEA n\xE3o gasta com hospedagem a toa" }
  ],
  thursday: [
    { emoji: "\u{1F554}\uFE0F", message: "Antes tarde do que sexta" },
    { emoji: "\u{1F4C5}", message: "Sua \xFAltima oportunidade pra cumprir o prazo" },
    { emoji: "\u{1F3B6}", message: "\u201CIt's the final countdown\u201D" },
    { emoji: "\u{1F9FE}", message: "Testou tudo ou s\xF3 quer bater ponto?" }
  ],
  weekend: [
    { emoji: "\u274C", message: "N\xE3o." },
    { emoji: "\u{1F37A}", message: "E a breja?" },
    { emoji: "\u{1F5D3}\uFE0F", message: "Codar no fim de semana?" },
    { emoji: "\u{1F680}\u{1F6D1}", message: "Esse foguete tem r\xE9" },
    { emoji: "\u{1F6A7}", message: "Deixa isso a\xED pra segunda-feira" },
    { emoji: "\u{1F37A}", message: "Codar b\xEAbado n\xE3o vai dar certo" },
    { emoji: "\u{1F635}\u200D\u{1F4AB}", message: "Voc\xEA \xE9 louco?" }
  ],
  friday: [
    { emoji: "\u{1F4C5}", message: "Sextou!" },
    { emoji: "\u231B\uFE0F", message: "Tarde demais" },
    { emoji: "\u{1F6A7}", message: "Deixa isso a\xED pra segunda-feira" },
    { emoji: "\u231B\uFE0F", message: "Justo no \xFAltimo dia \xFAtil?" }
  ],
  saturday: [
    { emoji: "\u{1F3D6}\uFE0F", message: "Vai pra praia e esquece isso" },
    { emoji: "\u{1F4C5}", message: "Sabadou!" }
  ],
  sunday: [
    { emoji: "\u{1F5D3}\uFE0F", message: "Deixa pra amanh\xE3" },
    { emoji: "\u{1F969}", message: "Vai assar uma carne, vai" },
    { emoji: "\u{1F4C5}", message: "Domingou!" },
    { emoji: "\u23F3\uFE0F", message: "S\xF3 mais um dia" }
  ],
  easter: [
    { emoji: "\u{1F36B}", message: "Vai trocar o chocolate por isso?" },
    {
      emoji: "\u{1F4B8}",
      message: "N\xE3o gastaram 100 reais no seu presente da Cacau Show \xE0 toa"
    },
    { emoji: "\u271D\uFE0F", message: "Vai ter que ressuscitar igual Jesus" },
    {
      emoji: "\u{1F4BC}",
      message: "P\xE1scoa significa passagem, igual sua passagem no RH"
    },
    { emoji: "\u{1F372}", message: "E o almo\xE7o de fam\xEDlia?" }
  ]
};
messages.friday = [...messages.friday, ...messages.weekend];
messages.saturday = [...messages.saturday, ...messages.weekend];
messages.sunday = [...messages.sunday, ...messages.weekend];

const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
const getWeekday = (day) => weekdays[day];

const shouldIDeploy = (day) => day > 0 && day < 5;

const index = defineEventHandler(() => {
  const timezoneOffset = 180 * 60 * 1e3;
  const date = new Date(Date.now() - timezoneOffset);
  const day = date.getDay();
  const message = getRandomMessage(messages[getWeekday(day)]);
  return {
    emoji: message.emoji,
    message: message.message,
    shouldIDeploy: shouldIDeploy(day),
    timestamp: date.toISOString()
  };
});

export { index as default };
//# sourceMappingURL=index.mjs.map
