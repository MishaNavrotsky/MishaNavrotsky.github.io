window.onload = () => {
    const dataInput = document.getElementById("dataInput"),
        dataOutput = document.getElementById("dataOutput"),
        popup = document.getElementById("popup");

    dataOutput.addEventListener("click",()=>{
        navigator.clipboard.writeText(dataOutput.value).then(()=>{
            popup.style.display = "block";
            setTimeout(()=>{
                popup.style.display = "none";
            }, 1000)
        })
    })

    

}