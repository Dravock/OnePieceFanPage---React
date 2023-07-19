export const add_edit_toolbox = ()=> {

    const getSections = document.querySelectorAll(`#edit-mode-Single-Page section`)
    let count = 0 
    let append_to_section
    
    
    getSections.forEach( singleSection => {

        singleSection.classList.add("relative","sections-editmode")

        // Hier wird die ToolBox erstellt
            const newDiv = document.createElement("div")
                newDiv.setAttribute("name", `edit-mode-tool-box`)
                newDiv.setAttribute("class", `edit-mode-tool-box`)
                append_to_section = singleSection.appendChild(newDiv)

                count ++ ;
                
            });
            // Hier bekommen alle Toolboxen ihr Styling
            const getToolBox = document.querySelectorAll(`.edit-mode-tool-box`)
            
            getToolBox.forEach(item => {
                item.classList.add("absolute","w-40", "h-10","bg-slate-200/70","top-1/3","left-1/2" , "z-30","hover:bg-red-500","translate-x-[-50%]","hidden")
            });
        // Hier werden drei Buttons erzeugt
        add_toolbox_items()
}

const add_toolbox_items = ()=> {
    let append_to_toolbox
    const get_toolbox = document.querySelectorAll('div[name="edit-mode-tool-box"]')

    // <a-tag> wird erzeugt
    get_toolbox.forEach(item => {

        // Bearbeiten Button
        const new_button =document.createElement("a")

        new_button.setAttribute("onClick",`${test()}`)
        new_button.setAttribute("class","#")

        append_to_toolbox = item.appendChild(new_button)
        // Bearbeiten Löschen
        const new_button2 =document.createElement("a")

        new_button.setAttribute("onClick",`${test()}`)
        new_button.setAttribute("class","#")

        append_to_toolbox = item.appendChild(new_button2)
    });


   // append_to_toolbox = get_toolbox.appendChild(new_button)

    return ;
}

const test =()=>{
    let a
    a = "hi-test"
    return a
}