function personchange()
{
    var persondocument = document.getElementById("Person");
    var personxuanze = persondocument.selectedIndex;
    var personzuobiao = persondocument.options[personxuanze].value;
    person = personzuobiao;


    document.getElementById("weaponselect").innerHTML = "";
    weapon = 0;

    if (person == 0)
    {
        document.getElementById("danshoujian").style.display = "block";
        document.getElementById("changbingwuqi").style.display = "none";
        document.getElementById("yuanli").style.display = "none";
        document.getElementById("leishenmingzuo").style.display = "none";
    }

    if (person == 1)
    {
        document.getElementById("danshoujian").style.display = "none";
        document.getElementById("changbingwuqi").style.display = "block";
        document.getElementById("yuanli").style.display = "block";
        document.getElementById("leishenmingzuo").style.display = "block";
    }
}