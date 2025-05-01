
import type { Config } from "tailwindcss";

// Note: We can't directly import assets here as this file is processed by the tailwind CLI
// We'll use a relative path that will work in both dev and production

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // MBA Brand Colors
                mba: {
                    dark: "#1A1F2C",
                    darker: "#141820",
                    pink: "#D24C8E",
                    "pink-light": "#E76CAE",
                    "pink-dark": "#B23A7A",
                    teal: "#4DCFD9",
                    "teal-light": "#6EECF5",
                    "teal-dark": "#3AACB5",
                    light: "#F8F9FA",
                    gray: "#8A94A6",
                    "gray-light": "#CDD5DF",
                    "gray-dark": "#5A6478",
                    accent: "#FFB347", // Orange accent
                    success: "#4CAF50",
                    warning: "#FF9800",
                    error: "#F44336",
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
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 15px 5px rgba(77, 207, 217, 0.4), 0 0 30px 10px rgba(210, 76, 142, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 25px 10px rgba(77, 207, 217, 0.6), 0 0 40px 15px rgba(210, 76, 142, 0.3)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'marquee': 'marquee 25s linear infinite',
				'pulse-slow': 'pulse-glow 3s ease-in-out infinite'
			},
            backgroundImage: {
                // Use a path that works in both dev and production environments
                'hero-pattern': 'linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.9)), url("/JC.png")',
                'teal-pink-gradient': 'linear-gradient(90deg, #4DCFD9 0%, #D24C8E 100%)',
                'teal-pink-diagonal': 'linear-gradient(135deg, #4DCFD9 0%, #D24C8E 100%)',
                'dark-gradient': 'linear-gradient(180deg, #1A1F2C 0%, #141820 100%)',
                'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                'mesh-pattern': 'radial-gradient(circle at center, rgba(77, 207, 217, 0.15) 0, rgba(210, 76, 142, 0.15) 100%)',
                'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                'glow-teal': 'radial-gradient(circle at center, rgba(77, 207, 217, 0.3) 0, transparent 70%)',
                'glow-pink': 'radial-gradient(circle at center, rgba(210, 76, 142, 0.3) 0, transparent 70%)',
            },
            backgroundSize: {
                'dots-sm': '20px 20px',
                'dots-md': '30px 30px',
                'dots-lg': '40px 40px',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
