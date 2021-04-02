/* Types */
import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

export default class ErrorBoundary<Logger = any> extends Component<ErrorBoundaryProps<Logger>, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			hasError: false
		};
	}

	public static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		const { logErrors } = this.props;
		logErrors && logErrors(error, errorInfo);
	}

	public render(): ReactNode {
		const { children, errorFallback } = this.props;
		const { hasError, error, errorInfo } = this.state;

		if (!hasError) return children;
		else if (error) return errorFallback(error, errorInfo);
	}
};