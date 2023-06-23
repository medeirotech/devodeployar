export type MessageType = {
	emoji: string;
	message: string;
};

export type Messages = {
	[key: string]: MessageType[];
};

export const messages: Messages = {
	monday: [
		{
			emoji: "⌚️",
			message:
				"Você ainda tem bastante tempo pra resolver suas cagadas essa semana",
		},
		{ emoji: "👾", message: "Só se você confiar nos seus testes e debugs" },
		{
			emoji: "📈",
			message: "Terça-feira é um bom dia pra corrigir os bugs de segunda",
		},
		{
			emoji: "⌚️",
			message: "Se der errado, você tem a semana toda pra corrigir",
		},
	],

	tuesday: [
		{ emoji: "💤", message: "Só se você não quiser passar a noite acordado" },
		{ emoji: "☕️", message: "Tome um café e bora" },
		{ emoji: "📅", message: "Os bugs aumentam, o prazo não" },
		{
			emoji: "💣️",
			message: "Se estiver inseguro é só jogar a bomba pro colega de time",
		},
	],

	wednesday: [
		{ emoji: "⚽️", message: "O futebol de quarta à noite te espera" },
		{ emoji: "🗓️", message: "O dia da entrega está chegando" },
		{ emoji: "🖥️", message: "Não dá pra usar se estiver só na sua máquina" },
		{ emoji: "💸", message: "Você não gasta com hospedagem a toa" },
	],

	thursday: [
		{ emoji: "🕔️", message: "Antes tarde do que sexta" },
		{ emoji: "📅", message: "Sua última oportunidade pra cumprir o prazo" },
		{ emoji: "🎶", message: "“It's the final countdown”" },
		{ emoji: "🧾", message: "Testou tudo ou só quer bater ponto?" },
	],

	weekend: [
		{ emoji: "❌", message: "Não." },
		{ emoji: "🍺", message: "E a breja?" },
		{ emoji: "🗓️", message: "Codar no fim de semana?" },
		{ emoji: "🚀🛑", message: "Esse foguete tem ré" },
		{ emoji: "🚧", message: "Deixa isso aí pra segunda-feira" },
		{ emoji: "🍺", message: "Codar bêbado não vai dar certo" },
		{ emoji: "😵‍💫", message: "Você é louco?" },
	],

	friday: [
		{ emoji: "📅", message: "Sextou!" },
		{ emoji: "⌛️", message: "Tarde demais" },
		{ emoji: "🚧", message: "Deixa isso aí pra segunda-feira" },
		{ emoji: "⌛️", message: "Justo no último dia útil?" },
	],

	saturday: [
		{ emoji: "🏖️", message: "Vai pra praia e esquece isso" },
		{ emoji: "📅", message: "Sabadou!" },
	],

	sunday: [
		{ emoji: "🗓️", message: "Deixa pra amanhã" },
		{ emoji: "🥩", message: "Vai assar uma carne, vai" },
		{ emoji: "📅", message: "Domingou!" },
		{ emoji: "⏳️", message: "Só mais um dia" },
	],

	easter: [
		{ emoji: "🍫", message: "Vai trocar o chocolate por isso?" },
		{
			emoji: "💸",
			message: "Não gastaram 100 reais no seu presente da Cacau Show à toa",
		},
		{ emoji: "✝️", message: "Vai ter que ressuscitar igual Jesus" },
		{
			emoji: "💼",
			message: "Páscoa significa passagem, igual sua passagem no RH",
		},
		{ emoji: "🍲", message: "E o almoço de família?" },
	],
};

messages.friday = [...messages.friday, ...messages.weekend];
messages.saturday = [...messages.saturday, ...messages.weekend];
messages.sunday = [...messages.sunday, ...messages.weekend];
