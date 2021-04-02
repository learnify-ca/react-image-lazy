import React from "react";

/* Components */
import ErrorBoundary from "./ErrorBoundary";

/* Types */
import { FC, ReactElement } from "react";
import { BlurredImageProps, LazyImageProps, RealImageProps } from "./types";
import { useImage } from "react-image";

export * from "./hooks";

const BlurredImage = ({
	src,
	alt,
	delay,
	blur = 20,
	style,
}: BlurredImageProps<string>) =>
	<img
		{...{ src, alt }}
		style={{
			filter: `blur(${blur}px)`,
			transition: `filter ${delay / 1000}s ease-out`,
			...style
		}}
	/>

const RealImage = ({
	src,
	alt,
	style
}: RealImageProps<string | undefined>) =>
	<img
		{...{ src, alt }}
		style={{
			width: 200,
			filter: "none",
			transition: "none",
			...style
		}}
	/>

const LazyImage: FC<LazyImageProps> = ({
	placeholder,
	alt,
	style,
	blur = 20,
	delay = 300,
	errorFallback,
	logErrors,
	useSuspense,
	imgPromise,
	...props
}): ReactElement<
	LazyImageProps,
	FC<LazyImageProps>
> => {
	const { src, error } = useImage({ srcList: props.src, imgPromise, useSuspense });

	return (
		<ErrorBoundary<typeof error> {...{ errorFallback, logErrors }}>
			{
				!props.src ?
					<BlurredImage
						src={placeholder}
						alt={alt}
						style={style}
						blur={blur}
						delay={delay}
					/> :
					<RealImage
						src={src}
						alt={alt}
						style={style}
					/>
			}
		</ErrorBoundary>
	);
};

export default LazyImage;