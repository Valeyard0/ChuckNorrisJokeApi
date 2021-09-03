import getPhoto from './Unsplash_api.js'
import getJoke from './jokeApi.js';

class Ekran{
    constructor(){
        this.sakaGetirBtn = document.querySelector('.saka-getir-button');
        this.sakaGetirBtn.addEventListener('click' , () => this.sakaGetir());

        
    }
    async sakaGetir(){
        const randomPicture = await getPhoto();
        const randomJoke = await getJoke();
        
        const allResults = {
            randomPicture,
            randomJoke,
        }

        this.printScreen(allResults);
    }
    printScreen(sonuclar){
        document.querySelector('.sonuc').innerHTML = `
        <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${sonuclar.randomPicture}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb4">${sonuclar.randomJoke}</p>
            </div>
          </div>

      </div>
</div>
        `
    }
}

export default function start(){
  new Ekran();
}