// 0. HTMLで作成済みのproperty-list（物件リスト一覧）のdivisionを呼び出す
const propertyList = document.getElementById("property-list");

// 1．APIのURLを定義
const API_URL = "https://script.google.com/macros/s/AKfycbzMOpGMsl4i_s_KJ-HPnHKjPa-Fo8Z_OioQf0tnGAi85_lwCF92gsNEgQZyvqbYS0yx2w/exec";

// 2．GASから物件データを取得
fetch(API_URL)
    // 3．取得したデータ（JSON）をJavaScriptオブジェクトに変換
    .then(response => response.json())
    // 4．HTMLに表示設定
    .then(
        properties => {
        //    console.log(properties);
        //    propertylist.innerHTML = properties[0].name;
            for (const property of properties){
        //      propertylist.innerHTML += property.name + "<br>"; 
                const cardElement = document.createElement("div");
                cardElement.className = "property-card";

                const areaElement = document.createElement("p");
                areaElement.className = "property-area";
                areaElement.textContent = property.area;
                cardElement.appendChild(areaElement);

                const imageElement = document.createElement("img");
                imageElement.className = "property-image";
                imageElement.src = property.image;
                cardElement.appendChild(imageElement);

                const titleElement = document.createElement("h3");
                titleElement.className = "property-title";
                titleElement.textContent = property.name;
                cardElement.appendChild(titleElement);
                
                /*
                const rentElement = document.createElement("p");
                rentElement.textContent = property.rent + " THB";
                cardElement.appendChild(rentElement);
                */

                const descriptionElement = document.createElement("p");
                descriptionElement.className = "property-description";
                descriptionElement.textContent = property.description;
                cardElement.appendChild(descriptionElement);

                const linkElement = document.createElement("a");
                linkElement.className = "property-link";
                linkElement.href = property.details;
                linkElement.textContent = "View Details";
                cardElement.appendChild(linkElement);

                propertyList.appendChild(cardElement);

            };
        }
    );



/*
const propertyList = document.getElementById("property-list");
 propertylist.innerHTML="<h2>Hello Property!</h2>";

const properties=[
    {
        name: "Belle Grand Rama 9",
        rent: "25,000 THB",
        image: "https://image.jimcdn.com/app/cms/image/transf/dimension=480x1024:format=jpg/path/s805fd7c389cf4759/image/ib88d90917d813487/version/1772163956/image.jpg"
    },
    {
        name: "Life Asoke Rama 9",
        rent: "22,000 THB",
        image: "https://image.jimcdn.com/app/cms/image/transf/dimension=480x1024:format=jpg/path/s805fd7c389cf4759/image/i6a0d866da5369710/version/1772163929/image.jpg"
    },
    {
        name: "One 9 Five",
        rent: "30,000 THB",
        image: "https://image.jimcdn.com/app/cms/image/transf/dimension=480x1024:format=jpg/path/s805fd7c389cf4759/image/ib1e057d78df915cb/version/1772167091/image.jpg"
    }
];

for (const property of properties){
    const card=document.createElement("div");
    card.className="property-card";
    const title=document.createElement("h2");
    title.textContent=property.name;
    const rent=document.createElement("p");
    rent.textContent=property.rent; 
    const image=document.createElement("img");
    image.src=property.image;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(rent);

    propertylist.appendChild(card);
};
*/
