<script>
	import { onMount, onDestroy } from 'svelte';
	import currentMenu from '../CurrentMenu.js';

	let menu = [
		{ text : 'Home', id : 'home', active : true, hoverd : false },
		{ text : 'About', id : 'about', active : false, hoverd : false },
		{ text : 'Works', id : 'works', active : false, hoverd : false },
		{ text : 'Skills', id : 'skills', active : false, hoverd : false },
		{ text : 'Contact', id : 'contact', active : false, hoverd : false }
	];

	const unsub = currentMenu.subscribe(data=>{
		let q = menu.findIndex( i => i.id == data );

		if( q == -1 ) return;

		if( menu.findIndex( i => i.active ) != -1 ){
			menu[menu.findIndex( i => i.active )].active = false;
		}
		menu[q].active = true;
	});

	onMount(()=>{
		menu.forEach(item=>{
			let el = document.querySelector('#'+item.id);

			let observer = new window.IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					window.history.pushState({},"", window.location.origin+'#'+item.id);
					currentMenu.update(()=>{
						return item.id;
					});
			    	return
				}
			}, {
				root: null,
				threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
			});

			observer.observe(el);
		});
	});

	onDestroy(()=>{
		unsub();
	});

</script>

<div class="menu-wrapper">
	<div class="menu-container animate__animated animate__slideInRight">
		{#each menu as item}
		<a href={'#'+item.id} class={ item.active ? 'active' : '' }>
			<span class="font12">{item.text}</span>
		</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.menu-wrapper{
		position: fixed;
		top:0px;
		right: 20px;
		height:100vh;
		width:0px;
		z-index: 10;
		display:flex;
		align-items:center;
		justify-content:center;
		.menu-container{
			width:22px;
			position:relative;
		}
		a{
			margin-bottom:12px;
			width: 22px;
			height: 22px;
			display:flex;
			align-items: center;
			justify-content: start;
			background: transparent;
			border: 1px solid #242424;
			font-weight:300;
			padding-left:5px;
			clear:both;
			float:right;
			color:#FFF!important;
			text-decoration: none!important;
			span{
				display:none;
			}
			&.active{
				background: #242424!important;
			}
			&:hover{
				background: #242424!important;
				width: 140px;
				span{
					display:block;
				}
			}
		}
	}
</style>