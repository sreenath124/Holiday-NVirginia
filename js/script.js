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
    $('.form_section, footer').find('input[type="text"]').on('keyup', function() {
        formReset();
        $(this).prev('label').removeClass('required');
    });
    $('input[type="radio"]').on('change', function() {
        formReset();
    });
    $('footer select').on('change', function() {
        $(this).parent().siblings('label').removeClass('required');
    });

    function validateForm() {
        $('.form_section input[type="text"], footer input[type="text"] ').each(function() {
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

        $('footer').find('select').each(function(){
            if($(this).val()===null) {
                $('.errors').append('<p class="error_msg"> Please select a ' + $(this).attr('name') + '.</p>');
                $(this).parent().siblings('label').addClass('required');
            }
        });

        if (!$('.card_type input').is(":checked")) {
            $('.errors').append('<p class="error_msg">Please select a card type.</p>');
            $('.card_type label').addClass('required');
        }
    }

    function formReset() {
        $('.errors').empty();
    }

});
