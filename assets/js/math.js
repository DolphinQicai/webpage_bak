function getinput()
{
    gongjili = document.getElementById('gongjili').value;
    baojilv = document.getElementById('baojilv').value;
    baoshang = document.getElementById('baoshang').value;
    gongjili = parseFloat(gongjili);
    baojilv = parseFloat(baojilv);
    baoshang = parseFloat(baoshang);
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



function gettianfu()
{
    var qdocument = document.getElementById("qtianfudengji");
    var qxuanze = qdocument.selectedIndex;
    var q1zuobiao = qdocument.options[qxuanze].value;
    var q2zuobiao = qdocument.options[qxuanze].value;
    qbeilv1 = q1[q1zuobiao];
    qbeilv2 = q2[q2zuobiao];
}

function Damage()
{
    var qdamage = gongjili * 1.466 * (baojilv * (100 + baoshang) / 100 + (1 - baojilv) * 1);
    var qdamagetotal = qdamage * qbeilv1 * 19 + qdamage * qbeilv2 * 1;
    if (qbeilv1 >= 2.12)
        qdamagetotal = qdamagetotal * 1.4;
    qdamagetotal = Math.ceil(qdamagetotal);
    document.getElementById("shanghai").innerHTML = qdamagetotal;
}


 
