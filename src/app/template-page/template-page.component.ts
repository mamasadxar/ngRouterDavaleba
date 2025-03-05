import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-template-page',
  imports: [],
  templateUrl: './template-page.component.html',
  styleUrl: './template-page.component.scss'
})
export class TemplatePageComponent {
	itemId?: number;
	itemName?: string;

	route = inject(ActivatedRoute);
	location = inject(Location);

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			this.itemId = params['id'];
			this.itemName = params['name'];
		});
	}
}