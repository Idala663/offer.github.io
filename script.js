//js taget från konversation med copilot
$(document).ready(function(){
    $(".question").click(function(){ //döljer alla svar
        var answer = $(this).next(".answer"); //visa svar för aktuell fråga
        $(".answer").hide(); //hittar närliggande svar till närmaste button
        answer.slideToggle(); // Visar eller döljer elementet
    });
});

