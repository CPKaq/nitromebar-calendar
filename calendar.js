var today = new Date();
var startDate = new Date(2020, 10, 30); //2020年11月30日

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