export const COPY = {
	es: {
		metaTitle:
			'Listing Stream — WebSocket en tiempo real para Vinted, Wallapop, Milanuncios y Todocolección',
		metaDescription:
			'Recibe anuncios nuevos en tiempo real de Vinted, Wallapop, Milanuncios y Todocolección por WebSocket. Filtra por plataforma y elige raw o normalized.',
		cmd: 'listen --new-listings',
		h1: 'WebSocket en tiempo real para Vinted, Wallapop, Milanuncios y Todocolección',
		sub: 'Te conectas a nuestro servicio por WebSocket y escuchas las publicaciones nuevas de los principales marketplaces de segunda mano. Eliges qué plataformas quieres escuchar.',
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
		resourcesLabel: 'Recursos',
		docsLink: 'Documentación',
		vintedLink: 'API Vinted',
		wallapopLink: 'API Wallapop',
	},
	en: {
		metaTitle:
			'Listing Stream — Real-time WebSocket for Vinted, Wallapop, Milanuncios and Todocolección',
		metaDescription:
			'Get new listings from Vinted, Wallapop, Milanuncios and Todocolección in real time over WebSocket. Filter by platform and choose raw or normalized.',
		cmd: 'listen --new-listings',
		h1: 'Real-time WebSocket for Vinted, Wallapop, Milanuncios and Todocolección',
		sub: 'Connect to our service over WebSocket and listen to new listings from leading second-hand marketplaces. You choose which platforms to listen to.',
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
		resourcesLabel: 'Resources',
		docsLink: 'Documentation',
		vintedLink: 'Vinted API',
		wallapopLink: 'Wallapop API',
	},
} as const;

export const MARKETS = ['Vinted', 'Wallapop', 'Milanuncios', 'Todocolección'] as const;

export type LandingLanguage = keyof typeof COPY;
