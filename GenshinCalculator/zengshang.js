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

    bannite_gongjilibaizhi = document.getElementById("bannitegongjili_baizhi").value;
    bannite_gongjilibaizhi = parseFloat(bannite_gongjilibaizhi);
    shenli_gongjilibaizhi = document.getElementById("shenligongjili_baizhi").value;
    shenli_gongjilibaizhi = parseFloat(shenli_gongjilibaizhi);

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
            gongjili = gongjili + shenli_gongjilibaizhi * 0.2 + bannite_gongjilibaizhi * bannite_dazhao_beilv;
        }
        else if (bannite_mingzuo_shengyiwu_zuobiao == 2)
        {
            gongjili = gongjili + bannite_gongjilibaizhi * (bannite_dazhao_beilv + 0.2);
        }
        else if (bannite_mingzuo_shengyiwu_zuobiao == 3)
        {
            gongjili = gongjili + shenli_gongjilibaizhi * 0.2 + bannite_gongjilibaizhi * (bannite_dazhao_beilv + 0.2);
        }
    }

}