<script>
	import currentMenu from '../CurrentMenu.js';
</script>
<main>
	<section class="section" id="home">
		<div class="container">
			<div class="row hv-100 align-items-center justify-content-center ">
				<div class="col-12">
					<a href={'#'} class="logo-wrapper animate__animated animate__fadeIn">
						<img src="img/logo164.png" alt="Juliver Galleto" class="logo">
					</a>
					<div class="scroll-down mt44 text-center">
						<p class="font12">SCROLL DOWN</p>
						<a href={'#about'} class="arrow-bounce">
							<i class="ti-angle-double-down font24"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.logo-wrapper{
		display:block;
		.logo{
			max-width: 100%;
			max-height: 100%;
			display:block;
			margin:0px auto;
		}
	}
	.arrow-bounce{
		color:#242424;
		text-decoration: none;
		display: block;
		animation: bounce 1s infinite alternate;
		-webkit-animation: bounce 1s infinite alternate;
	}
	@keyframes bounce {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-10px);
		}
	}
	@-webkit-keyframes bounce {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-10px);
		}
	}
</style>