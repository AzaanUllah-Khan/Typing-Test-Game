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
        x: 150,
        y: 320,
        size: 60,
        font: customFont 
    })
    firstPg.drawText(wpm, {
        x: 245,
        y: 221,
        size: 24,
    })
    firstPg.drawText(acc, {
        x: 580,
        y: 221,
        size: 24,
    })
    const uri = await PDFDoc.saveAsBase64({ dataUri: true })
    document.getElementById("cert").src = uri
    document.getElementById("c").addEventListener("click",()=>{
        const link = document.createElement("a");
        link.href = uri;
        link.download = localStorage.getItem("name")+"-TyPost";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
}
document.getElementById("typing").addEventListener("input",()=>{
    if (document.getElementById("typing").value.length == localStorage.getItem("length")) {
        getPdf(localStorage.getItem("name"),`${localStorage.getItem("type")} WPM`,`${Math.round(localStorage.getItem("accuracy"))}%`)
    }
})
