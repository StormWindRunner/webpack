import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): ModuleOptions['rules'] {
	return [
		{
			test: /\.s[ac]ss$/i,
			use: [
				// Creates `style` nodes from JS strings
				MiniCssExtractPlugin.loader,
				// Translates CSS into CommonJS
				"css-loader",
				// Compiles Sass to CSS
				"sass-loader",
			],
		},
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.(png|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
      	},
		{
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		}
	]
}