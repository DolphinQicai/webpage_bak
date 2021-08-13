function weaponchange()
{
    var weapondocument = document.getElementById("weapon");
    var weaponxuanze = weapondocument.selectedIndex;
    var weaponzuobiao = weapondocument.options[weaponxuanze].value;
    weapon = weaponzuobiao;
    
    if (weapon == 0)
    {
        document.getElementById("wuqie").style.display = "none";
        document.getElementById("weaponselect").innerHTML = "";

    }
    if (weapon == 1)
    {
        document.getElementById("wuqie").style.display = "block";
        document.getElementById("weaponselect").innerHTML = 
        "雾切之回光" + "<br>" + "<br>" + "90级基础攻击力：674" + "<br>" + "暴击伤害44.1%" + "<br>" + "<br>" + 
        "精炼(1/2/3/4/5)阶" + "<br>" + 
        "雾切御腰物" + "<br>" + 
        " · 获得(12%/15%/18%/21%/24%)所有元素伤害加成，并能获得「雾切之巴印」的威势。" + "<br>" + 
        "雾切之巴印：持有1/2/3层雾切之巴印时，获得( 8/16/28% | 10/20/35% | 12/24/42% | 14/28/49% | 16/32/56% )自己的元素类型的元素伤害加成。" + "<br>" + 
        "在下列情况下，角色将各获得1层雾切之巴印：" + "<br>" + 
        " · 普通攻击造成元素伤害时，持续5秒；" + "<br>" + 
        " · 施放元素爆发时，持续10秒；" + "<br>" + 
        "此外，角色元素能量低于100%时，将获得1层雾切之巴印，此雾切之巴印会在角色的元素能量充满时消失。" + 
        "每层雾切之巴印的持续时间独立计算。";

    }
    if (weapon == 2)
    {
        document.getElementById("wuqie").style.display = "none";
        document.getElementById("weaponselect").innerHTML = 
        "磐岩结绿" + "<br>" + "<br>" + "90级基础攻击力：542" + "<br>" + "暴击率44.1%" + "<br>" + "<br>" + 
        "精炼(1/2/3/4/5)阶" + "<br>" + 
        "护国的无垢之心" + "<br>" + 
        " · 生命值提升(20%/25%/30%/35%/40%)。此外，基于装备该武器的角色生命值上限的(1.2%/1.5%/1.8%/2.1%/2.4%)，获得攻击力加成。";
    }
    if (weapon == 3)
    {
        document.getElementById("wuqie").style.display = "none";
        document.getElementById("weaponselect").innerHTML = 
        "斫峰之刃" + "<br>" + "<br>" + "90级基础攻击力：608" + "<br>" + "攻击力：49.6%" + "<br>" + "<br>" + 
        "精炼(1/2/3/4/5)阶" + "<br>" + 
        "金璋皇极" + "<br>" + 
        "· 护盾强效提升(20%/25%/30%/35%/40%)。攻击命中后的8秒内，攻击力提升(4%/5%/6%/7%/8%)。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。";

    }
    if (weapon == 4)
    {
        document.getElementById("wuqie").style.display = "none";
        document.getElementById("weaponselect").innerHTML = 
        "黑岩长剑" + "<br>" + "<br>" + "90级基础攻击力：565" + "<br>" + "暴击伤害：36.8%" + "<br>" + "<br>" +
        "精炼(1/2/3/4/5)阶" + "<br>" + 
        "乘胜追击" + "<br>" + 
        "· 击败敌人后，攻击力提升(12%/15%/18%/21%/24%)，持续30秒。该效果至多叠加三层，每层持续时间独（姆）立。";

    }
    if (weapon == 5)
    {
        document.getElementById("wuqie").style.display = "none";
        document.getElementById("weaponselect").innerHTML = 
        "黑剑" + "<br>" + "<br>" + "90级基础攻击力：510" + "<br>" + "暴击率：27.6%" + "<br>" + "<br>" + 
        "精炼(1/2/3/4/5)阶" + "<br>" + 
        "正义" + "<br>" + 
        " · 普通攻击与重击的造成的伤害提升(20%/25%/30%/35%/40%)；此外，普通攻击与重击暴击时，回复等同于攻击力(60%/70%/80%/90%/100%)的生命值。该效果每5秒至多发动一次。";
    }
    if (weapon == 6)
    {
        document.getElementById("wuqie").style.display = "none";
        document.getElementById("weaponselect").innerHTML = 
        "天目影打刀" + "<br>" + "<br>" + "90级基础攻击力：454" + "<br>" + "攻击力：55.1%" + "<br>" + "<br>" +
        "精炼(1/2/3/4/5)阶" + "<br>" + 
        "岩藏之胤" + "<br>" + 
        "施放元素战技后，获得1个胤种，该效果每5秒至多触发一次。胤种持续30秒，至多同时存在3个。施放元素爆发后，会清除持有的所有胤种，并在2秒之后，基于消耗的胤种数量，每个为该角色恢复(6/7.5/9/10.5/12)点元素能量。";

    }
    if (weapon == 7)
    {
        document.getElementById("wuqie").style.display = "none";
        document.getElementById("weaponselect").innerHTML = 
        "黎明神剑" + "<br>" + "<br>" + "90级基础攻击力：401" + "<br>" + "暴击伤害：46.9%" + "<br>" + "<br>" + 
        "精炼(1/2/3/4/5)阶" + "<br>" + 
        "激励" + "<br>" + 
        " · 生命值高于90%时，暴击率提升(14%/17.5%/21%/24.5%/28%)。"
    }
}


function weaponjiacheng()
{
    var weapondocument = document.getElementById("weapon");
    var weaponxuanze = weapondocument.selectedIndex;
    var weaponzuobiao = weapondocument.options[weaponxuanze].value;
    weapon = weaponzuobiao;
    wuqijiacheng = 0;
    if (weapon == 0)
        wuqijiacheng = 0;
    if (weapon == 1)
    {
        var wuqiedocument = document.getElementById("wuqie");
        var wuqiexuanze = wuqiedocument.selectedIndex;
        var wuqiezuobiao = wuqiedocument.options[wuqiexuanze].value;
        if (wuqiezuobiao == 0)
            wuqiejiacheng = 0.12;
        else if (wuqiezuobiao == 1)
            wuqiejiacheng = 0.12 + 0.08;
        else if (wuqiezuobiao == 2)
            wuqiejiacheng = 0.12 + 0.16;
        else if (wuqiezuobiao == 3)
            wuqiejiacheng = 0.12 + 0.28;


    }
    
}


function yuansushanghaijiacheng_weapon()
{
    if (weapon == 0)
    {
        weaponyuansushanghaijiacheng = wuqijiacheng;
    }
    else if (weapon == 1)
    {
        weaponyuansushanghaijiacheng = wuqiejiacheng;
    }
    else
        weaponyuansushanghaijiacheng = 0;
    
}
