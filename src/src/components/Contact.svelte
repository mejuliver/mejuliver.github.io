<script>
	let firstname = '';
	let lastname = '';
	let email = '';
	let subject = 'Email from mejuliver.github.io';
	let message = ''
	let submitted = false;

	function submit(){
		submitted = true;
	}
</script>
<main>
	<section class="section" id="contact">
		<div class="container">
			<div class="row hv-100 align-items-center justify-content-center ">
				<div class="col-12">
					<div class="row">
						<div class="col-12 col-md-6 mb16">
							<h3 class="mb32">Contact me, lets make your idea to reality</h3>
							<p class="mb12">
								<i class="ti-email mr8"></i>juliver.galleto@gmail.com
							</p>
							<p class="mb12">
								<i class="ti-mobile mr8"></i>639653065060
							</p>
						</div>
						<div class="col-12 col-md-6 mb16">
							{#if submitted}
							<div class="row">
								<div class="col-12 mb16">
									<div class="alert alert-danger">
										Unable to send email. Kindly directly mail me at juliver.galleto@gmail.com
									</div>
								</div>
							</div>
							{/if}
							<form action="" class="row" on:submit|preventDefault={submit}>
								<div class="col-12 col-md-6 mb16">
									<input type="text" placeholder="First name" bind:value={ firstname } class="form-control">
								</div>
								<div class="col-12 col-md-6 mb16">
									<input type="text" placeholder="Last name" bind:value={ lastname } class="form-control">
								</div>
								<div class="col-12 col-md-12 mb16">
									<input type="text" placeholder="Email" bind:value={ email } class="form-control">
								</div>
								<div class="col-12 col-md-12 mb24">
									<textarea placeholder="Message" cols="30" rows="10" bind:value={ message } class="form-control"></textarea>
								</div>
								<div class="col-12 col-md-12 mb16">
									<button class="btn btn-block">SUBMIT</button>
								</div>
							</form>
						</div>
						<div class="col-12 mt44 text-center">
							<h3 class="text-center">"Crafting Digital Experiences, One Pixel at a Time"</h3>
							<a href="https://drive.google.com/file/d/1hfn45GUML7e4lZSSvnYLzcO4eFojwRS2/view?usp=share_link" target="__BLANK" class="btn mt16">Download Resume</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.alert{
		background:none;
		border-color:#242424;
		color:#242424;
		border-radius:0px;
	}
	input,textarea{
		border-color:#242424;
		border-radius: 0px;
	}
	.btn{
		background: #242424;
		color:#FFF;
		border-color: #242424;
		border-radius:0px;
	}
</style>