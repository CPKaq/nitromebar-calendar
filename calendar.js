const startDate = new Date(2020, 10, 30); //2020年11月30日
const may10th = new Date(2021, 4, 10); //2021年5月10日
const endDate = new Date(2021, 5, 20); //2021年6月20日
var today = endDate;

var outBox = document.getElementById("data");
var monthBox = document.getElementById("month");
var indexBox = document.getElementById("index");
var d = new Date();
var i = new Number();

d.setTime(startDate.getTime());
i = 0;
while(d<=today)
{
    var para = document.createElement("div");
    var node = document.createTextNode(d.getDate());
    para.className = "daybox";
    if(d>submitDate[i].date)
    {
        i++;
    }
    para.style = "background: " + submitDate[i].bgColor + "; color: " + submitDate[i].fontColor;
    para.appendChild(node);
    if(d-may10th==0)
    {
        para.style = "background-image: linear-gradient(to right, #E8E160 50%, #FFFFFF 50%)";
        para.innerHTML = "<span style=\"color:#96893B\">1</span><span style=\"color:#0F4C85\">0</span>"
        i++;
    }
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

d.setTime(startDate.getTime());
d.setDate(d.getDate()+6);
i = 0;
while(i<submitDate.length-1)
{
    var para = document.createElement("div");
    var node = document.createTextNode("");
    para.className = "indexbox";
    if(d>submitDate[i].date)
    {
        i++;
        if(submitDate[i].index>0)
        {
            var innerPara = document.createElement("span");
            var innerNode = document.createTextNode("●");
            var str = new String();
            innerPara.appendChild(innerNode);
            innerPara.style = "color: "+submitDate[i].bgColor;
            para.appendChild(innerPara);
            str = " " +submitDate[i].index+"　"+submitDate[i].name;
            if(i<submitDate.length-1)
            {
                day = (submitDate[i].date-submitDate[i-1].date)/86400000
                if(day<1)
                {
                    str += "（<1天）";
                }else{
                    str += "（"+ day +"天）";
                }
            }else{
                str += "（"+Math.floor((today-submitDate[i-1].date)/86400000)+"天，进行中）";
            }
            node = document.createTextNode(str);
        }else{
            continue;
        }
    }
    para.appendChild(node);
    indexBox.appendChild(para);

    d.setDate(d.getDate()+7);
}