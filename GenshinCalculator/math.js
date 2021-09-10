// 总函数
function main()
{
    getpersondengji();
    getinput();
    gettianfu();
    // getjingtong();

    weaponjiacheng();                  //武器加成

    shengyiwuxuanze();                  //选择圣遗物套装

    shengyiwujiacheng();               //圣遗物加成（非元素伤害）

    panduanshifoudazengfufanying();      //判断是否打增幅反应

    jisuanjingtongjiacheng();         //精通值计算函数y=f(x)

    yuansushanghaijiacheng_yuansushanghaibei(); //圣遗物杯的元素伤害加成

    yuansushanghaijiacheng_weapon();     //武器的元素伤害加成

    yuansujiacheng_shengyiwu();          //圣遗物套装元素伤害加成

    yuansujiacheng();                    //元素增伤乘区

    bannite_zengshang();                 //班尼特增伤

    shatang_zengshang();                 //砂糖增伤

    fanyingjiacheng_jingtong();         //精通、增幅反应乘区

    getzhonglidun();
    getkangxingxuanze();
    getkangxingxishu();                  //元素抗性乘区

    getfangyuxuanze();
    getfangyuxishu();                    //怪物防御乘区（等级压制）


    dulichengqu();


    Damage();

    
    if (print_ == 1)
    {
        print();
    }
    else
    {
        print_ = 1;
    }
    // alert(qbeilv[2]);
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


    jingtong = document.getElementById("Personjingtong").value;
    jingtong = parseFloat(jingtong);

    chongneng = document.getElementById("Personchongneng").value;
    chongneng = parseFloat(chongneng);


    if (person == 1)
    {
        yuanlicengshu = document.getElementById("yuanlicengshu").value;
        yuanlicengshu = parseFloat(yuanlicengshu);

        leishenbaizhi = document.getElementById("leishenbaizhi").value;
        leishenbaizhi = parseFloat(leishenbaizhi);

        var leishenkaiedocument = document.getElementById("leishenkaie");
        var leishenkaiexuanze = leishenkaiedocument.selectedIndex;
        leishenkaiezuobiao = leishenkaiedocument.options[leishenkaiexuanze].value;

    }
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


    if (person == 0)
    {
        abeilv = new Array();
        for (var i = 0; i < 6; i++)
            abeilv[i] = shenli_pinga[i][azuobiao];

        ebeilv = shenli_e1[ezuobiao];
        qbeilv1 = shenli_q1[q1zuobiao];
        qbeilv2 = shenli_q2[q2zuobiao];
    

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

    if (person == 1)
    {
        abeilv = new Array();

        ebeilv = new Array();

        qbeilv = new Array();

        for (var i = 0; i < 6; i++)
        {
            abeilv[i] = leishen_pinga[i][azuobiao];
        }
        
        for (var i = 0; i < 3; i++)
            ebeilv[i] = leishen_e[i][ezuobiao];
            
        for (var i = 0; i < 12; i++)
            qbeilv[i] = leishen_q[i][q1zuobiao];
        
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
    
    if (person == 1 && zengfufanyingzuobiao == 0)
    {
        alert("雷神打不了增幅反应");
        print_ = 0;
    }
}

// function getjingtong()
// {
//     jingtong = document.getElementById("Personjingtong").value;
//     jingtong = parseFloat(jingtong);
// }



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

    if (person == 0)
    {
        if (beizuobiao == 0)
            yuansushanghaijiacheng = 1;
        else if (beizuobiao == 1)
            yuansushanghaijiacheng = 1.466; //雾切 雾切 冲刺冰伤 二冰套
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
        else if (beizuobiao == 7)
            yuansushanghaijiacheng = 1;
    }

    if (person == 1)
    {
        if (beizuobiao == 0)
            yuansushanghaijiacheng = 1;
        else if (beizuobiao == 1)
            yuansushanghaijiacheng = 1;
        else if (beizuobiao == 2)
            yuansushanghaijiacheng = 1;
        else if (beizuobiao == 3)
            yuansushanghaijiacheng = 1.466;
        else if (beizuobiao == 4)
            yuansushanghaijiacheng = 1;
        else if (beizuobiao == 5)
            yuansushanghaijiacheng = 1;
        else if (beizuobiao == 6)
            wulishanghaijiacheng = 1.583;
        else if (beizuobiao == 7)
            yuansushanghaijiacheng = 1;
    }
}


function yuansujiacheng()
{
    yuansushanghaijiacheng = yuansushanghaijiacheng + weaponyuansushanghaijiacheng + shengyiwuyuansushanghaijiacheng;

    if (person == 1)
    {
        yuansushanghaijiacheng = yuansushanghaijiacheng + (chongneng - 100) * 0.004; 
    }
}


function fanyingjiacheng_jingtong()
{
    if (person == 0)
    {
        if (zengfufanying == 1)
            zengfufanyingjiacheng = 1.5 + zengfujiacheng;
        if (zengfufanying == 0)
            zengfufanyingjiacheng = 1;
    }

    if (person == 1)
    {
        if (zengfufanying == 0)
            zengfufanyingjiacheng = 1;
    }

    
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
        guaiwudengji = 85;
    else if (fangyuzuobiao == 6)
        guaiwudengji = 93;

    if (person == 1)
    {
        var leishenmingzuotext = document.getElementById("leishenerming");
        var leishenmingzuoxuanze = leishenmingzuotext.selectedIndex;
        leishenmingzuozuobiao = leishenmingzuotext.options[leishenmingzuoxuanze].value;


    }
    
    
}


function getfangyuxishu()
{
    if (person == 0)
    {
        if (guaiwudengji == 0)
        {
            fangyuli = 1;
            fangyuxishu = fangyuli;
        }
        else
        {
            fangyuli = (persondengji + 100) / (guaiwudengji + persondengji + 200);
            fangyuxishu = fangyuli;
        }

    }
    
    if (person == 1)
    {
        if (guaiwudengji == 0)
        {
            fangyuli = 1;
            fangyuli_q = 1;
            fangyuxishu = fangyuli;
            fangyuxishu_q = fangyuli_q;
        }
        else
        {
            if (leishenmingzuozuobiao == 1)
            {
                fangyuli = (persondengji + 100) / (guaiwudengji + persondengji + 200);
                fangyuli_q = (persondengji + 100) / (guaiwudengji * 0.4 + persondengji + 140);
                fangyuxishu = fangyuli;
                fangyuxishu_q = fangyuli_q;
            }
            
            if (leishenmingzuozuobiao == 0)
            {
                fangyuli = (persondengji + 100) / (guaiwudengji + persondengji + 200);
                fangyuli_q = (persondengji + 100) / (guaiwudengji + persondengji + 200);
                fangyuxishu = fangyuli;
                fangyuxishu_q = fangyuli_q;
            }
        }
    }

    
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
    else if (kangxingzuobiao == 8)
        guaiwukangxing = -0.4;

}


function getkangxingxishu()
{
    kangxingxishu = 0;
    if (dun == 1)
        guaiwukangxing = guaiwukangxing - 0.2;

    if (shatangzuobiao == 1 && shatang_shengyiwu_zuobiao == 1)
    {
        guaiwukangxing = guaiwukangxing - 0.4;
    }
    
    if (guaiwukangxing < 0)
        kangxingxishu = 1 - guaiwukangxing / 2;
    else if (guaiwukangxing >= 0.75 )
        kangxingxishu = 1 / (1 + 4 * guaiwukangxing);
    else if (guaiwukangxing >= 0 && guaiwukangxing < 0.75)
        kangxingxishu = 1 - guaiwukangxing;

    
}



//独立乘区（绝缘4）
function dulichengqu()
{
    dulichengqujiacheng = 0;
    if (person == 1)
    {
        if (shengyiwuzuobiao == 2)
        {
            if (weapon == 8)
            {
                jueyuanjiacheng = (chongneng + 30) * 0.01 * 0.25;
                if (jueyuanjiacheng > 0.75)
                    jueyuanjiacheng = 0.75
                dulichengqujiacheng = dulichengqujiacheng + jueyuanjiacheng;
            }
            else
            {
                jueyuanjiacheng = chongneng * 0.01 * 0.25;
                if (jueyuanjiacheng > 0.75)
                    jueyuanjiacheng = 0.75
                dulichengqujiacheng = dulichengqujiacheng + jueyuanjiacheng;
            }
        }

        if (leishenkaiezuobiao == 1)
        {
            dulichengqujiacheng = dulichengqujiacheng + 90 * 0.0027;
        }
    }
}

// 计算各种伤害
function Damage()
{
    if (person == 0)
    {
        adamage_feibaoji = new Array();
        adamage_baoji = new Array();
        
        if (baojilv > 1)
            baojilv = 1;

        if (beizuobiao == 1)
            wulishanghaijiacheng = yuansushanghaijiacheng;
        
        for (var i = 0; i < 6; i++)
        {
            adamage_feibaoji[i] = gongjili * wulishanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * shengyiwu_chengqu_pinga_jiacheng * fangyuxishu * abeilv[i];
            adamage_baoji[i] = gongjili * wulishanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * shengyiwu_chengqu_pinga_jiacheng * fangyuxishu * abeilv[i] * (100 + baoshang) / 100;
            adamage_feibaoji[i] = Math.ceil(adamage_feibaoji[i]);
            adamage_baoji[i] = Math.ceil(adamage_baoji[i]);
        }



        edamage_feibaoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * fangyuxishu * ebeilv;
        edamage_baoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * fangyuxishu * ebeilv * (100 + baoshang) / 100;

        qdamage = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * shengyiwu_chengqu_dazhao_jiacheng * fangyuxishu * (baojilv * (100 + baoshang) / 100 + (1 - baojilv) * 1);
        qdamagetotal = qdamage * qbeilv1 * 19 + qdamage * qbeilv2 * 1;

        q1_feibaoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * shengyiwu_chengqu_dazhao_jiacheng * fangyuxishu * qbeilv1;
        q1_baoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * shengyiwu_chengqu_dazhao_jiacheng * fangyuxishu * qbeilv1 * (100 + baoshang) / 100;
        q20_feibaoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * shengyiwu_chengqu_dazhao_jiacheng * fangyuxishu * qbeilv2;
        q20_baoji = gongjili * yuansushanghaijiacheng * zengfufanyingjiacheng * kangxingxishu * shengyiwu_chengqu_dazhao_jiacheng * fangyuxishu * qbeilv2 * (100 + baoshang) / 100;

        if (qbeilv1 >= 2.12)
            qdamagetotal = qdamagetotal * 1.4;

        gongjili = Math.ceil(gongjili);
        edamage_feibaoji = Math.ceil(edamage_feibaoji);
        edamage_baoji = Math.ceil(edamage_baoji);
        qdamagetotal = Math.ceil(qdamagetotal);
        q1_feibaoji = Math.ceil(q1_feibaoji);
        q1_baoji = Math.ceil(q1_baoji);
        q20_feibaoji = Math.ceil(q20_feibaoji);
        q20_baoji = Math.ceil(q20_baoji);
    }

    if (person == 1)
    {
        adamage_feibaoji = new Array();
        adamage_baoji = new Array();
        

        if (weapon == 8)
        {
            yuansushanghaijiacheng_q = yuansushanghaijiacheng + 0.12;
            gongjili_q = gongjili + leishenbaizhi * 0.30 * 0.28;
        }
        else
        {
            yuansushanghaijiacheng_q = yuansushanghaijiacheng;
            gongjili_q = gongjili;
        }


        if (baojilv > 1)
            baojilv = 1;

        if (beizuobiao != 6)
            wulishanghaijiacheng = 1;

        for (var i = 0; i < 6; i++)
        {
            adamage_feibaoji[i] = gongjili * wulishanghaijiacheng *  kangxingxishu * shengyiwu_chengqu_pinga_jiacheng * fangyuxishu * abeilv[i];
            adamage_baoji[i] = gongjili * wulishanghaijiacheng *  kangxingxishu * shengyiwu_chengqu_pinga_jiacheng * fangyuxishu * abeilv[i] * (100 + baoshang) / 100;
            adamage_feibaoji[i] = Math.ceil(adamage_feibaoji[i]);
            adamage_baoji[i] = Math.ceil(adamage_baoji[i]);
        }

        edamage_feibaoji_1 = gongjili * yuansushanghaijiacheng * kangxingxishu * fangyuxishu * ebeilv[0];
        edamage_baoji_1 = gongjili * yuansushanghaijiacheng * kangxingxishu * fangyuxishu * ebeilv[0] * (100 + baoshang) / 100;

        edamage_feibaoji_2 = gongjili * yuansushanghaijiacheng * kangxingxishu * fangyuxishu * ebeilv[1];
        edamage_baoji_2 = gongjili * yuansushanghaijiacheng * kangxingxishu * fangyuxishu * ebeilv[1] * (100 + baoshang) / 100;

        edamage_feibaoji_1 = Math.ceil(edamage_feibaoji_1);
        edamage_baoji_1 = Math.ceil(edamage_baoji_1);

        edamage_feibaoji_2 = Math.ceil(edamage_feibaoji_2);
        edamage_baoji_2 = Math.ceil(edamage_baoji_2);

        qdamage_feibaoji = gongjili_q * (yuansushanghaijiacheng_q + dulichengqujiacheng) * kangxingxishu * fangyuxishu_q * (qbeilv[0] + yuanlicengshu * qbeilv[1]);
        qdamage_baoji = qdamage_feibaoji * (100 + baoshang) / 100;

        //专武效果：根据白值加攻击力，开大增加30充能，导致开大瞬间攻击力提高，雷伤提高，绝缘效果提高

        qdamage_feibaoji = Math.ceil(qdamage_feibaoji);
        qdamage_baoji = Math.ceil(qdamage_baoji);
    }
}

