$(document).ready(function() {
    $('input:checkbox').click(function() {
        $('input:checkbox').not(this).prop('checked', false);
    });
});

function show() {

    if (document.getElementById('lr').checked == true)
        document.getElementById('image').src = "images/results/logistic_demo.PNG"

    if (document.getElementById('svm').checked == true)
        document.getElementById('image').src = "images/results/svm_demo.PNG"

    if (document.getElementById('nb').checked == true)
        document.getElementById('image').src = "images/results/naive_bayes_demo.PNG"

    if (document.getElementById('knn').checked == true)
        document.getElementById('image').src = "images/results/knn_demo.PNG"

    if (document.getElementById('rf').checked == true)
        document.getElementById('image').src = "images/results/rf_demo.PNG"

}