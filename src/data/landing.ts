export const COPY = {
	es: {
		metaTitle: 'Listing Stream | Anuncios nuevos en tiempo real',
		metaDescription:
			'Recibe en tiempo real los anuncios nuevos de Vinted, Wallapop, Milanuncios y Todocolección mediante una única conexión WebSocket.',
		cmd: 'listen --new-listings',
		h1: 'Un WebSocket. Cada anuncio nuevo, al instante.',
		sub: 'Te conectas a nuestro servicio por WebSocket y escuchas las publicaciones nuevas de los principales marketplaces de segunda mano en España. Eliges qué plataformas quieres escuchar.',
		cta: 'Escríbeme',
		mkHead: 'Plataformas soportadas',
		marketStatus: 'activo',
		formatHead: 'Formato del evento',
		snippetNote: 'format: raw (por defecto) | normalized',
		platformsNote:
			'platforms=vinted,milanuncios,todocoleccion,wallapop · sin parámetro, las cuatro',
		rawDescription:
			'Con format=raw recibes la respuesta tal como llega de cada plataforma. Sus campos pueden variar entre marketplaces.',
		normalizedDescription:
			'Una misma estructura de respuesta para todos los anuncios, aunque vengan de plataformas distintas.',
		integrationHead: 'Ejemplos de integración',
		integrationIntro:
			'Copia el ejemplo de tu lenguaje y sustituye YOUR_API_KEY por tu API key. Se envía en Authorization como Bearer token.',
		integrationTabsLabel: 'Lenguaje del ejemplo',
		dependencyLabel: 'Instala primero:',
		prHead: 'Precio',
		month: 'mes',
		includes: [
			'Acceso al WebSocket',
			'Las 4 plataformas incluidas',
			'Filtro por plataforma',
			'Sin límite de eventos',
			'Soporte por correo',
		],
		legal:
			'Servicio independiente. No estamos afiliados, asociados ni respaldados por Vinted, Wallapop, Milanuncios ni Todocolección.',
	},
	en: {
		metaTitle: 'Listing Stream | New listings in real time',
		metaDescription:
			'Get new listings from Vinted, Wallapop, Milanuncios and Todocolección in real time through a single WebSocket connection.',
		cmd: 'listen --new-listings',
		h1: 'One WebSocket. Every new listing, in real time.',
		sub: 'Connect to our service over WebSocket and listen to new listings from the main second-hand marketplaces in Spain. You choose which platforms to listen to.',
		cta: 'Email me',
		mkHead: 'Supported platforms',
		marketStatus: 'live',
		formatHead: 'Event format',
		snippetNote: 'format: raw (default) | normalized',
		platformsNote:
			'platforms=vinted,milanuncios,todocoleccion,wallapop · omit it for all four',
		rawDescription:
			'With format=raw, you receive each platform’s response as-is. Its fields can vary between marketplaces.',
		normalizedDescription:
			'The same response structure for every listing, even when it comes from a different platform.',
		integrationHead: 'Integration examples',
		integrationIntro:
			'Copy the example for your language and replace YOUR_API_KEY with your API key. It is sent in Authorization as a Bearer token.',
		integrationTabsLabel: 'Example language',
		dependencyLabel: 'Install first:',
		prHead: 'Pricing',
		month: 'month',
		includes: [
			'WebSocket access',
			'All 4 platforms included',
			'Per-platform filtering',
			'No event cap',
			'Email support',
		],
		legal:
			'Independent service. We are not affiliated with, associated with, or endorsed by Vinted, Wallapop, Milanuncios or Todocolección.',
	},
} as const;

export const MARKETS = ['Vinted', 'Wallapop', 'Milanuncios', 'Todocolección'] as const;

export type LandingLanguage = keyof typeof COPY;
