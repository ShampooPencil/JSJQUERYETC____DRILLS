function MaybeTalkToBob(){
    //start of with a if/else but come and modify the programm so i can practice
    //and learn case conditions master cases and much more
    //console.log("testing");
    var talkToBob = "Y";
    var notTalkToBob = "N";
    var shouldiTalkToBob = prompt("Do you want to talk to Bob? Y/N");
    if (talkToBob === shouldiTalkToBob.toUpperCase()){
        return AskBob();
    } else if (notTalkToBob === shouldiTalkToBob.toUpperCase()) {
       return MaybeTalkToBob();
    };
};
function AskBob(){
    console.log("TESTING 2nd");
    //document.getElementById("BOB").innerHTML = "TESTING";
    var firstSentence = document.getElementById("BOB").innerHTML;
    firstSentence = "Whats Up Bob";
    return firstSentence;
};
MaybeTalkToBob();