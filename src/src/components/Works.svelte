<script>
	let works = [
		{
			name: 'Pharmacy POS Cashier',
			img: 'img/ibotika-cashier.jpg',
			url: '',
			type: 'POS',
			frameworks: ['Electron','Node','Vue','Lumen','Socketio','SQLite'],
			works: 'POS cashier',
			active: true
		},
		{
			name: 'Pharmacy POS Order',
			img: 'img/ibotika-tender.jpg',
			url: '',
			type: 'POS',
			frameworks: ['Electron','Node','Vue','Lumen','Socketio','SQLite'],
			works: 'POS order',
			active: true
		},
		{
			name: 'RFID QR Attendance App',
			img: 'img/rfid-qr-scanner.jpg',
			url: '',
			type: 'POS',
			frameworks: ['Electron','Node','Vue','Lumen','Socketio','Raspberry pi','Python'],
			works: 'RFID and QR scanner, attendance system',
			active: true
		},
		{
			name: 'Pharmacy Mobile App',
			img: 'img/ibotika-tender-mobile.jpg',
			url: '',
			type: 'Mobile App',
			frameworks: ['Cordova','Onsen','Socketio','Android'],
			works: 'Mobile App, POS order',
			active: true
		},
		{
			name: 'Allanapp Mobile App',
			img: 'img/allanapp.jpg',
			url: 'https://play.google.com/store/apps/details?id=com.allanapp.app',
			type: 'Mobile app',
			frameworks: ['Cordova','Onsen','Vue','Socketio','Android'],
			works: 'Mobile App',
			active: true
		},
		{
			name: 'Connectnigeria Mobile App',
			img: 'img/connectnigeriaapp.jpg',
			url: '',
			type: 'Mobile app',
			frameworks: ['Cordova','Onsen','Vue','Socketio','Android'],
			works: 'Mobile App',
			active: true
		},
		{
			name: 'SMS App',
			img: 'img/bmap-sms.jpg',
			url: '',
			type: 'POS',
			frameworks: ['Electron','Node','Vue','Lumen','Socketio','Serialport'],
			works: 'POS order',
			active: true
		},
		{
			name: 'interoptive',
			img: 'img/interoptive.jpg',
			url: 'https://interoptive.com',
			type: 'Form Survey',
			frameworks: ['Laravel','jQuery'],
			works: 'surveys, form, database, globel authentication, workspace, plans',
			active: true
		},
		{
			name: 'aipromptshelp',
			img: 'img/aipromptshelp.jpg',
			url: 'https://aipromptshelp.com',
			type: 'Search',
			frameworks: ['Laravel','Vue','Chatgpt'],
			works: 'search, prompts, folders, admin, account',
			active: true
		},
		{
			name: 'vaccine app',
			img: 'img/vax.jpg',
			url: '',
			type: 'Search',
			frameworks: ['Laravel','Vue','jQuery','RethinkDB','Node','Socketio'],
			works: 'search, import/export, statistics',
			active: true
		},
		{
			name: 'yeahshui',
			img: 'img/yeahshui.jpg',
			url: 'https://yeahshui.shop',
			type: 'Ecommerce',
			frameworks: ['Opencart','jQuery'],
			works: 'theme, backend',
			active: true
		},
		{
			name: 'manifestapparel',
			img: 'img/manifestapparel.jpg',
			url: 'http://manifestapparel.com',
			type: 'Ecommerce',
			frameworks: ['Opencart','jQuery'],
			works: 'theme, backend',
			active: true
		},
		{
			name: 'everready',
			img: 'img/everready.jpg',
			url: 'http://nextdayhost.com/demo/web/everready/',
			type: 'Ecommerce',
			frameworks: ['Opencart','jQuery'],
			works: 'theme, backend',
			active: true
		},
		{
			name: 'jovadi',
			img: 'img/jovadi.jpg',
			url: 'https://jovadi.com',
			type: 'Ecommerce',
			frameworks: ['Laravel','Opencart','Nuxt','Vue','Stripe','jQuery','Nuxt'],
			works: 'admin, products, orders, purchases, theme, backend',
			active: true
		},
		{
			name: 'nextdaysite',
			img: 'img/nextdaysite.jpg',
			url: 'https://nextdaysite.com',
			type: 'company website',
			frameworks: ['Wordpress','jQuery','Vue'],
			works: 'theme',
			active: true
		},
		{
			name: 'Connectnigeria Articles Blog',
			img: 'img/articles-blog.jpg',
			url: 'https://articles.connectnigeria.com/',
			type: 'blog',
			frameworks: ['Wordpress','jQuery'],
			works: 'theme',
			active: true
		},
		{
			name: 'Connectnigeria TV Blog',
			img: 'img/cntv-blog.jpg',
			url: 'https://cntv.connectnigeria.com',
			type: 'blog',
			frameworks: ['Wordpress','jQuery'],
			works: 'theme',
			active: true
		},
		{
			name: 'Cybastion',
			img: 'img/cybastion-blog.jpg',
			url: 'http://nextdayhost.com/demo/web/cybastion/',
			type: 'blog',
			frameworks: ['Wordpress','jQuery'],
			works: 'theme',
			active: true
		},
		{
			name: 'Bizfair',
			img: 'img/bizfair.jpg',
			url: 'https://bizfair.connectnigeria.com/2021/',
			type: 'event',
			frameworks: ['Codeigniter','Vue'],
			works: 'database, admin, pages, voting',
			active: true
		},
		{
			name: 'JF',
			img: 'img/jf.jpg',
			url: 'http://cpv2.johnfoord.com',
			type: 'valuation site',
			frameworks: ['Laravel','Vue','MS Dynamics 365'],
			works: 'admin, valuations, search, microsoft dynamics',
			active: true
		},
		{
			name: 'hfintech21',
			img: 'img/hfintech21.jpg',
			url: 'http://hfintech21.com',
			type: 'social',
			frameworks: ['Laravel','Vue','Nuxt'],
			works: 'admin, post, blog, messaging',
			active: true
		},
		{
			name: 'Kiosk',
			img: 'img/kiosk.jpg',
			url: 'http://kiosk.iligan.gov.ph',
			type: 'kiosk',
			frameworks: ['Html','jQuery'],
			works: 'kiosk',
			active: true
		}
	];

	let filter_menus = ([ ...new Set(works.map( i => i.frameworks ).flat()) ]).map( i =>{
		return {
			name: i,
			active: true
		}
	});

	let modal_open = false;
	let modal_img = '';

	function handleModalOpen(img){
		modal_open = true;
		modal_img = img;
	}

	function handleSelectedWork(i){
		if( filter_menus[i].active ){
			filter_menus[i].active = false;
		}else{
			filter_menus[i].active = true;
		}


		works = works.map( item =>{

			let new_frameworks = item.frameworks.filter( item2 =>{
				return filter_menus.findIndex( item3 => item3.active && item3.name == item2 ) != -1;
			});

			item.active = new_frameworks.length > 0;

			return item;
		});
	}
</script>
<main>
	<section class="section" id="works">
		<div class="container">
			<div class="row hv-100 align-items-center justify-content-center ">
				<div class="col-12">
					<div class="row text-center">
						<div class="col-12 mb44">
							<h3>Works</h3>
						</div>
					</div>
					<div class="row">
						<div class="col-12 mb16 d-flex justify-content-center">
							<ul class="p00 m00 works-menu">
								{#each filter_menus as item,i }
								<li>
									<a href="#{ item.name }" class="{ item.active ? 'active' : '' }" on:click={ ()=> handleSelectedWork(i) }>{ item.name }</a>
								</li>
								{/each}
							</ul>
						</div>
					</div>
					<div class="row">
						{#each works as item}
						{#if item.active }
						<div class="col-12 col-md-4 mb16">
							<div class="box">
								<div class="img-slider d-flex align-items-center">
									<img src={ item.img } alt={ item.name }>
								</div>
								<div class="details" on:click={ ()=> { handleModalOpen(item.img) } }>
									<p class="mb8">Name: { item.name }</p>
									<p class="mb8">Url: <a href={ item.url }>{ item.url }</a></p>
									<p class="mb8">Type: { item.type }</p>
									<p class="mb8">Frameworks: { item.frameworks.join(', ') }</p>
									<p class="mb8">Works: { item.works }</p>
								</div>
								<div class="caption">
									<p class="m00">{ item.name }</p>
								</div>
							</div>
						</div>
						{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="justmodal-shadow { modal_open ? 'active' : '' }"></div>
	<div class="justmodal-wrapper { modal_open ? 'active' : '' }">
	    <div class="justmodal-container p00">
	        <i class="ti ti-close justmodal-close" on:click={ () => { modal_open = false } }></i>
	        <div class="justmodal-content">
	            <div class="row">
	                <div class="col-12 mt44 mb24">
	                	<img src={ modal_img }>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</main>

<style lang="scss">
	img{
		max-width:100%;
		max-height:100%;
	}
	.box{
		position:relative;
		border:1px solid #000;
		cursor:pointer;
		.caption{
			background: rgba(0,0,0,.8);
			position: absolute;
			bottom:0px;
			height:40px;
			width:100%;
			color:#FFF;
			display:flex;
			align-items: center;
			padding: 0px 24px;
		}
		img{
			max-width: 100%;
			max-height: 100%;
		}
		&:hover{
			.caption{
				display:none;
			}
			.details{
				display:block;
			}
		}
		.details{
			position:absolute;
			top:0px;
			left:0px;
			width:100%;
			height:100%;
			background: rgba(0,0,0,.8);
			padding:24px 18px;
			display:none;
			a{
				text-decoration:underline;
			}
			*{
				color:#FFF;
			}
		}
	}
	.works-menu{
		list-style:none;
		li{
			list-style:none;
			float:left;
			a{
				border:1px solid #000;
				margin: 2px;
				color:#000;
				float:left;
				padding: 5px 8px;
				text-decoration:none;
				&.active{
					color:#FFF;
					background: #000;
				}
			}
		}
	}
</style>