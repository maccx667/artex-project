import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	type?: string;
	megaMenu?: boolean;
	image?: string;
	active?: boolean;
	badge?: boolean;
	badgeText?: string;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() { }

	public screenWidth: any;
	public leftMenuToggle: boolean = false;
	public mainMenuToggle: boolean = false;

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			path: '/home', title: 'Inicio', type: 'link', active: false,
		},
		{
			path: 'pages/aboutus', title: 'Nosotros', type: 'link', active: false,
		},
		{
			path: 'pages/aboutus', title: 'Servicios', type: 'link', active: false,
		},
		{
			path: '/products', title: 'Productos', type: 'link', active: false,
		},
		{
			path: '/pages/contact', title: 'Contáctanos', type: 'link', active: false,
		},
		{
			path: '/pages/faq', title: '¿Preguntas?', type: 'link', active: false,
		},
	];

	LEFTMENUITEMS: Menu[] = [
		{
			path: '/pages/dashboard', title: 'dashboard', type: 'link'
		},
		{
			path: '/home/fashion', title: 'Inventarios', type: 'link'
		},
		{
			path: '/pages/qrreader', title: 'QR', type: 'link'
		},
	];

	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);

}
