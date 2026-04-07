// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
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
					label: 'Plugins',
					translations: { es: 'Plugins' },
					autogenerate: { directory: 'plugins' },
				},
				{
					label: 'Reference',
					translations: { es: 'Referencia' },
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Comparison',
					translations: { es: 'Comparación' },
					autogenerate: { directory: 'comparison' },
				},
				{
					label: 'Contributing',
					translations: { es: 'Contribuir' },
					autogenerate: { directory: 'contributing' },
				},
			],
		}),
	],
});
