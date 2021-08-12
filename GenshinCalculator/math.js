// 总函数
function main()
{
    getpersondengji();
    getinput();
    gettianfu();
    getjingtong();
    // shengyiwu();
    panduanshifoudazengfufanying();
    jisuanjingtongjiacheng();
    yuansushanghaijiacheng_yuansushanghaibei();
    fanyingjiacheng_jingtong();
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
    persondengji = document.getElementById("Persongrade").value;
    persondengji = parseFloat(persondengji);
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


function panduanshifoudazengfufanying()
{
    var zengfufanyingtext = document.getElementById("shifoudazengfufanying");
    var zengfufanyingxuanze = zengfufanyingtext.selectedIndex;
    var zengfufanyingzuobiao = zengfufanyingtext.options[zengfufanyingxuanze].value;
    if (zengfufanyingzuobiao == 0)
        zengfufanying = 1;
    else
        zengfufanying = 0;
}

function getjingtong()
{
    jingtong = document.getElementById("Personjingtong").value;
    jingtong = parseFloat(jingtong);
}



function jisuanjingtongjiacheng()
{
    zengfujiacheng = 25 * jingtong / ((jingtong + 1400) * 9);
    jubianjiacheng = 16 * jingtong / (jingtong + 2000);
    jiejingjiacheng = 40 * jingtong / ((jingtong + 1400) * 9);
}

function yuansushanghaijiacheng_yuansushanghaibei()
{
    var beitext = document.getElementById("yuansushanghaibei");
    var beixuanze = beitext.selectedIndex;
    beizuobiao = beitext.options[beixuanze].value;
    yuansushanghaijiacheng = 1;
    wulishanghaijiacheng = 1;
    if (beizuobiao == 0)
        yuansushanghaijiacheng = 1;
    else if (beizuobiao == 1)
        yuansushanghaijiacheng = 1.466;
    else if (beizuobiao == 2)
        yuansushanghaijiacheng = 1;
    else if (beizuobiao == 3)
        yuansushanghaijiacheng = 1;
    else if (beizuobiao == 4)
        yuansushanghaijiacheng = 1;
    else if (beizuobiao == 5)
        yuansushanghaijiacheng = 1;
    else if (beizuobiao == 6)
        wulishanghaijiacheng = 1.583;
}

function fanyingjiacheng_jingtong()
{
    if (zengfufanying == 1)
        zengfufanyingjiacheng = 1.5 + zengfujiacheng;
    if (zengfufanying == 0)
        zengfufanyingjiacheng = 1;
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
    kangxingxishu = 0;
    if (dun == 1)
        guaiwukangxing = guaiwukangxing - 0.2;
    if (guaiwukangxing < 0)
        kangxingxishu = 1 - guaiwukangxing / 2;
    else if (guaiwukangxing >= 0.75 )
        kangxingxishu = 1 / (1 + 4 * guaiwukangxing);
    else if (guaiwukangxing >= 0 && guaiwukangxing < 0.75)
        kangxingxishu = 1 - guaiwukangxing;
}




// 计算各种伤害
function Damage()
{
    adamage_feibaoji = new Array();
    adamage_baoji = new Array();
    if (beizuobiao == 1)
        wulishanghaijiacheng = yuansushanghaijiacheng;
    
    for (var i = 0; i < 6; i++)
    {
        adamage_feibaoji[i] = gongjili * wulishanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * abeilv[i];
        adamage_baoji[i] = gongjili * wulishanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * abeilv[i] * (100 + baoshang) / 100;
        adamage_feibaoji[i] = Math.ceil(adamage_feibaoji[i]);
        adamage_baoji[i] = Math.ceil(adamage_baoji[i]);
    }



    edamage_feibaoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * ebeilv;
    edamage_baoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * ebeilv * (100 + baoshang) / 100;

    qdamage = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * (baojilv * (100 + baoshang) / 100 + (1 - baojilv) * 1);
    qdamagetotal = qdamage * qbeilv1 * 19 + qdamage * qbeilv2 * 1;

    q1_feibaoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * qbeilv1;
    q1_baoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * qbeilv1 * (100 + baoshang) / 100;
    q20_feibaoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * qbeilv2;
    q20_baoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * (1 - fangyuxishu) * qbeilv2 * (100 + baoshang) / 100;

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

