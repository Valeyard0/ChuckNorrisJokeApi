class Unsplash_api{
    constructor(){
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID inhv5HT6JiEez85RmzFRUD6FYrETyxGBC1HLTJTXvVY'
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
            headers :{
                Authorization : this.clientID
            },
            params:{
                query : 'animal',
                count : 1
            }
        });
    }
    
    async randomResimGetir(){
        try{
            const photoResponse = await this.axiosNesne.get('/photos/random')
            console.log(photoResponse.data[0].urls.regular)
            return photoResponse.data[0].urls.regular;
        }  
        catch(err){
            console.log(err)
            return 'https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318-1280x720.jpg'; 
        }     
    }
}    

export default function getPhoto(){
    const photo = new  Unsplash_api().randomResimGetir();
    return photo;
}