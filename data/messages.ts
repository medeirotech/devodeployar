export type Message = {
	emoji: string;
	message: string;
};

type Messages = {
	[key: string]: Message[];
};

export const messages: Messages = {
	deployDays: [
		{ emoji: "👾", message: "Só se você confiar nos seus testes e debugs" },
		{ emoji: "💭", message: "“O que não me mata, me torna mais forte.”" },
		{ emoji: "☕️", message: "Tome um café e bora" },
		{ emoji: "🖥️", message: "Não dá pra usar se estiver só na sua máquina" },
		{ emoji: "💸", message: "Você não gasta com hospedagem a toa" },
		{ emoji: "🥇", message: "O orgulho do patrão" },
		{ emoji: "🧾", message: "Testou tudo ou só quer bater ponto?" },
		{ emoji: "🙏", message: "Que o salário caia e o servidor não" },
	],
	monday: [
		{
			emoji: "⌚️",
			message:
				"Você ainda tem bastante tempo pra resolver suas cagadas essa semana",
		},
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
		{ emoji: "📅", message: "Os bugs aumentam, o prazo não" },
		{
			emoji: "💣️",
			message: "Se estiver inseguro é só jogar a bomba pro colega de time",
		},
		{ emoji: "🫥", message: "Em plena terça você quer terceirizar o deploy?" },
	],

	wednesday: [
		{ emoji: "⚽️", message: "O futebol de quarta à noite te espera" },
		{ emoji: "🗓️", message: "O dia da entrega está chegando" },
		{
			emoji: "🐈️",
			message: "Deploy de Schrödinger: só sabe se vai dar certo se fizer",
		},
	],

	thursday: [
		{ emoji: "🕔️", message: "Antes tarde do que sexta" },
		{ emoji: "📅", message: "Sua última oportunidade pra cumprir o prazo" },
		{ emoji: "🎶", message: "“It's the final countdown”" },
		{ emoji: "🛹", message: "Tão natural quanto um deploy na quinta" },
		{ emoji: "🛹", message: "O impossível é só questão de opinião" },
	],

	weekend: [
		{ emoji: "❌", message: "Não." },
		{ emoji: "🍺", message: "E a breja?" },
		{ emoji: "🗓️", message: "Codar no fim de semana?" },
		{ emoji: "🚀🛑", message: "Esse foguete tem ré" },
		{ emoji: "🚧", message: "Deixa isso aí pra segunda-feira" },
		{ emoji: "🍺", message: "Codar bêbado não vai dar certo" },
		{ emoji: "😵‍💫", message: "Você é louco?" },
		{ emoji: "💭", message: "“Breve é a loucura, longo o arrependimento.”" },
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

messages.monday = [...messages.monday, ...messages.deployDays];
messages.tuesday = [...messages.tuesday, ...messages.deployDays];
messages.wednesday = [...messages.wednesday, ...messages.deployDays];
messages.thursday = [...messages.thursday, ...messages.deployDays];
messages.friday = [...messages.friday, ...messages.weekend];
messages.saturday = [...messages.saturday, ...messages.weekend];
messages.sunday = [...messages.sunday, ...messages.weekend];

export const holidayMessages: Messages = {
	christmas: [
		{ emoji: "🎅", message: "Em pleno Natal?" },
		{ emoji: "🎁", message: "Seu presente é a demissão" },
		{ emoji: "😋", message: "É pavê ou padeployar?" },
		{ emoji: "🎄", message: "Não vai ser nada feliz se você fizer isso" },
		{ emoji: "🛌", message: "Já ficou o ano inteiro derrubando o servidor, dá um tempo" },
	],
	newYear: [
		{ emoji: "🎆", message: "Vai passar a virada codando?" },
		{ emoji: "👾", message: "Ano novo, bugs velhos" },
		{ emoji: "🍾", message: "E o champanhe?" },
		{ emoji: "🎇", message: "Um ano repleto de bugs pra você" },
		{ emoji: "❌", message: "Não comece fazendo cagada" },
	],
};
