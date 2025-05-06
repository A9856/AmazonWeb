export default function ImgValidator(e) {
    let { files } = e.target
    if (files.length === 0)
        return "Pic Field is mendatory"
    else if (files.length === 1) {
        let file = files[0]
        if (file.size > 1048576)
            return "Pic Size is Too High. Please Upload a file upto 1mb"
        else if (file.type === "image/jpeg" || file.type === "image/webp" || file.type === "image/png" || file.type === "image/jpg" || file.type === "image/gif")
            return ""
        else
            return "Invalid Pic.Please Upload .png, .jpg, .jpeg, .webp, .gif format"
    }
    else {
        var errorMessage = []
        Array.from(e.target.files).forEach((file, index) => {
            if (file.size > 1048576)
                errorMessage.push(`Pic ${index + 1} Size is Too High. Please Upload a file upto 1mb`)
            else if (file.type === "image/jpeg" || file.type === "image/webp" || file.type === "image/png" || file.type === "image/jpg" || file.type === "image/gif");

            else
                errorMessage.push(`Invalid Pic ${index + 1}.Please Upload .png, .jpg, .jpeg, .webp, .gif format`)
        })
        
        return  errorMessage.length===0?"":errorMessage.toString()
    }
}


