import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetWebFonts,
	presetWind,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";

export default defineConfig({
	shortcuts: [
		["btn", "px-4 py-2 rounded inline-block bg-blue-600 text-white cursor-pointer hover:bg-blue-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"],
		["icon-btn", "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-blue-600"],
		["van-btn", "transition-colors duration-300 !text-base !font-semibold !mt-8 !py-2.5 !border-blue-600 !rounded-lg !bg-blue-600 !hover:border-blue-700 !hover:bg-blue-700"],
		["van-cell-group", "p-1 border border-white/30 rounded-xl bg-white/70 shadow-lg overflow-hidden backdrop-blur-lg"]
	],
	presets: [
		presetWind(), // `presetWind3` 可能是笔误，通常是 `presetWind`
		presetAttributify(),
		presetIcons({
			scale: 1.2
		}),
		presetTypography(),
		presetWebFonts({
			// themeKey: 'font',
			fonts: {
				sans: {
					name: "Noto Sans SC",
					weights: ["100", "400", "500", "700"]
				},
				serif: "DM Serif Display",
				mono: "Oswald"
			},
			processors: createLocalFontProcessor()
		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});