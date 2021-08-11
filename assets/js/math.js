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



function gettianfu()
{
    var edocument = document.getElementById("etianfudengji");
    var qdocument = document.getElementById("qtianfudengji");
    var exuanze = edocument.selectedIndex;
    var qxuanze = qdocument.selectedIndex;
    var ezuobiao = edocument.options[exuanze].value;
    var q1zuobiao = qdocument.options[qxuanze].value;
    var q2zuobiao = qdocument.options[qxuanze].value;

    ebeilv = e1[ezuobiao];
    qbeilv1 = q1[q1zuobiao];
    qbeilv2 = q2[q2zuobiao];
}

function Damage()
{
    var edamage_feibaoji = gongjili * 1.466 * ebeilv;
    var edamage_baoji = gongjili * 1.466 * ebeilv * (100 + baoshang) / 100;

    var qdamage = gongjili * 1.466 * (baojilv * (100 + baoshang) / 100 + (1 - baojilv) * 1);
    var qdamagetotal = qdamage * qbeilv1 * 19 + qdamage * qbeilv2 * 1;

    var q1_feibaoji = gongjili * 1.466 * qbeilv1;
    var q1_baoji = gongjili * 1.466 * qbeilv1 * (100 + baoshang) / 100;
    var q20_feibaoji = gongjili * 1.466 * qbeilv2;
    var q20_baoji = gongjili * 1.466 * qbeilv2 * (100 + baoshang) / 100;

    if (qbeilv1 >= 2.12)
        qdamagetotal = qdamagetotal * 1.4;


    edamage_feibaoji = Math.ceil(edamage_feibaoji);
    edamage_baoji = Math.ceil(edamage_baoji);
    qdamagetotal = Math.ceil(qdamagetotal);
    q1_feibaoji = Math.ceil(q1_feibaoji);
    q1_baoji = Math.ceil(q1_baoji);
    q20_feibaoji = Math.ceil(q20_feibaoji);
    q20_baoji = Math.ceil(q20_baoji);

    document.getElementById("shanghai").innerHTML = 
        "攻击力：" + gongjili + "<br>" + 
        "暴击率：" + baojilv * 100 + "%" + "<br>" + 
        "暴伤：" + baoshang + "%" + "<br>" + 
        "e非暴击伤害：" + edamage_feibaoji + "<br>" + 
        "e暴击伤害：" + edamage_baoji + "<br>" + 
        "q一跳非暴击" + q1_feibaoji + "<br>" + 
        "q一跳暴击" + q1_baoji + "<br>" + 
        "q最终跳非暴击" + q20_feibaoji + "<br>" + 
        "q最终跳暴击" + q20_baoji + "<br>" + 
        "大招总伤害期望：" + qdamagetotal;
}


 
