import { codeToHtml, type ThemeRegistration } from 'shiki';

type HighlightLanguage = 'json' | 'javascript' | 'python' | 'rust';

const listingJsonTheme = {
	name: 'listing-stream-json',
	type: 'dark',
	colors: {
		'editor.background': '#101312',
		'editor.foreground': '#e4e9e5',
	},
	settings: [
		{
			settings: {
				background: '#101312',
				foreground: '#e4e9e5',
			},
		},
		{
			scope: ['string'],
			settings: { foreground: '#a6e3a1' },
		},
		{
			scope: ['constant.numeric'],
			settings: { foreground: '#f9e2af' },
		},
		{
			scope: ['constant.language', 'support.constant'],
			settings: { foreground: '#f38ba8' },
		},
		{
			scope: ['support.type.property-name', 'meta.object-literal.key', 'variable.other.property'],
			settings: { foreground: '#89dceb' },
		},
		{
			scope: ['punctuation'],
			settings: { foreground: '#aab4ae' },
		},
		{
			scope: ['comment'],
			settings: { foreground: '#78847d' },
		},
		{
			scope: ['keyword', 'storage', 'storage.type'],
			settings: { foreground: '#cba6f7' },
		},
		{
			scope: ['entity.name.function', 'support.function'],
			settings: { foreground: '#89dceb' },
		},
	],
} satisfies ThemeRegistration;

export const highlightCode = (code: string, language: HighlightLanguage) =>
	codeToHtml(code, {
		lang: language,
		theme: listingJsonTheme,
	});

export const highlightJson = (value: unknown) => highlightCode(JSON.stringify(value, null, 2), 'json');
