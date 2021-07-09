export function SvgWrapper({ children, transform, size, viewBox }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width={size ? size : '50'}
			height={size ? size : '50'}
			viewBox={viewBox ? viewBox : '0 0 172 172'}
			style={{ fill: '#000000' }}
		>
			<g transform={transform ? transform : null}>
				<g
					fill="none"
					fillRule="nonzero"
					stroke="none"
					strokeWidth="1"
					strokeLinecap="butt"
					strokeLinejoin="miter"
					strokeMiterlimit="10"
					strokeDasharray=""
					strokeDashoffset="0"
					fontFamily="none"
					fontWeight="none"
					fontSize="none"
					textAnchor="none"
					style={{ mixBlendMode: 'normal' }}
				>
					{children}
				</g>
			</g>
		</svg>
	);
}
