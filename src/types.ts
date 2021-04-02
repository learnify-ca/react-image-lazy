import { CSSProperties, ErrorInfo, ReactNode } from "react";

export interface ErrorBoundaryProps<Logger = any> {
	errorFallback: (error: Error, errorInfo?: ErrorInfo) => ReactNode;
	logErrors?: (error: Error, errorInfo?: ErrorInfo) => Logger;
}

export interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
	errorInfo?: ErrorInfo;
}

export interface ImageProps<T> {
	src: T;
	alt?: string;
	style?: CSSProperties;
}

export type RealImageProps<T> = ImageProps<T>;

export interface BlurredImageProps<T> extends ImageProps<T> {
	delay: number;
	blur: number;
}

export type LazyImageProps<Logger = any> = ImageProps<string> & ErrorBoundaryProps<Logger> & {
	blur?: number;
	delay?: number;
	imgPromise?: ((...args: any[]) => Promise<void>);
	placeholder: string;
	useSuspense?: boolean;
}