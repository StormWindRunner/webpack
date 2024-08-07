import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';

type Mode = 'production' | 'development';

interface EnvVariables {
	mode: Mode,
	port: number,
	paths: {
		output: string;
		entry: string;
		html: string;
		src: string;
	},
};

export function buildWebpack (options: EnvVariables): webpack.Configuration {

	const isDev = options.mode === 'development';

	return {
		mode: options.mode ?? 'development',
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: '[name].[contenthash].js', // у статичного названия есть проблемы
			clean: true
		},
		// tsx умеет с jsx, иначе babel
		module: {
			rules: buildLoaders(),
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			alias: {
				'@': options.paths.src,
			}
		},
		plugins: buildPlugins(options),
		devtool: 'inline-source-map',
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}