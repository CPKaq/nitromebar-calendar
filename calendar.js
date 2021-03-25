const today = new Date();
const startDate = new Date(2020, 10, 30); //2020年11月30日

var outBox = document.getElementById("data");
var monthBox = document.getElementById("month");
var d = new Date();

d.setTime(startDate.getTime());
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


d.setTime(startDate.getTime());
while(d<=today)
{
    var para = document.createElement("div");
    var node = document.createTextNode("");
    para.className = "monthbox";
    if(d.getDate()<=7)
    {
        node = document.createTextNode((d.getMonth()+1)+"月");
    }
    para.appendChild(node);
    monthBox.appendChild(para);

    d.setDate(d.getDate()+7);
}