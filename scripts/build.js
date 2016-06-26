import webpack from "webpack";
import config from "../webpack.config.prod";
import chalk from 'chalk';

process.env.NODE_ENV = "production";

console.log(chalk.blue("Building production files..."));
webpack(config).run((error, stats) => {
    if (error) {
        console.log(chalk.red(error));
        return 1;
    }
    const _stats = stats.toJson();

    if (_stats.hasErrors) {
        return _stats.errors.map(error => console.log(chalk.red(error)));
    }

    if (_stats.hasWarnings) {
        _stats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(chalk.green("Build completed successfully!!"));
    return 0;
});
