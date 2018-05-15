$(document).ready(() =>{
		/*$("button").click(function(){
			$("p").toggle();
		});*/


		 $('.accordion-btn').on('click', function(event){
        event.preventDefault();
        // create accordion variables
        let accordion = $(this);
        let accordionContent = accordion.next('p');

        // toggle accordion link open class
        accordion.toggleClass("open");
        // toggle accordion content
        accordionContent.slideToggle(100);

    });



})