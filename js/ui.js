const reset_buttons = [
    "#reset-btn",
    "#tryagain-btn"
]

reset_buttons.forEach((btn) => {
    document.querySelector(btn).onclick = () => {
        map = []
        for (i=0;i<map_size;i++) {
            map.push([])
            for (j=0;j<map_size;j++) {
                map[i].push(0)
            }
        }

        objects = filter_object(objects, (object) => !object[0].includes("placed"))
        score = 0
        update_score()

        document.querySelector("#end").style.display = "none"
    }
})