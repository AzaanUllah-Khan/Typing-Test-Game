const getPdf = async (name, wpm, acc) => {
    const { PDFDocument, rgb, StandardFonts } = PDFLib
    const exBytes = await fetch("./Certificate.pdf").then((res) => {
        return res.arrayBuffer()
    })
    const PDFDoc = await PDFDocument.load(exBytes)
    const customFont = await PDFDoc.embedFont(StandardFonts.Courier)
    const pages = PDFDoc.getPages()
    const firstPg = pages[0]
    firstPg.drawText(name, {
        x: 260,
        y: 283,
        size: 50,
        color: rgb(1, 1, 1),
        font: customFont 
    })
    firstPg.drawText(wpm, {
        x: 404,
        y: 233,
        size: 22,
        color: rgb(1, 1, 1),
    })
    firstPg.drawText(acc, {
        x: 554,
        y: 232,
        size: 22,
        color: rgb(1, 1, 1),
    })
    const uri = await PDFDoc.saveAsBase64({ dataUri: true })
    document.getElementById("cert").src = uri
}
document.getElementById("typing").addEventListener("input",()=>{
    if (document.getElementById("typing").value.length == localStorage.getItem("length")) {
        getPdf(localStorage.getItem("name"),localStorage.getItem("type"),`${localStorage.getItem("accuracy").split(".")[0]}%`)
    }
})
