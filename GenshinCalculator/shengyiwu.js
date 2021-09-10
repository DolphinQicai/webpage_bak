function shengyiwuxuanze()
{
    var shengyiwudocument = document.getElementById("shengyiwu_");
    var shengyiwuxuanze_ = shengyiwudocument.selectedIndex;
    shengyiwuzuobiao = shengyiwudocument.options[shengyiwuxuanze_].value;
}

function shengyiwuchange()
{
    var shengyiwudocument = document.getElementById("shengyiwu_");
    var shengyiwuxuanze_ = shengyiwudocument.selectedIndex;
    shengyiwuzuobiao = shengyiwudocument.options[shengyiwuxuanze_].value;
    if (shengyiwuzuobiao == 0)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML = "";

    }
    if (shengyiwuzuobiao == 1)
    {
        document.getElementById("sibingtao").style.display = "block";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "获得15%冰元素伤害加成。" + "<br>" + "<br>" + 
        "四件套：" + "<br>" + 
        "攻击处于冰元素影响下的敌人时，暴击率提高20%；若敌人处于冻结状态下，则暴击率额外提高20%。";
    }
    if (shengyiwuzuobiao == 2)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "元素充能效率提高20%。" + "<br>" + "<br>" + 
        "四件套：" + "<br>" + 
        "基于元素充能效率的25%，提高元素爆发造成的伤害。至多通过这种方式获得75%提升。";
    }
    if (shengyiwuzuobiao == 3)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "攻击力提高18%。" + "<br>" + "<br>" + 
        "四件套：" + "<br>" + 
        "装备该圣遗物套装的角色为单手剑、双手剑、长柄武器角色时，角色普通攻击造成的伤害提高35%。";
    }
    if (shengyiwuzuobiao == 4)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "元素爆发造成的伤害提升20％。" + "<br>" + "<br>" + 
        "四件套：" + "<br>" + 
        "释放元素爆发后，队伍中所有角色攻击力提升20％，持续12秒，该效果不可叠加。";
    }
    if (shengyiwuzuobiao == 5)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "元素精通提高80点。" + "<br>" + "<br>" + 
        "四件套：" + "<br>" + 
        "装备该圣遗物套装的角色为法器、弓箭角色时，角色重击造成的伤害提高35%。";
    }
    if (shengyiwuzuobiao == 6)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "获得15%冰元素伤害加成。" + "<br>" + "<br>" + 
        "两件套：" + "<br>" + 
        "2件套：元素充能效率提高20%。";
    }
    if (shengyiwuzuobiao == 7)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "获得15%冰元素伤害加成。" + "<br>" + "<br>" + 
        "两件套：" + "<br>" + 
        "2件套：攻击力提高18%。";
    }
    if (shengyiwuzuobiao == 8)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "获得15%冰元素伤害加成。" + "<br>" + "<br>" + 
        "两件套：" + "<br>" + 
        "2件套：元素爆发造成的伤害提升20％。";
    }
    if (shengyiwuzuobiao == 9)
    {
        document.getElementById("sibingtao").style.display = "none";
        document.getElementById("chongnengkuang").style.display = "none";
        document.getElementById("shengyiwuselect").innerHTML =
        "两件套：" + "<br>" + 
        "获得15%冰元素伤害加成。" + "<br>" + "<br>" + 
        "两件套：" + "<br>" + 
        "2件套：元素精通提高80点。";
    }
}



function yuansujiacheng_shengyiwu()
{
    shengyiwuyuansushanghaijiacheng = 0;

    if (person == 0)
    {
        if (shengyiwuzuobiao == 0)
        {
            shengyiwuyuansushanghaijiacheng = 0;
        }
        if (shengyiwuzuobiao == 1)
        {
            shengyiwuyuansushanghaijiacheng = 0.15;
        }
        if (shengyiwuzuobiao == 6)
        {
            shengyiwuyuansushanghaijiacheng = 0.15;
        }
        if (shengyiwuzuobiao == 7)
        {
            shengyiwuyuansushanghaijiacheng = 0.15;
        }
        if (shengyiwuzuobiao == 8)
        {
            shengyiwuyuansushanghaijiacheng = 0.15;
        }
        if (shengyiwuzuobiao == 9)
        {
            shengyiwuyuansushanghaijiacheng = 0.15;
        }
    }


}


function shengyiwujiacheng()
{
    shengyiwu_chengqu_dazhao_jiacheng = 1;
    shengyiwu_chengqu_pinga_jiacheng = 1;

    if (person == 0)
    {
        if (shengyiwuzuobiao == 1)
        {
            var sibingtaotext = document.getElementById("sibingtao");
            var sibingtaoxuanze = sibingtaotext.selectedIndex;
            var sibingtaozuobiao = sibingtaotext.options[sibingtaoxuanze].value;
            if (sibingtaozuobiao == 1)
                baojilv = baojilv + 0.2;
            else if (sibingtaozuobiao == 2)
                baojilv = baojilv + 0.4;
        }
        if (shengyiwuzuobiao == 2)
        {
            // chongneng = document.getElementById("chongneng").value;
            // chongneng = parseFloat(chongneng);
            shengyiwu_chengqu_dazhao_jiacheng = chongneng * 0.01 * 0.25 + 1;
            if (shengyiwu_chengqu_dazhao_jiacheng > 1.75)
                shengyiwu_chengqu_dazhao_jiacheng = 1.75;
        }
        if (shengyiwuzuobiao == 3)
        {
            shengyiwu_chengqu_pinga_jiacheng = 1.35;
        }
        if (shengyiwuzuobiao == 4)
        {
            shengyiwu_chengqu_dazhao_jiacheng = 1.2;
        }
        if (shengyiwuzuobiao == 8)
        {
            shengyiwu_chengqu_dazhao_jiacheng = 1.2;
        }
    }

    
}