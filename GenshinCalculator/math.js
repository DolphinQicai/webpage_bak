// 总函数
function main()
{
    getpersondengji();
    getinput();
    gettianfu();
    getzhonglidun();
    getkangxingxuanze();
    getkangxingxishu();
    getfangyuxuanze();
    getfangyuxishu();
    Damage();
    print();
}


function getpersondengji()
{
    var dengjitext = document.getElementById("Persongrade");
    var persondengjixuanze = dengjitext.selectedIndex;
    var value_ = dengjitext.options[persondengjixuanze].value;
    persondengji = 0;
    if (value_ == 0)
        persondengji = 70;
    else if (value_ == 1)
        persondengji = 80;
    else if (value_ == 2)
        persondengji = 90;
}


// 从框里读取数据
function getinput()
{
    gongjili = document.getElementById('gongjili').value;
    baojilv = document.getElementById('baojilv').value;
    baoshang = document.getElementById('baoshang').value;
    gongjili = parseFloat(gongjili);
    baojilv = parseFloat(baojilv);
    baoshang = parseFloat(baoshang);

    baojilv = baojilv / 100;
}

// 平a倍率
var pinga = [[0.457, 0.495, 0.532, 0.585, 0.622, 0.665, 0.723, 0.782, 0.840, 0.904, 0.968],
            [0.487, 0.527, 0.566, 0.623, 0.662, 0.708, 0.770, 0.832, 0.894, 0.962, 1.030],
            [0.626, 0.677, 0.728, 0.801, 0.852, 0.910, 0.990, 1.070, 1.151, 1.238, 1.325],
            [0.227, 0.245, 0.262, 0.290, 0.308, 0.329, 0.358, 0.387, 0.416, 0.448, 0.479],
            [0.782, 0.846, 0.909, 1.000, 1.064, 1.136, 1.236, 1.336, 1.436, 1.546, 1.655],
            [0.551, 0.596, 0.641, 0.705, 0.750, 0.801, 0.872, 0.942, 1.013, 1.090, 1.167]]

// 大招倍率数组
var q1 = new Array()
q1[0] = 1.12
q1[1] = 1.21
q1[2] = 1.29
q1[3] = 1.40
q1[4] = 1.49
q1[5] = 1.57
q1[6] = 1.68
q1[7] = 1.80
q1[8] = 1.91
q1[9] = 2.02
q1[10] = 2.13
q1[11] = 2.25
q1[12] = 2.39

var q2 = new Array()
q2[0] = 1.68
q2[1] = 1.81
q2[2] = 1.94
q2[3] = 2.11
q2[4] = 2.23
q2[5] = 2.36
q2[6] = 2.53
q2[7] = 2.70
q2[8] = 2.86
q2[9] = 3.03
q2[10] = 3.20
q2[11] = 3.37
q2[12] = 3.58


// e技能倍率数组
var e1 = new Array()
e1[0] = 2.39
e1[1] = 2.57
e1[2] = 2.75
e1[3] = 2.99
e1[4] = 3.17
e1[5] = 3.35
e1[6] = 3.59
e1[7] = 3.83
e1[8] = 4.07
e1[9] = 4.31
e1[10] = 4.54
e1[11] = 4.78
e1[12] = 5.08




// 从天赋下拉选择栏里获取所选值，从数组里读取倍率值
function gettianfu()
{
    var adocument = document.getElementById("pingatianfudengji");
    var edocument = document.getElementById("etianfudengji");
    var qdocument = document.getElementById("qtianfudengji");
    var axuanze = adocument.selectedIndex;
    var exuanze = edocument.selectedIndex;
    var qxuanze = qdocument.selectedIndex;
    var azuobiao = adocument.options[axuanze].value;
    var ezuobiao = edocument.options[exuanze].value;
    var q1zuobiao = qdocument.options[qxuanze].value;
    var q2zuobiao = qdocument.options[qxuanze].value;

    abeilv = new Array();
    for (var i = 0; i < 6; i++)
        abeilv[i] = pinga[i][azuobiao];

    ebeilv = e1[ezuobiao];
    qbeilv1 = q1[q1zuobiao];
    qbeilv2 = q2[q2zuobiao];

    atianfu = adocument.options[axuanze].value;
    etianfu = edocument.options[exuanze].value;
    qtianfu = qdocument.options[qxuanze].value;

    atianfu = parseInt(atianfu);
    etianfu = parseInt(etianfu);
    qtianfu = parseInt(qtianfu);

    atianfu += 1;
    etianfu += 1;
    qtianfu += 1;

}


function getzhonglidun()
{
    var duntext = document.getElementById("zhonglikaidun");
    var dunxuanze = duntext.selectedIndex;
    var dunzuobiao = duntext.options[dunxuanze].value;
    dun = 0;
    if (dunzuobiao == 0)
        dun = 1;
    else if (dunzuobiao == 1)
        dun = 0;
}

function getfangyuxuanze()
{
    var fangyutext = document.getElementById("guaiwufangyu");
    var fangyuxuanze = fangyutext.selectedIndex;
    var fangyuzuobiao = fangyutext.options[fangyuxuanze].value;
    
    guaiwudengji = 0
    if (fangyuzuobiao == 0)
        guaiwudengji = 0;
    else if (fangyuzuobiao == 1)
        guaiwudengji = 95;
    else if (fangyuzuobiao == 2)
        guaiwudengji = 98;
    else if (fangyuzuobiao == 3)
        guaiwudengji = 100;
    else if (fangyuzuobiao == 4)
        guaiwudengji = 91;
    else if (fangyuzuobiao == 5)
        guaiwudengji = 88;
    
}


function getfangyuxishu()
{
    if (guaiwudengji == 0)
        fangyuxishu = 0;
    else
        fangyuxishu = (guaiwudengji + 100) / (guaiwudengji + persondengji + 200);
}


function getkangxingxuanze()
{
    var kangxingtext = document.getElementById("guaiwukangxing");
    var kangxingxuanze = kangxingtext.selectedIndex;
    var kangxingzuobiao = kangxingtext.options[kangxingxuanze].value;

    guaiwukangxing = 0;
    if (kangxingzuobiao == 1)
        guaiwukangxing = 0.1;
    else if (kangxingzuobiao == 2)
        guaiwukangxing = 0.2;
    else if (kangxingzuobiao == 3)
        guaiwukangxing = 0.3;
    else if (kangxingzuobiao == 4)
        guaiwukangxing = 0.4;
    else if (kangxingzuobiao == 5)
        guaiwukangxing = 0.5;
    else if (kangxingzuobiao == 6)
        guaiwukangxing = 0.7;
    else if (kangxingzuobiao == 7)
        guaiwukangxing = -0.2;

}


function getkangxingxishu()
{
    kangxingxishu = guaiwukangxing;
    if (dun == 1)
        kangxingxishu = kangxingxishu - 0.2;
    if (kangxingxishu < 0)
        kangxingxishu = kangxingxishu / 2;
}




// 计算各种伤害
function Damage()
{
    adamage_feibaoji = new Array();
    adamage_baoji = new Array();
    for (var i = 0; i < 6; i++)
    {
        adamage_feibaoji[i] = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * abeilv[i];
        adamage_baoji[i] = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * abeilv[i] * (100 + baoshang) / 100;
        adamage_feibaoji[i] = Math.ceil(adamage_feibaoji[i]);
        adamage_baoji[i] = Math.ceil(adamage_baoji[i]);
    }



    edamage_feibaoji = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * ebeilv;
    edamage_baoji = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * ebeilv * (100 + baoshang) / 100;

    qdamage = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * (baojilv * (100 + baoshang) / 100 + (1 - baojilv) * 1);
    qdamagetotal = qdamage * qbeilv1 * 19 + qdamage * qbeilv2 * 1;

    q1_feibaoji = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * qbeilv1;
    q1_baoji = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * qbeilv1 * (100 + baoshang) / 100;
    q20_feibaoji = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * qbeilv2;
    q20_baoji = gongjili * 1.466 * (1 - kangxingxishu) * (1 - fangyuxishu) * qbeilv2 * (100 + baoshang) / 100;

    if (qbeilv1 >= 2.12)
        qdamagetotal = qdamagetotal * 1.4;


    edamage_feibaoji = Math.ceil(edamage_feibaoji);
    edamage_baoji = Math.ceil(edamage_baoji);
    qdamagetotal = Math.ceil(qdamagetotal);
    q1_feibaoji = Math.ceil(q1_feibaoji);
    q1_baoji = Math.ceil(q1_baoji);
    q20_feibaoji = Math.ceil(q20_feibaoji);
    q20_baoji = Math.ceil(q20_baoji);

    
}


// 输出伤害和相关说明
function print()
{
    baojilv = baojilv * 100;
    baojilv = baojilv.toFixed(1);
    baoshang = baoshang.toFixed(1);
    document.getElementById("zhushuxing").innerHTML = 
        "基础数值：" + "<br>" + 
        "神里绫华" + "<br>" + 
        "等级：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + persondengji + "<br>" + 
        "攻击力：" + gongjili + "<br>" + 
        "暴击率：" + baojilv + "%" + "<br>" + 
        "暴伤：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + baoshang + "%" + "<br>" + 
        "天赋等级：" + atianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + etianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + qtianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>";
    document.getElementById("pinga").innerHTML = 
        "平a：" + "<br>" + 
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "非暴击" + 
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "暴击" + "<br>";
    
    for (var i = 1; i < 7; i++)
    {
        if (i == 4)
        {
            document.getElementById("pinga").innerHTML += 
                "第" + i + "段：" + adamage_feibaoji[i-1] + " * 3" + 
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&nbsp;&nbsp;" + 
                adamage_baoji[i-1] + " * 3" + "<br>";
        }
        else if (i == 6)
        {
            document.getElementById("pinga").innerHTML += 
                "重击：&nbsp;&nbsp;&nbsp;" + adamage_feibaoji[i-1] + " * 3" + 
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;" + 
                adamage_baoji[i-1] + " * 3" + "<br>";
        }
        else
        {
            document.getElementById("pinga").innerHTML += 
                "第" + i + "段：" + adamage_feibaoji[i-1] + 
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                adamage_baoji[i-1] + "<br>";
        }
    }
        
    document.getElementById("ejineng").innerHTML = 
        "E技能：" + "<br>" + 
        "非暴击伤害：" + edamage_feibaoji + "<br>" + 
        "暴击伤害：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + edamage_baoji + "<br>";
    document.getElementById("qjineng").innerHTML = 
        "Q技能：" + "<br>" + 
        "一跳非暴击：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + q1_feibaoji + "<br>" + 
        "一跳暴击：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + q1_baoji + "<br>" + 
        "最终跳非暴击：" + q20_feibaoji + "<br>" + 
        "最终跳暴击：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + q20_baoji + "<br>" + 
        "<br>" + 
        "大招总伤害期望：" + qdamagetotal;
}
