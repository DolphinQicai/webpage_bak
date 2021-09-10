
// 输出伤害和相关说明
function print()
{
    if (person == 0)
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
            "精通：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + jingtong + "<br>" + 
            "充能：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chongneng + "%" + "<br>" + 
            "天赋等级：" + atianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + etianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + qtianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>";
        document.getElementById("pinga").innerHTML = 
            "平a：（冰伤杯为冰伤，物伤杯为物伤）" + "<br>" + 
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

    if (person == 1)
    {
        baojilv = baojilv * 100;
        baojilv = baojilv.toFixed(1);
        baoshang = baoshang.toFixed(1);
        document.getElementById("zhushuxing").innerHTML = 
            "基础数值：" + "<br>" + 
            "雷电将军" + "<br>" + 
            "等级：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + persondengji + "<br>" + 
            "攻击力：" + gongjili + "<br>" + 
            "暴击率：" + baojilv + "%" + "<br>" + 
            "暴伤：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + baoshang + "%" + "<br>" + 
            "精通：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + jingtong + "<br>" + 
            "充能：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chongneng + "%" + "<br>" + 
            "天赋等级：" + atianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + etianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + qtianfu + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>";
        document.getElementById("pinga").innerHTML = 
            "平a：（雷伤杯为物伤，物伤杯为物伤）" + "<br>" + 
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "非暴击" + 
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "暴击" + "<br>";
        
        for (var i = 1; i < 7; i++)
        {
            if (i == 4)
            {
                document.getElementById("pinga").innerHTML += 
                    "第" + i + "段：" + adamage_feibaoji[i-1] + " * 2" + 
                    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&nbsp;&nbsp;" + 
                    adamage_baoji[i-1] + " * 2" + "<br>";
            }
            else if (i == 6)
            {
                document.getElementById("pinga").innerHTML += 
                    "重击：&nbsp;&nbsp;&nbsp;" + adamage_feibaoji[i-1] + 
                    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;" + 
                    adamage_baoji[i-1] + "<br>";
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
            "非暴击伤害：" + edamage_feibaoji_1 + "<br>" + 
            "暴击伤害：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + edamage_baoji_1 + "<br>" + 
            "协同攻击伤害：" + "<br>" + 
            "非暴击伤害：" + edamage_feibaoji_2 + "<br>" + 
            "暴击伤害：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + edamage_baoji_2 + "<br>";


        document.getElementById("qjineng").innerHTML = 
            "Q技能：" + "<br>" + 
            "非暴击伤害：" + qdamage_feibaoji + "<br>" + 
            "暴击伤害：" + qdamage_baoji;
    }
}