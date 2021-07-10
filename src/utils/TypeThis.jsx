import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import Typed from 'typed.js';

export function TypeThis(props) {
	const { strings, style, className, children, speed, ...other } = props;

	const typedElement = useRef();

	useEffect(() => {
		const options = {
			strings: children ? [children] : strings,
			typeSpeed: other.typeSpeed ? other.typeSpeed : speed,
			backSpeed: other.backSpeed ? other.backSpeed : speed,
			...other,
		};

		const typed = new Typed(typedElement.current, options);

		return () => {
			typed.destroy();
		};
	}, [strings, children, speed, other]);

	return <span style={style} className={className} ref={typedElement} />;
}

TypeThis.defaultProps = {
	speed: 50,
	showCursor: false,
};

TypeThis.propTypes = {
	/** styles for the outer element */
	style: PropTypes.object,
	/** class name for the outer element */
	className: PropTypes.string,
	/** the element to wrapp */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	/** typedRef(self: Typed) returns the Typed instance */
	typedRef: PropTypes.func,
	/** initialize in stopped state */
	stopped: PropTypes.bool,
	/** strings to be typed */
	strings: PropTypes.arrayOf(PropTypes.string),
	/** both type speed and back speed in milliseconds */
	speed: PropTypes.number,
	/** type speed in milliseconds */
	typeSpeed: PropTypes.number,
	/** time before typing starts in milliseconds */
	startDelay: PropTypes.number,
	/** backspacing speed in milliseconds */
	backSpeed: PropTypes.number,
	/** time before backspacing in milliseconds */
	backDelay: PropTypes.number,
	/**  only backspace what doesn't match the previous string */
	smartBackspace: PropTypes.bool,
	/** shuffle the strings */
	shuffle: PropTypes.bool,
	/** Fade out instead of backspace */
	fadeOut: PropTypes.bool,
	/** css class for fade animation */
	fadeOutClass: PropTypes.string,
	/** Fade out delay in milliseconds */
	fadeOutDelay: PropTypes.number,
	/** loop the strings */
	loop: PropTypes.bool,
	/** amount of loops */
	loopCount: PropTypes.number,
	/** show cursor */
	showCursor: PropTypes.bool,
	/** character for cursor */
	cursorChar: PropTypes.string,
	/** insert CSS for cursor and fadeOut into HTML */
	autoInsertCss: PropTypes.bool,
	/** attribute for typing Ex: input placeholder, value, or just HTML text */
	attr: PropTypes.string,
	/**  bind to focus and blur if el is text input */
	bindInputFocusEvents: PropTypes.bool,
	/**  'html' or 'null' for plaintext */
	contentType: PropTypes.oneOf(['html', '']),
	/** onComplete(self: Typed) All typing is complete */
	onComplete: PropTypes.func,
	/** preStringTyped(arrayPos: number, self: Typed) Before each string is typed */
	preStringTyped: PropTypes.func,
	/** onStringTyped(arrayPos: number, self: Typed) After each string is typed */
	onStringTyped: PropTypes.func,
	/** onLastStringBackspaced(self: Typed) During looping, after last string is typed */
	onLastStringBackspaced: PropTypes.func,
	/** onTypingPaused(arrayPos: number, self: Typed) Typing has been stopped */
	onTypingPaused: PropTypes.func,
	/** onTypingResumed(arrayPos: number, self: Typed) Typing has been started after being stopped */
	onTypingResumed: PropTypes.func,
	/** onReset(self: Typed) After reset */
	onReset: PropTypes.func,
	/** onStop(arrayPos: number, self: Typed)    After stop */
	onStop: PropTypes.func,
	/** onStart(arrayPos: number, self: Typed) After start */
	onStart: PropTypes.func,
	/** onDestroy(self: Typed) After destroy */
	onDestroy: PropTypes.func,
};
