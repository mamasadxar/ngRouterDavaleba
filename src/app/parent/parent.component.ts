import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [RouterModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

	items = [
		{ id: 1, name: "item 1" },
		{ id: 2, name: "item 2" },
		{ id: 3, name: "item 3" },
		{ id: 4, name: "item 4" },
		{ id: 5, name: "item 5" }
	];

	constructor(private router: Router) {}

	goToTemplate(id: number, name: string) {
		this.router.navigate(['/template'], {
			queryParams: { id, name },
		});
	}
}
