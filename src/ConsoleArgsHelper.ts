class ConsoleArgsHelper {
    static parse(argv: string[] = process.argv) {
        let result: {[id: string]: string} = {};
        for (let i = 2; i < argv.length; i++) {
            const param = argv[i];
            if (param.startsWith('-')) {
                const [key, value] = param.split('=');
                result[key] = value;
            }
        }
        return result;
    }
}

export default ConsoleArgsHelper;
