// Ude Import export (MANDATORY)
import navbar  from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

let news = JSON.parse(localStorage.getItem("news"));

let displayNews=(news)=>{

    let detailedNews=document.querySelector("#detailed_news");

    let detailedbox=document.createElement("div");
    detailedbox.setAttribute("id","detailedbox");

    let image=document.createElement("img");
    image.setAttribute("id","newsImg");
    image.src=news.urlToImage;

    let title=document.createElement("h3");
    title.textContent=news.titlel

    let des=document.createElement("p");
    des.textContent=news.description;

    let content=document.createElement("p");
    content.textContent=news.content;

    detailedbox.append(image,title,des,content);
    detailedNews.append(detailedbox);
}

displayNews(news);