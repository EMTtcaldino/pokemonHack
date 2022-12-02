import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPokemonComponent } from '../modal-pokemon/modal-pokemon.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() pokemonData: any;
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
    console.log(this.pokemonData);
  }

  async showPokemonData(): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalPokemonComponent,

      backdropDismiss: false,

      componentProps: {
        pokemonData: this.pokemonData,
      },
    });

    return await modal.present();
  }
}
