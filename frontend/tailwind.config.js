// Excelerate brand accent scale (replaces Tailwind blue, indigo, sky, purple, violet)
const brandAccent = {
	50: '#FBF4E6',
	100: '#FBF4E6',
	200: '#C9A87E',
	300: '#C9A87E',
	400: '#6B0F1A',
	500: '#6B0F1A',
	600: '#6B0F1A',
	700: '#3B1417',
	800: '#3B1417',
	900: '#3B1417',
	950: '#3B1417'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			// Excelerate brand: Georgia (Brand Master v1.5, section 5.2)
  			sans: [
  				'Georgia',
  				'"Times New Roman"',
  				'serif'
  			]
  		},
  		colors: {
  			// Excelerate brand: the app's original blue/indigo/purple accents are
  			// mapped onto the six brand colours (Brand Master v1.5, section 5.1).
  			// Light shades become Cream, borders Soft Gold, solid accents the maroons.
  			blue: brandAccent,
  			indigo: brandAccent,
  			sky: brandAccent,
  			purple: brandAccent,
  			violet: brandAccent,
  			// Red (record button, errors) becomes the maroons, as Brand Master 5.5 rule 6 requires.
  			red: brandAccent,
  			rose: brandAccent,
  			brand: {
  				'deep-maroon': '#3B1417',
  				'rich-maroon': '#6B0F1A',
  				'accent-gold': '#C9A84C',
  				'soft-gold': '#C9A87E',
  				cream: '#FBF4E6',
  				charcoal: '#1F1F1F'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: '#64748b',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
}