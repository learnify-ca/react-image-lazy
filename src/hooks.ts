import { useImage as useDefaultImage, useImageProps } from "react-image";

export const useImage = <E = any>(props: useImageProps): {
	src?: string;
	isLoading: boolean;
	error: E;
} =>
	useDefaultImage(props);