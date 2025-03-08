<div></div>

<style>
	div {
		user-select: none;
		pointer-events: none;
		position: fixed;
		width: 100vw;
		z-index: 1;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		opacity: 0.95;
		height: clamp(3rem, 8vh, 8rem);

		&::after {
			content: '';
			position: relative;
			display: block;
			width: 100%;
			height: 100%;
		}

		&:first-of-type {
			mask-image: linear-gradient(to bottom, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0));
			top: 0;

			&::after {
				background: linear-gradient(to bottom, var(--color-bg), rgba(255, 255, 255, 0));
			}

			@media screen and (max-width: 799px) {
				display: none;
			}
		}

		&:not(:first-of-type) {
			mask-image: linear-gradient(to top, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0));
			bottom: 0;

			&::after {
				background: linear-gradient(to top, var(--color-bg), rgba(255, 255, 255, 0));
			}

			@media screen and (max-width: 799px) {
				mask-image: linear-gradient(to top, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0));
			}
		}
	}
</style>
