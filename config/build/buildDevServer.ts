import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

type Mode = 'production' | 'development';

interface EnvVariables {
	mode: Mode,
	port: number,
	paths: {
		output: string;
		entry: string;
		html: string;
	},
};

export function buildDevServer (options: EnvVariables) {
	return {
			port: options.port ?? 3000,
			open: true,
			historyApiFallback: true,
		}
}