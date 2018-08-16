
$(function() {
    $.get('/api', function(data) {
        
        updateFeedback(data);
    });

    $(".feedback-form").submit(function(e) {
        e.preventDefault();
        $.post('/api', {
            name: $('#name').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        }, updateFeedback)

    });

    $(".recent").on('click', function(e) {
        if(e.target.className == 'fas fa-trash-alt'){
            $.ajax({
                url: '/api/' + e.target.id,
                type: 'DELETE',
                success: updateFeedback
            })
        }
    })

    function updateFeedback(data) {
        $(".recent").empty();
        let i = 0;
        data.slice(0, 5).forEach(element => {
            let text = ` 
            <blockquote class="blockquote pb-3">
                <h4>${element.subject}</h4>
                <p class="mb-0">${element.message}<i id="${i}"class="fas fa-trash-alt"></i></p>
                <footer class="blockquote-footer">${element.name} </footer>
            </blockquote>
            `
            $(".recent").append(text); 
            i ++;     
        })
                                       
    };
});

