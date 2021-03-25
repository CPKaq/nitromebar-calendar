var today = new Date();
var startDate = new Date(2020, 10, 30); //2020年11月30日

var submitDate = [
    {date: new Date(2020, 11,  7), bgColor: "#F2F2F2", fontColor: "#999999"},
    {date: new Date(2020, 11, 18), bgColor: "#9121AF", fontColor: "#F64403"},
    {date: new Date(2020, 11, 22), bgColor: "#0B2174", fontColor: "#C5BCB5"},
    {date: new Date(2020, 11, 31), bgColor: "#BBDBDA", fontColor: "#D27DB8"},
    {date: new Date(2021,  0,  9), bgColor: "#FFFFFF", fontColor: "#000000"},
    {date: new Date(2021,  0, 25), bgColor: "#F2F2F2", fontColor: "#999999"},
    {date: new Date(2021,  1, 24), bgColor: "#FDFEF9", fontColor: "#25497D"},
    {date: new Date(2021,  1, 25), bgColor: "#94C7C0", fontColor: "#3391C7"},
    {date: new Date(2333, 11, 31), bgColor: "#C8B99A", fontColor: "#323431"},
]

var outBox = document.getElementById("data");

var d = startDate;
var index = 0;
while(d<=today)
{
    var para = document.createElement("div");
    var node = document.createTextNode(d.getDate());
    para.className = "daybox";
    if(d>submitDate[index].date)
    {
        index++;
    }
    para.style = "background: " + submitDate[index].bgColor + "; color: " + submitDate[index].fontColor;
    para.appendChild(node);
    outBox.appendChild(para);
    d.setDate(d.getDate()+1);
}