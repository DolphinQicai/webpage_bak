function bannite()
{
    var bannitedocument = document.getElementById("bannitekaida");
    var bannitexuanze = bannitedocument.selectedIndex;
    bannitezuobiao = bannitedocument.options[bannitexuanze].value;

    if (bannitezuobiao == 0)
    {
        document.getElementById("banniteshuju").style.display = "block";
    }
    if (bannitezuobiao == 1)
    {
        document.getElementById("banniteshuju").style.display = "none";

    }
}


function bannite_zengshang()
{
    var bannitedocument = document.getElementById("bannitekaida");
    var bannitexuanze = bannitedocument.selectedIndex;
    bannitezuobiao = bannitedocument.options[bannitexuanze].value;


    if (person == 0)
    {
        bannite_gongjilibaizhi = document.getElementById("bannitegongjili_baizhi").value;
        bannite_gongjilibaizhi = parseFloat(bannite_gongjilibaizhi);
        juese_gongjilibaizhi = document.getElementById("juesegongjili_baizhi").value;
        juese_gongjilibaizhi = parseFloat(juese_gongjilibaizhi);

        var bannite_mingzuo_shengyiwu_document = document.getElementById("bannite_shengyiwu_mingzuo");
        var bannite_mingzuo_shengyiwu_xuanze = bannite_mingzuo_shengyiwu_document.selectedIndex;
        bannite_mingzuo_shengyiwu_zuobiao = bannite_mingzuo_shengyiwu_document.options[bannite_mingzuo_shengyiwu_xuanze].value;

        var bannite_dazhao_tianfu_document = document.getElementById("bannitedazhaodengji");
        var bannite_dazhao_tianfu_xuanze = bannite_dazhao_tianfu_document.selectedIndex;
        bannite_dazhao_tianfu_zuobiao = bannite_dazhao_tianfu_document.options[bannite_dazhao_tianfu_xuanze].value;

        bannite_dazhao_beilv = bannite_q[bannite_dazhao_tianfu_zuobiao];

        if (bannitezuobiao == 0)
        {
            if (bannite_mingzuo_shengyiwu_zuobiao == 0)
            {
                gongjili = gongjili + bannite_gongjilibaizhi * bannite_dazhao_beilv;
            }
            else if (bannite_mingzuo_shengyiwu_zuobiao == 1)
            {
                gongjili = gongjili + juese_gongjilibaizhi * 0.2 + bannite_gongjilibaizhi * bannite_dazhao_beilv;
            }
            else if (bannite_mingzuo_shengyiwu_zuobiao == 2)
            {
                gongjili = gongjili + bannite_gongjilibaizhi * (bannite_dazhao_beilv + 0.2);
            }
            else if (bannite_mingzuo_shengyiwu_zuobiao == 3)
            {
                gongjili = gongjili + juese_gongjilibaizhi * 0.2 + bannite_gongjilibaizhi * (bannite_dazhao_beilv + 0.2);
            }
        }
    }

    if (person == 1)
    {
        bannite_gongjilibaizhi = document.getElementById("bannitegongjili_baizhi").value;
        bannite_gongjilibaizhi = parseFloat(bannite_gongjilibaizhi);
        juese_gongjilibaizhi = document.getElementById("juesegongjili_baizhi").value;
        juese_gongjilibaizhi = parseFloat(juese_gongjilibaizhi);

        juese_gongjilibaizhi = leishenbaizhi;

        var bannite_mingzuo_shengyiwu_document = document.getElementById("bannite_shengyiwu_mingzuo");
        var bannite_mingzuo_shengyiwu_xuanze = bannite_mingzuo_shengyiwu_document.selectedIndex;
        bannite_mingzuo_shengyiwu_zuobiao = bannite_mingzuo_shengyiwu_document.options[bannite_mingzuo_shengyiwu_xuanze].value;

        var bannite_dazhao_tianfu_document = document.getElementById("bannitedazhaodengji");
        var bannite_dazhao_tianfu_xuanze = bannite_dazhao_tianfu_document.selectedIndex;
        bannite_dazhao_tianfu_zuobiao = bannite_dazhao_tianfu_document.options[bannite_dazhao_tianfu_xuanze].value;

        bannite_dazhao_beilv = bannite_q[bannite_dazhao_tianfu_zuobiao];

        if (bannitezuobiao == 0)
        {
            if (bannite_mingzuo_shengyiwu_zuobiao == 0)
            {
                gongjili = gongjili + bannite_gongjilibaizhi * bannite_dazhao_beilv;
            }
            else if (bannite_mingzuo_shengyiwu_zuobiao == 1)
            {
                gongjili = gongjili + juese_gongjilibaizhi * 0.2 + bannite_gongjilibaizhi * bannite_dazhao_beilv;
            }
            else if (bannite_mingzuo_shengyiwu_zuobiao == 2)
            {
                gongjili = gongjili + bannite_gongjilibaizhi * (bannite_dazhao_beilv + 0.2);
            }
            else if (bannite_mingzuo_shengyiwu_zuobiao == 3)
            {
                gongjili = gongjili + juese_gongjilibaizhi * 0.2 + bannite_gongjilibaizhi * (bannite_dazhao_beilv + 0.2);
            }
        }
    }

}



function shatang()
{
    var shatangdocument = document.getElementById("shatangkaida");
    var shatangxuanze = shatangdocument.selectedIndex;
    shatangzuobiao = shatangdocument.options[shatangxuanze].value;

    if (shatangzuobiao == 0)
    {
        document.getElementById("shatangshuju").style.display = "none";
    }
    if (shatangzuobiao == 1)
    {
        document.getElementById("shatangshuju").style.display = "block";
    }
}


function shatang_zengshang()
{
    shatangjingtong = document.getElementById("shatangjingtong").value;
    shatangjingtong = parseFloat(shatangjingtong);

    var shatang_mingzuo_document = document.getElementById("shatangmingzuo");
    var shatang_mingzuo_xuanze = shatang_mingzuo_document.selectedIndex;
    shatang_mingzuo_zuobiao = shatang_mingzuo_document.options[shatang_mingzuo_xuanze].value;

    var shatang_shengyiwu_document = document.getElementById("shatangshengyiwu");
    var shatang_shengyiwu_xuanze = shatang_shengyiwu_document.selectedIndex;
    shatang_shengyiwu_zuobiao = shatang_shengyiwu_document.options[shatang_shengyiwu_xuanze].value;


    if (shatangzuobiao == 1)
    {
        if (shatang_mingzuo_zuobiao == 1)
        {
            yuansushanghaijiacheng = yuansushanghaijiacheng + 0.2;
        }

        
    }
}