
function generate() {
    var employee =  $('#payslip-detail').attr('data-employee');
    var employer =  $('#payslip-detail').attr('data-employer');
    var month =  $('#payslip-detail').attr('data-month');

    var doc = new jsPDF();

    doc.fromHTML(
        $('#print'), 15, 15,
        { width: 170 },
        function () {
            var blob = doc.output('blob');

            var formData = new FormData();
            formData.append('employer',employer);
            formData.append('employee',employee);
            formData.append('month',month);
            formData.append('pdf', blob);

            $.ajax({
                url: '/payslip/test/ajax',
                method: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) { console.log(data) },
                error: function (data) { console.log(data) }
            });

        }
    );




}
