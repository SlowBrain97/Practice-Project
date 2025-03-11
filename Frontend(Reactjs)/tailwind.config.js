
import tailwindcssMotion from "tailwindcss-motion";
import tailwindScrollbar from "tailwind-scrollbar"


/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			merriweather: [
  				'Merriweather',
  				'serif'
  			],
  			'eczar': [
  				'Eczar',
  				'serif'
  			],
  			sora: 'var(--font-main)'
  		},
  		backgroundImage: {
  			'shadow-0deg': [
  				'linear-gradient(0deg, #0e0e0e 62%)'
  			],
  			'shadow-180deg': [
  				'linear-gradient(180deg, #0e0e0e 62%)'
  			]
  		},
  		boxShadow: {
  			'custom-shadow': '0 10px 20px rgba(0, 0, 0, 0.5)'
  		},
  		keyframes: {
  			borderPulse: {
  				'0%, 100%': {
  					borderColor: 'rgba(255, 255, 255, 0.6)'
  				},
  				'50%': {
  					borderColor: 'rgba(255, 255, 255, 0.9)'
  				}
  			},
  			'carouselMove': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'50%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			}
  		},
  		animation: {
  			'border-pulse': 'borderPulse 2s ease-in-out infinite',
  			'carousel-move': 'carouselMove var(--duration, 80s) infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [tailwindcssMotion, tailwindScrollbar,

    function({ addUtilities }) {
      const scrollbarUtilities = {
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-thumb:vertical': {
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)',
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-thumb:horizontal': {
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)',
            borderRadius: '4px'
          }
        },
        '.scrollbar-corner-black': {
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'black'
          }
        }
      }
      addUtilities({
        '.clip-button': {
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 65%, 65% 0%)',
          
        },
        '.border-gradient': {
          background:
            'linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)',
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 65%, 65% 0%)',
          zIndex: '-1',
          position: 'absolute',
        },
        ".b-hero-after": {
          position: "absolute",
          top : "0", bottom:"0", left:"0", right:"0",
          content: "''", // Pseudo-element content
          background: "linear-gradient(180deg, hsla(0, 0%, 88%, 0) 29.9%, #f3f4f4)",
          zIndex: "1",
        },
        ".b-hero": {
          position: "relative",
          zIndex: "0",
        },
      });
      addUtilities(scrollbarUtilities, ['responsive', 'hover'])
      
    },
    function({ addComponents, theme }) {
      addComponents({
        '.btn-notched': {
          position: 'relative',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'transparent',
          color: theme('colors.white'),
          border: '1px solid rgba(255, 255, 255, 0.6)',
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 45%, 57% 0%)',
          transition: 'all 0.3s ease',
          
          // Tạo hiệu ứng bóng mờ
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -1,
            left: -1,
            right: -1,
            bottom: -1,
            border: '1px solid rgba(255, 255, 255, 0.6)',
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 45%, 57% 0%)',
            zIndex: -1,
          },
          
          // Hover effects
          '&:hover': {
            borderColor: theme('colors.white'),
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            animation: 'border-pulse 2s ease-in-out infinite',
          },

          // Focused state
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.white'),
            boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)',
          },

          // Active state
          '&:active': {
            transform: 'translateY(1px)',
          },
        },
        '.btn-notched-wrapper': {
          position: 'relative',
          display: 'inline-block',
          padding: '1px', // Tạo space cho border
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 45%, 57% 0%)',
        },
        '.btn-notched-border': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: '1px solid rgba(255, 255, 255, 0.6)',
        },
        '.btn-notched-content': {
          position: 'relative',
          display: 'block',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'transparent',
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 45%, 57% 0%)',
          transition: 'all 0.3s ease',
          
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }
        }
      });
      
    }, require("tailwindcss-animate")]
}