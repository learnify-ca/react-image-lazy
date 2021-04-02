import React from "react";

/* Components */
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

/* Types */
import { FC, ReactElement } from "react";
import { ImageProps, LazyImageProps } from "./types";
import { useImage } from "react-image";

export * from "./hooks";

const BlurredImage = ({
	src,
	alt,
	blur = 20,
	...style
}: ImageProps) =>
	<img
		{...{ src, alt }}
		style={{
			filter: `blur(${blur}px)`,
			transition: "none",
			...style
		}}
	/>

const RealImage = ({
	src,
	alt,
	style,
}: ImageProps) =>
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
	srcList,
	alt,
	style,
	blur = 20,
	delay = 300,
	...props
}): ReactElement<
	LazyImageProps,
	FC<LazyImageProps>
> => {
	const { src, error } = useImage({ srcList, useSuspense: true });

	return (
		<ErrorBoundary<typeof error> {...props}>
			<Suspense fallback={<BlurredImage {...{ src, alt, blur, style }} /> || <></>}>
				<RealImage {...{ src, alt, style }} />
			</Suspense>
		</ErrorBoundary>
	);
};

export default LazyImage;