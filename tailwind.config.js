import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'om': "url('./static/om.jpg')",
			}
		}
	},
	plugins: [typography, forms, aspectRatio]
};
