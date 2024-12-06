import * as vscode from 'vscode';
import { CodeLensTestProvider } from './codelensProvider';

export function activate(context: vscode.ExtensionContext) {
	CodeLensTestProvider.register_bak(context);
}

export function deactivate() {}
