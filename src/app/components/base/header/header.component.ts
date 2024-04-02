import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit(): void {
        this.items = [
            {
                label: 'Liste des chaudières',
                icon: 'pi pi-fw pi-list',
                href: '#',
            },
            {
                label: 'Interventions',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: "Liste des relevés d'interventions",
                        icon: 'pi pi-fw pi-list',
                    },
                    {
                        label: "Saisir un relevé d'intervention",
                        icon: 'pi pi-fw pi-plus',
                    },
                ],
            },
        ];
    }
}
