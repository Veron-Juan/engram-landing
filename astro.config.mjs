// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/es': '/',
	},
	integrations: [
		starlight({
			favicon: '/favicon-engram.svg',
			title: {
				en: 'Engram Docs',
				es: 'Documentacion de Engram',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
			components: {
				SiteTitle: './src/components/DocsSiteTitle.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			expressiveCode: {
				themes: ['dracula'],
				styleOverrides: {
					borderRadius: '10px',
					borderColor: 'rgba(255, 255, 255, 0.04)',
					frames: {
						editorBackground: '#0d0d10',
						terminalBackground: '#0d0d10',
						editorActiveTabBackground: '#0d0d10',
						editorTabBarBackground: '#111114',
						terminalTitlebarBackground: '#111114',
						terminalTitlebarDotsForeground: '#ea1889',
						terminalTitlebarDotsOpacity: '1',
						terminalTitlebarForeground: '#9595a8',
						terminalTitlebarBorderBottomColor: 'rgba(255, 255, 255, 0.06)',
						inlineButtonForeground: '#c8c8e0',
						inlineButtonBackground: '#ea1889',
						inlineButtonBackgroundIdleOpacity: '0',
						inlineButtonBackgroundHoverOrFocusOpacity: '0.15',
						inlineButtonBackgroundActiveOpacity: '0.25',
						tooltipSuccessBackground: 'rgba(234, 24, 137, 0.9)',
						tooltipSuccessForeground: '#ffffff',
						frameBoxShadowCssValue: '0 8px 40px rgba(0, 0, 0, 0.65), 0 2px 8px rgba(0, 0, 0, 0.35)',
					},
				},
			},
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Gentleman-Programming/engram' }],
			sidebar: [
				{
					label: 'Start Here',
					translations: { es: 'Empieza Aquí' },
					items: [
						{ label: 'Overview', translations: { es: 'Visión General' }, slug: 'getting-started' },
						{ label: 'What Is Engram', translations: { es: 'Qué Es Engram' }, slug: 'getting-started/what-is-engram' },
						{ label: 'Installation', translations: { es: 'Instalación' }, slug: 'getting-started/installation' },
						{ label: 'First Memory Flow', translations: { es: 'Primer Flujo de Memoria' }, slug: 'getting-started/first-memory-flow' },
						{ label: 'FAQ', translations: { es: 'Preguntas Frecuentes' }, slug: 'getting-started/faq' },
					],
				},
				{
					label: 'Agent Setup',
					translations: { es: 'Configuración por Agente' },
					items: [
						{ label: 'Section Guide', translations: { es: 'Guía de la Sección' }, slug: 'agent-setup' },
						{ label: 'Overview', translations: { es: 'Visión General' }, slug: 'agent-setup/overview' },
						{ label: 'Claude Code', slug: 'agent-setup/claude-code' },
						{ label: 'OpenCode', slug: 'agent-setup/opencode' },
						{ label: 'Gemini CLI', slug: 'agent-setup/gemini-cli' },
						{ label: 'Codex', slug: 'agent-setup/codex' },
						{ label: 'VS Code', slug: 'agent-setup/vscode' },
						{ label: 'Other MCP Agents', translations: { es: 'Otros Agentes MCP' }, slug: 'agent-setup/other-mcp-agents' },
					],
				},
				{
					label: 'Guides',
					translations: { es: 'Guías' },
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Features',
					translations: { es: 'Funciones' },
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Architecture',
					translations: { es: 'Arquitectura' },
					autogenerate: { directory: 'architecture' },
				},
				
				{
					label: 'Reference',
					translations: { es: 'Referencia' },
					autogenerate: { directory: 'reference' },
				},
				
				
			],
		}),
	],
});
