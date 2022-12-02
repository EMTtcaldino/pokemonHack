import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.scss'],
})
export class ModalPokemonComponent implements OnInit {
  @Input() pokemonData: any;
  constructor(public modalController: ModalController) {}

  ngOnInit(): void {
    console.log(this.pokemonData);
  }

  closeModal(): void {
    this.modalController.dismiss();
  }
}
