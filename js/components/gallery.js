export const users = async (info) => {
    let plantilla = "";

    for (let i = 0; i < info.length; i++) {
        plantilla += `
        <div class="users"> 
                <img src="${info[i].avatar}" alt="">
                    <div class="name">
                        <h5>${info[i].name_full}</h5>
                        <span>${info[i].description}</span>
                    </div>
            </div>
            <hr> 
        `;
    }
    return plantilla;
};