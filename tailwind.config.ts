import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

/** @type { tailwind.TailwindConfig } */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// darkMode: 'class',
	theme: {
		extend: {
			maxWidth: {
				'3xs': '8rem'
			},
			screens: {
				xs: '475px',
				xxs: '200px'
			},
			borderRadius: {
				DEFAULT: '3px'
			},
			spacing: {
				'9/16': '56.25%'
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem'
			},
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
				mono: ['jetbrains-mono', ...defaultTheme.fontFamily.mono]
			},
			colors: {
				primary: colors.cyan,
				gray: colors.neutral,
				'placeholder-light': '#F0F0F0',
				'placeholder-dark': '#252525',
				'atlas-blue': '#1F9EB7',
				'atlas-grey-100': '#171717',
				'atlas-grey-85': '#414042',
				'atlas-grey-75': '#707071',
				'atlas-grey-55': '#969697',
				'atlas-grey-35': '#BCBCBD',
				'atlas-grey-15': '#E2E2E3',
				'atlas-grey-5': '#F5F5F6'
			},
			typography: (theme: (arg0: string) => any) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: `${theme('colors.primary.600')} !important`
							},
							code: { color: theme('colors.primary.400') }
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900')
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900')
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.900')
						},
						'h4,h5,h6': {
							color: theme('colors.gray.900')
						},
						pre: {
							backgroundColor: theme('colors.gray.800')
						},
						code: {
							color: theme('colors.pink.500'),
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem'
						},
						'code::before': {
							content: 'none'
						},
						'code::after': {
							content: 'none'
						},
						details: {
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem'
						},
						hr: { borderColor: theme('colors.gray.200') },
						'ol li::marker': {
							fontWeight: '600',
							color: theme('colors.gray.500')
						},
						'ul li::marker': {
							backgroundColor: theme('colors.gray.500')
						},
						strong: { color: theme('colors.gray.600') },
						blockquote: {
							color: theme('colors.gray.900'),
							borderLeftColor: theme('colors.gray.200')
						}
					}
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: `${theme('colors.primary.400')} !important`
							},
							code: { color: theme('colors.primary.400') }
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100')
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100')
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.100')
						},
						'h4,h5,h6': {
							color: theme('colors.gray.100')
						},
						pre: {
							backgroundColor: theme('colors.gray.800')
						},
						code: {
							backgroundColor: theme('colors.gray.800')
						},
						details: {
							backgroundColor: theme('colors.gray.800')
						},
						hr: { borderColor: theme('colors.gray.700') },
						'ol li::marker': {
							fontWeight: '600',
							color: theme('colors.gray.400')
						},
						'ul li::marker': {
							backgroundColor: theme('colors.gray.400')
						},
						strong: { color: theme('colors.gray.100') },
						thead: {
							th: {
								color: theme('colors.gray.100')
							}
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700')
							}
						},
						blockquote: {
							color: theme('colors.gray.100'),
							borderLeftColor: theme('colors.gray.700')
						}
					}
				}
			})
		}
	},
	plugins: [forms, typography]
};

export default config;
