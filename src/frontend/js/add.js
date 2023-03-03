$(document).ready(() => {
    $('#type').change(function() {
        switch (this.value) {
            case '0':
                $('#attributes').html(`
                    <label for="size">Size</label>
                    <input type="number" step="0.01" class="form-control" name="size" required>
                `);
                break;
            case '1':
                $('#attributes').html(`
                    <label for="weight">Weight</label>
                    <input type="number" step="0.01" class="form-control" name="weight" required>
                `);
                break;

            case '2':
                $('#attributes').html(`
                    <label for="height">Height</label>
                    <input type="number" step="0.01" class="form-control" name="height" required>
                    <label for="width">Width</label>
                    <input type="number" step="0.01" class="form-control" name="width" required>
                    <label for="length">Length</label>
                    <input type="number" step="0.01" class="form-control" name="length" required>
                `);
                break;
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();

        let inputs = {};
        $(this).find(':input').each(function() {
            inputs[$(this).attr("name")] = $(this).val();
        });

        $.post('/products/add', inputs, function(data, status) {
            $('#message').show().removeClass('alert-success alert-danger').addClass(`alert-${data.status}`).html(data.message);
        });
    });
});