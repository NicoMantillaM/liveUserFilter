export const users = async (filterUserComparation) => {
    // console.log(filterUserComparation);
    let plantilla = "";

    filterUserComparation.forEach(element => {
        
        plantilla += /*html*/`
        <div class="users"> 
                <img src="${element.avatar}" alt="">
                    <div class="name">
                        <h5>${element.name_full}</h5>
                        <span>${element.description}</span>
                    </div>
            </div>
            <hr> 
        `;
    })
    return plantilla;
};
