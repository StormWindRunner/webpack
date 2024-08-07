import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

interface EnvVariables {
	mode: any,
	port: number,
	paths: {
		output: string;
		entry: string;
		html: string;
	},
};

export function buildPlugins (options: EnvVariables) {
	return [
		new HtmlWebpackPlugin({template: options.paths.html}),
		new webpack.ProgressPlugin({}),
		new MiniCssExtractPlugin(),
		// new BundleAnalyzerPlugin()
	]
}