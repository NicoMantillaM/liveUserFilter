import { getAllUsers } from "./module/apps.js";
import { users } from "./components/gallery.js";

let filter = document.querySelector("#filter");
let main_users = document.querySelector("#main_users");

addEventListener("DOMContentLoaded", async ()=> {
    // console.log("filterUser");
    let info = await getAllUsers();
    main_users.innerHTML = await users(info); 

    filter.addEventListener("input", async e => {
        
        const filterUser = e.target.value.toLowerCase().trim(); 
        
        const filterUserComparation = info.filter(user => {
            return user.name_full.toLowerCase().includes(filterUser) || user.description.toLowerCase().includes(filterUser);
        });
        
        main_users.innerHTML = await users(filterUserComparation); 
    });
})


