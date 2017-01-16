$(document).ready(function() {
    $('.add_more').on('click', function(event) {
        event.preventDefault();
        var new_recipient = $('.recipients').clone();
        $('.new_recipients').append(new_recipient);
    });

    $('.order').on('click', function(event) {
        event.preventDefault();
        validateForm();
    });
    $('.form_section input[type="text"], footer input[type="text"]').on('keyup', function() {
        formReset();
    });
    $('input[type="radio"]').on('change', function() {
        formReset();
    });

    function validateForm() {
        $('.form_section input[type="text"], footer input[type="text"] ').each(function(a, i) {
            if ($(this).val() === '') {
                $(this).prev('label').addClass('required');
                if ($('.errors').find(this.id).length === 0) {
                    $('.errors').append('<p class="error_msg" id=' + this.id + '>Please enter a valid ' + $(this).attr('name') + '.</p>');
                }

            }
        });

        $('.form_section input[type="radio"]').each(function() {
            if (!$(this).is(':checked')) {
                $('.errors').append('<p class="error_msg">Please select an offer.</p>');
                return false;
            }
        });

        if (!$('.card_type input').is(":checked")) {
            $('.errors').append('<p class="error_msg">Please select a card type.</p>');
            $('.card_type label').addClass('required');
        }

        if ($('#month').val() === null) {
            $('.errors').append('<p class="error_msg">Please select a month.</p>');
            $('#month').parent().siblings('label').removeClass('required').addClass('required');
        }
        if ($('#year').val() === null) {
            $('.errors').append('<p class="error_msg">Please select an year.</p>');
            $('#year').parent().siblings('label').removeClass('required').addClass('required');
        }

    }

    function formReset() {
        $('.errors').empty();
        $('form label').removeClass('required');
    }

});
