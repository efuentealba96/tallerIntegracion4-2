const options = [
	{
		key: 'mailbox',
		label: 'sidebar.email',
		leftIcon: 'ion-android-mail',
	},
	
	// {
	//   key: 'quiz',
	//   label: 'sidebar.quiz',
	//   leftIcon: 'ion-chatbubbles',
	// },
	{
		key: 'ecommerce',
		label: 'sidebar.ecommerce',
		leftIcon: 'ion-bag',
		children: [
			{
				key: 'shop',
				label: 'sidebar.shop',
			},
			{
				key: 'cart',
				label: 'sidebar.cart',
			},
			{
				key: 'checkout',
				label: 'sidebar.checkout',
			},
			{
				key: 'card',
				label: 'sidebar.cards',
			},
		],
	},
	{
		key: 'maps',
		label: 'sidebar.maps',
		leftIcon: 'ion-map',
		children: [
			{
				key: 'googlemap',
				label: 'sidebar.googleMap',
			},
			{
				key: 'leafletmap',
				label: 'sidebar.leafletMap',
			},
		],
	},
	{
		key: 'my-profile',
		label: 'sidebar.profile',
		leftIcon: 'ion-person',
	},
	{
		key: 'scrum-board',
		label: 'sidebar.scrumboard',
		leftIcon: 'ion-android-checkbox-outline',
	},
	{
		key: 'invoice',
		label: 'sidebar.invoice',
		leftIcon: 'ion-clipboard',
	},
	{
		key: 'calendar',
		label: 'sidebar.calendar',
		leftIcon: 'ion-calendar',
	},
	{
		key: 'notes',
		label: 'sidebar.notes',
		leftIcon: 'ion-ios-paper',
	},
	{
		key: 'todo',
		label: 'sidebar.todos',
		leftIcon: 'ion-android-checkbox-outline',
	},
	{
		key: 'firestorecrud',
		label: 'sidebar.firestorecrud',
		leftIcon: 'ion-fireball',

		children: [
			{
				key: 'articles',
				label: 'sidebar.firestorecrudarticle',
			},
			{
				key: 'investors',
				label: 'sidebar.firestorecrudinvestor',
			},
		],
	},
	{
		key: 'contacts',
		label: 'sidebar.contacts',
		leftIcon: 'ion-android-person-add',
	},
	{
		key: 'shuffle',
		label: 'sidebar.shuffle',
		leftIcon: 'ion-grid',
	},
	{
		key: 'charts',
		label: 'sidebar.charts',
		leftIcon: 'ion-arrow-graph-up-right',
		children: [
			{
				key: 'googleChart',
				label: 'sidebar.googleCharts',
			},
			{
				key: 'reecharts',
				label: 'sidebar.recharts',
			},
			{
				key: 'reactChart2',
				label: 'sidebar.reactChart2',
			},
			{
				key: 'frappeChart',
				label: 'sidebar.frappeChart',
			},
		],
	},
	
	// {
	//   key: 'gridLayout',
	//   label: 'sidebar.boxOptions',
	//   leftIcon: 'ion-cube'
	// },
	
];
export default options;
