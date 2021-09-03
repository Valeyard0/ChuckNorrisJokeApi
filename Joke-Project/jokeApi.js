class jokeApi{
    constructor(){
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
        });
    }

    async randomSakaGetir(){
        try{

            const jokeResponse = await this.axiosNesne.get('/jokes/random')
            console.log(jokeResponse.data.value);
            return jokeResponse.data.value;
        } 
        catch(error){
            console.log(error);
        }
    }
}

export default function getJoke(){
        const joke = new jokeApi().randomSakaGetir();
        return joke;
    
    
}