import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';


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

module.exports = (env: EnvVariables) => {

	const paths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, './src/index.tsx'),
		html: path.resolve(__dirname, 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const config: webpack.Configuration = buildWebpack({
		port: 3000,
		mode: env.mode ?? 'development',
		paths: paths,
	});

	return config;
}