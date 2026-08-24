// All values below are fictional. They illustrate the shape of each event
// without exposing data from a real listing, seller, buyer, or marketplace user.
export const NORMALIZED_PAYLOAD_EXAMPLE = {
	format: 'normalized',
	platform: 'vinted',
	items: [
		{
			id: '9876543210',
			platform: 'vinted',
			title: 'iPhone 13 Pro Max 256 GB verde alpino',
			description: null,
			brand: 'Apple',
			price_in_cent: 54000,
			currency: 'EUR',
			url: 'https://www.vinted.es/items/9876543210-iphone-13-pro-max-256-gb-verde-alpino',
			url_photo: ['https://images.example/vinted/iphone-13-pro-max-256gb-01.webp'],
			shipping: true,
			location: {
				label: 'Ciudad de ejemplo',
				latitude: null,
				longitude: null,
			},
			category: {
				Vinted: 'Smartphones',
			},
			user_id: 'usuario_iphone_48291',
			normalized_category: 'telefonía',
			normalized_title: 'iphone 13 pro max 256 gb verde alpino',
			normalized_description: null,
			normalized_brand: 'apple',
		},
	],
} as const;
