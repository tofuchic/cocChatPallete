function copyArtsCommandToClipboard(prefix) {
    // copy 用に textareaを作る
    let textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";

    document.body.appendChild(textArea);

    // 技能名、技能値の取得
    const kinds = [
        "Table_battle_arts"
        , "Table_find_arts"
        , "Table_act_arts"
        , "Table_commu_arts"
        , "Table_know_arts"
    ]
    var text = "";
    for (var i = 0; i < kinds.length; i++) {
        text += "// " + kinds[i].slice(6) + "\n";
        var arts_table = document.getElementById(kinds[i])
        var table_rows = arts_table.rows.length;
        for (j = 1; j < table_rows; j++) {
            var name = arts_table.rows[j].cells[1].firstChild.data;
            if (name == "undefined" || name == undefined) {
                name = arts_table.rows[j].cells[1].firstChild.value;
            }else if(arts_table.rows[j].cells[1].lastChild.data == ")"){
                name = arts_table.rows[j].cells[1].firstChild.data + arts_table.rows[j].cells[1].firstElementChild.value + ")";
            }
            var num = arts_table.rows[j].cells[7].firstChild.value;
            text += prefix + "<=" + num + " " + name + "\n";
        }
    }

    textArea.value = text;

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}
copyArtsCommandToClipboard(prefix);