import * as vscode from 'vscode';

export class CodeLensTestProvider {
    public static register_bak(context: vscode.ExtensionContext) {
        const codelensProvider = {
            provideCodeLenses(document: vscode.TextDocument): Thenable<vscode.CodeLens[]> {
                return new Promise((resolve, reject) => {
                    let codeLenses: vscode.CodeLens[] = [];
                    const codelensTest = new vscode.CodeLens(new vscode.Range(new vscode.Position(1, Math.random()), new vscode.Position(1, Math.random())));
                    codelensTest.command = {
                        title: "Codelens provided by sample extension",
                        tooltip: "Tooltip provided by sample extension",
                        command: "codelens-sample.codelensAction",
                        arguments: ["Argument 1", false]
                    };
                    codeLenses.push(codelensTest);
                    resolve(codeLenses);
                });
            }
        };
        let disposable = vscode.languages.registerCodeLensProvider('java', codelensProvider);

        vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
            codelensProvider.provideCodeLenses(event.document);
        }, context.subscriptions);

        context.subscriptions.push(disposable);
    }
}
