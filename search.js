    // HTMLで作成済みのproperty-search（条件項目）のdivisionを呼び出す
const areaSelect = document.getElementById("area");
const condoNameInput = document.getElementById("condo-name");
const bedroomsSelect = document.getElementById("bedrooms");
const sizeMinInput = document.getElementById("size-min");
const sizeMaxInput = document.getElementById("size-max");
const rentMinInput = document.getElementById("rent-min");
const rentMaxInput = document.getElementById("rent-max");
const searchButton = document.getElementById("search-button");

// HTMLで作成済みのproperty-list（物件リスト一覧）のdivisionを呼び出す
const propertyList = document.getElementById("property-list");

// APIのURLを定義
const API_URL = "https://script.google.com/macros/s/AKfycbzMOpGMsl4i_s_KJ-HPnHKjPa-Fo8Z_OioQf0tnGAi85_lwCF92gsNEgQZyvqbYS0yx2w/exec";

// 該当する物件リストを画面に表出する関数を作成
function renderProperties(properties){
    // 現在表示されている内容を刷新 
    propertyList.innerHTML = "";

    // 物件カードを設定し、物件リストに追加
    for (const property of properties){
        // 物件カード
        const cardElement = document.createElement("div");
        cardElement.className = "property-card";
        
        // エリア
        const areaElement = document.createElement("p");
        areaElement.className = "property-area";
        areaElement.textContent = property.area;
        cardElement.appendChild(areaElement);

        // 画像
        const imageElement = document.createElement("img");
        imageElement.className = "property-image";
        imageElement.src = property.image;
        cardElement.appendChild(imageElement);

        // コンドミニアム名
        const titleElement = document.createElement("h3");
        titleElement.className = "property-title";
        titleElement.textContent = property.name;
        cardElement.appendChild(titleElement);
        
    /*  // 家賃
        const rentElement = document.createElement("p");
        rentElement.className = "property-rent";
        rentElement.textContent = property.rent;
        cardElement.appendChild(rentElement);
    */

        // 説明
        const descriptionElement = document.createElement("p");
        descriptionElement.className = "property-description";
        descriptionElement.textContent = property.description;
        cardElement.appendChild(descriptionElement);

        // 詳細リンク
        const linkElement = document.createElement("a");
        linkElement.className = "property-link";
        linkElement.href = property.details;
        linkElement.textContent = "View Details";
        cardElement.appendChild(linkElement);

        // 物件リストに物件カードを追加
        propertyList.appendChild(cardElement);
    }
}

// GASから物件データを取得
fetch(API_URL)
    
// 取得したデータ（JSON）をJavaScriptオブジェクトに変換
    .then(response => response.json())

    // HTMLに表示設定
    .then(properties => {

        // 最初は全件を表示
        renderProperties(properties);

        // Searchボタン押下時、条件入力を反映
        searchButton.addEventListener("click", () => {
            
            // 条件に適合するか判定
            const filteredProperties = properties.filter(property =>{

                // エリア
                if (
                    areaSelect.value !== ""
                    && property.area !== areaSelect.value
                ){
                    return false;
                }

                // コンドミニアム名
                if (
                    condoNameInput.value !== "" 
                    && !property.name.toLowerCase().includes(condoNameInput.value.toLowerCase())
                ){
                    return false;
                }

                // ベッドルーム数
                if (
                    bedroomsSelect.value != "" 
                    && property.bedrooms !== bedroomsSelect.value
                ){
                    return false;
                }

                // サイズ：下限
                if (
                    sizeMinInput.value !== ""
                    && Number(property.size) < Number(sizeMinInput.value)
                ){
                    return false;
                }

                // サイズ：上限
                if (
                    sizeMaxInput.value !== ""
                    && Number(property.size) > Number(sizeMaxInput.value)
                ){
                    return false;
                }

                //　家賃・下限
                if (
                    rentMinInput.value !== ""
                    && property.rent !=="N/A"
                    && Number(property.rent) < Number(rentMinInput.value)
                ){
                    return false;
                }
                
                //　家賃・上限
                if (
                    rentMaxInput.value !== ""
                    && property.rent !=="N/A"
                    && Number(property.rent) > Number(rentMaxInput.value)
                ){
                    return false;
                }

                // すべての条件に適合した場合のみTrueを返す
                return true;
            });

            // 条件に適合した物件リストを表示設定
            renderProperties(filteredProperties);
        
        });
    });


