import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { deleteIcon }  from '@fortawesome/free-solid-svg-icons'

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
                item.classList.add("absolute","w-40", "h-10","bg-slate-200/70","top-1/3","left-1/2" , "z-30","translate-x-[-50%]","hidden")
            });
        // Hier werden drei Buttons erzeugt
        add_toolbox_items()
}

const add_toolbox_items = ()=> {
    let append_to_toolbox
    // let append_edit_icon

    const get_toolbox = document.querySelectorAll('div[name="edit-mode-tool-box"]')

    // hier werden die Delete und Bearbeiten buttons erzeugt
    get_toolbox.forEach(item => {

        // Bearbeiten Button
        const edit_button = document.createElement("button")
        edit_button.setAttribute("name", `rp-edit-button`)
        edit_button.addEventListener("click",()=>clickTester())

        // const edit_button_icon = document.createElement("FontAwesomeIcon")
        append_to_toolbox = item.appendChild(edit_button)

        // Bearbeiten Löschen
        const delete_button = document.createElement("button")
        delete_button.setAttribute("name", `rp-delete-button`)
        delete_button.addEventListener("click",()=>clickTester())
        append_to_toolbox = item.appendChild(delete_button)
    });
    
    // const get_all_edit_buttons = document.querySelectorAll('button[name="rp-edit-button"]')
    // get_all_edit_buttons.forEach(element => {
        // const create_Edit_Button_icon = document.createElement("FontAwesomeIcon")
        // append_edit_icon = element.appendChild(create_Edit_Button_icon)
    // });

    return ;
}

const clickTester =()=>{
    console.log("wurde geklickt");
    return
}