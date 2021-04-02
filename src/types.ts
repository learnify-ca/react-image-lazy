import { CSSProperties, ErrorInfo, ReactNode } from "react";
import { useImageProps } from "react-image";

export interface ErrorBoundaryProps<Logger = any> {
	errorFallback: ReactNode;
	logErrors?: (error: Error, errorInfo?: ErrorInfo) => Logger;
}

export interface ErrorBoundaryState {
	hasError: boolean;
}

export interface ImageProps {
	src?: string;
	alt?: string;
	blur?: number;
	style?: CSSProperties;
}

export type LazyImageProps<Logger = any> = ImageProps & ErrorBoundaryProps<Logger> & useImageProps & {
	delay?: number;
}