//mean of grades
function meanOfGrades(){
    var grade_11 = parseInt(document.getElementById("grade-11").value);
    var grade_12 = parseInt(document.getElementById("grade-12").value);
    var grade_21 = parseInt(document.getElementById("grade-21").value);
    var grade_22 = parseInt(document.getElementById("grade-22").value);
    var grade_31 = parseInt(document.getElementById("grade-31").value);
    var grade_32 = parseInt(document.getElementById("grade-32").value);
    var grade_41 = parseInt(document.getElementById("grade-41").value);
    var grade_42 = parseInt(document.getElementById("grade-42").value);

    var decimal_grade1 = grade_11/grade_12;
    var decimal_grade2 = grade_21/grade_22;
    var decimal_grade3 = grade_31/grade_32;
    var decimal_grade4 = grade_41/grade_42;

    var total_grade = decimal_grade1 + decimal_grade2 + decimal_grade3 + decimal_grade4;
    var average = (total_grade/4);
    var average_fraction = (average * 100) + "/100";
    document.getElementById("mean").innerHTML="your mean grade is: " + average_fraction;
}

//weighted grades
function weightedGrade(){
    var weight_1 = parseInt(document.getElementById("weight-1").value);
    var weight_2 = parseInt(document.getElementById("weight-2").value);
    var weight_3 = parseInt(document.getElementById("weight-3").value);
    var weight_4 = parseInt(document.getElementById("weight-4").value);

    var weight_sum = weight_1 + weight_2 + weight_3 + weight_4;

    var grade_11 = parseInt(document.getElementById("grade-11").value);
    var grade_12 = parseInt(document.getElementById("grade-12").value);
    var grade_21 = parseInt(document.getElementById("grade-21").value);
    var grade_22 = parseInt(document.getElementById("grade-22").value);
    var grade_31 = parseInt(document.getElementById("grade-31").value);
    var grade_32 = parseInt(document.getElementById("grade-32").value);
    var grade_41 = parseInt(document.getElementById("grade-41").value);
    var grade_42 = parseInt(document.getElementById("grade-42").value);

    var decimal_grade1 = grade_11/grade_12;
    var decimal_grade2 = grade_21/grade_22;
    var decimal_grade3 = grade_31/grade_32;
    var decimal_grade4 = grade_41/grade_42;

    var weighted_grade = (decimal_grade1) * (weight_1/weight_sum) + (decimal_grade2) * (weight_2/weight_sum) + (decimal_grade3) * (weight_3/weight_sum) + (decimal_grade4) * (weight_4/weight_sum);
    var weighted_grade_fraction = (weighted_grade * 100) + "/100";
    document.getElementById("weighted").innerHTML="your weighted grade is: " + weighted_grade_fraction;
}

