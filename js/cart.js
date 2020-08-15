function Calc() {
    var one = document.getElementById("one").value;
    let one_num = eval(one);
    var two = document.getElementById("two").value;
    let two_num = eval(two);
    var three = document.getElementById("three").value;
    let three_num = eval(three);
    var four = document.getElementById("four").value;
    let four_num = eval(four);
    var five = document.getElementById("five").value;
    let five_num = eval(five);

    var six = document.getElementById("six").value;
    let six_num = eval(six);
    var seven = document.getElementById("seven").value;
    let seven_num = eval(seven);
    var eigth = document.getElementById("eigth").value;
    let eigth_num = eval(eigth);
    var nine = document.getElementById("nine").value;
    let nine_num = eval(nine);
    var ten = document.getElementById("ten").value;
    let ten_num = eval(ten);
    var eleven = document.getElementById("eleven").value;
    let eleven_num = eval(eleven);
    var tweleve = document.getElementById("tweleve").value;
    let tweleve_num = eval(tweleve);

    var selectedValue = document.getElementById("select").value;
    let select_num = eval(selectedValue);


    var tot = 0;

    tot = one_num * 5.5 + two_num * 7 + three_num * 7.5 + four_num * 7.5 + five_num * 8.5 + six * 5.5
        + seven * 7
        + eigth * 7.5
        + nine * 6.0
        + ten * 5.0
        + eleven * 25.0
        + tweleve * 12.5;
    tot = tot + (tot * select_num) / 100;
    document.getElementById("result").innerHTML = tot;
    console.log(tot);
}
