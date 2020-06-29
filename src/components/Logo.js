import React from 'react';

const Logo = (props) => (
    <svg viewBox="0 0 640 640" width={640} height={640} {...props}>
        <defs>
            <path
                d="M204.58 221.39l112.04 122.22L154.79 539.9l142.88-196.29-142.88-122.22L316.62 70.78 204.58 221.39z"
                id="a"
            />
            <radialGradient
                id="b"
                gradientUnits="userSpaceOnUse"
                cx={235.7}
                cy={70.78}
                r={469.12}
            >
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#010000" />
            </radialGradient>
            <path
                d="M332.97 138.44l94.72 245.84L316.62 539.9l168.59-148.86L316.62 70.78v465.74l16.35-398.08z"
                id="c"
            />
            <radialGradient
                id="d"
                gradientUnits="userSpaceOnUse"
                cx={400.91}
                cy={70.78}
                r={469.12}
            >
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#010000" />
            </radialGradient>
            <path
                d="M303.65 138.44l-94.73 245.84L320 539.9 151.41 391.04 320 70.78v465.74l-16.35-398.08z"
                id="f"
            />
            <radialGradient
                id="g"
                gradientUnits="userSpaceOnUse"
                cx={235.7}
                cy={70.78}
                r={469.12}
            >
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#010000" />
            </radialGradient>
            <path
                d="M432.03 221.39L320 343.61 481.82 539.9 338.94 343.61l142.88-122.22L320 70.78l112.03 150.61z"
                id="i"
            />
            <radialGradient
                id="j"
                gradientUnits="userSpaceOnUse"
                cx={400.91}
                cy={70.78}
                r={469.12}
            >
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#010000" />
            </radialGradient>
        </defs>
        <use xlinkHref="#a" opacity={0.25} fill="url(#b)" />
        <use xlinkHref="#a" opacity={0.25} fillOpacity={0} stroke="#fff" />
        <use xlinkHref="#c" opacity={0.25} fill="url(#d)" />
        <use xlinkHref="#c" opacity={0.25} fillOpacity={0} stroke="#fff" />
        <g>
            <filter
                id="e"
                x={121.41}
                y={40.78}
                width={233.59}
                height={534.12}
                filterUnits="userSpaceOnUse"
                primitiveUnits="userSpaceOnUse"
            >
                <feFlood />
                <feComposite in2="SourceAlpha" operator="in" />
                <feGaussianBlur stdDeviation={3.16} />
                <feOffset dx={5} dy={5} result="afterOffset" />
                <feFlood floodColor="#000" floodOpacity={0.5} />
                <feComposite in2="afterOffset" operator="in" />
                <feMorphology operator="dilate" />
                <feComposite in2="SourceAlpha" operator="out" />
            </filter>
            <path
                d="M303.65 138.44l-94.73 245.84L320 539.9 151.41 391.04 320 70.78v465.74l-16.35-398.08z"
                fill="#fff"
                fillOpacity={1}
                filter="url(#e)"
            />
            <use xlinkHref="#f" fill="url(#g)" />
            <g>
                <use xlinkHref="#f" fillOpacity={0} stroke="#000" />
            </g>
        </g>
        <g>
            <filter
                id="h"
                x={290}
                y={40.78}
                width={226.82}
                height={534.12}
                filterUnits="userSpaceOnUse"
                primitiveUnits="userSpaceOnUse"
            >
                <feFlood />
                <feComposite in2="SourceAlpha" operator="in" />
                <feGaussianBlur stdDeviation={3.16} />
                <feOffset dx={5} dy={5} result="afterOffset" />
                <feFlood floodColor="#000" floodOpacity={0.5} />
                <feComposite in2="afterOffset" operator="in" />
                <feMorphology operator="dilate" />
                <feComposite in2="SourceAlpha" operator="out" />
            </filter>
            <path
                d="M432.03 221.39L320 343.61 481.82 539.9 338.94 343.61l142.88-122.22L320 70.78l112.03 150.61z"
                fill="#fff"
                fillOpacity={1}
                filter="url(#h)"
            />
            <use xlinkHref="#i" fill="url(#j)" />
            <g>
                <use xlinkHref="#i" fillOpacity={0} stroke="#000" />
            </g>
        </g>
    </svg>
);

export default Logo;
