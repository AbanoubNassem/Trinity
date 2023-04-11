declare const Error: {
    ({ statusCode, reasonPhrase }: {
        statusCode: number;
        reasonPhrase: string;
    }): JSX.Element;
    layout: any;
};
export default Error;
