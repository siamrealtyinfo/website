// console.log("Hello JavaScript");
/*
const property={
    name: "Belle Grand Rama 9",
    rent: "25,000 THB",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=480x1024:format=jpg/path/s805fd7c389cf4759/image/ib88d90917d813487/version/1772163956/image.jpg"
};
*/
const properties=[
    {
        name: "Belle Grand Rama 9",
        rent: "25,000 THB",
        image: ""https://image.jimcdn.com/app/cms/image/transf/dimension=480x1024:format=jpg/path/s805fd7c389cf4759/image/ib88d90917d813487/version/1772163956/image.jpg";"
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
    card.classsName="property-card";
    const title=document.createElement("h2");
    title.textContent=property.name;
    const rent=document.createElement("p");
    rent.textContent=property.rent;
    const image=document.createElement("img");
    image.src=property.image;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(rent);

    propertylist.appendChild(card);
}

/*
const propertylist=document.getElementById("property-list"); 
propertylist.innerHTML="<h2>Hello Property!</h2>"
*/


*/
