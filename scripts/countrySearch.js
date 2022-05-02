let country_Search= async (id)=>{
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`);

    let data = await res.json();

    console.log(data.articles);
    appendData(data.articles);
}

country_Search("in");

let appendData = (data)=>{
    let display = document.querySelector("#results");
    display.innerHTML=null;

    data.map(function (ele){
        let box = document.createElement("div");
        box.setAttribute("id","box");

        let set1=document.createElement("div");
        set1.setAttribute("id","set1");

        let image = document.createElement("img");
        image.setAttribute("id","boximg");
        image.src=ele.urlToImage;

        set1.append(image);


        let set2=document.createElement("div");
        set2.setAttribute("id","set2")

        let headlines = document.createElement("h3");
        headlines.textContent=ele.title;

        let description = document.createElement("p");
        description.textContent=ele.description;

        set2.append(headlines,description);

        box.append(set1,set2);

        box.addEventListener("click",function(){
            localStorage.setItem("news",JSON.stringify(ele));
            window.location.href="news.html";
        });

        display.append(box);
    });
}
