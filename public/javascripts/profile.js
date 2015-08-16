$(function() {
    $('select').change( function() {
        var value = $(this).val();
        if (!value || value == 'nonBinary') {
           var other = prompt( "Please customize:" );
           if (!other) return false;
           $(this).append('<option value="'
                             + other
                             + '" selected="selected">'
                             + other
                             + '</option>');
        }
    });
});
