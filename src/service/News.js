import {baseUrl,country,category,apiKey} from '../config/rest_config';

export async function getNews(country){
    try{
        let news = await fetch(`${baseUrl}country=${country}&category=${category}&apiKey=${apiKey}`);

        let res = await news.json();
        
        news=null;
        
        return res.articles
    }
    catch(error)
    {
        throw(error)
    }
}
