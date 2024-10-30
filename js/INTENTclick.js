// JavaScript Document
    function checkboxenable() {
        if(document.INTENTclick) {
			if(document.INTENTclick.show_contentLinks_control.checked) {
				document.INTENTclick.INTENTclick_post_settings.disabled=false;
				document.INTENTclick.INTENTclick_disable_new_days.disabled=false;
			} else {
				document.INTENTclick.INTENTclick_post_settings.disabled=true;
				document.INTENTclick.INTENTclick_disable_new_days.disabled=true;
			}
        } else if (document.post){
			if(document.post.display_content_link.checked) {
				document.post.INTENTclick_post_settings.disabled=false;
			} else {
				document.post.INTENTclick_post_settings.disabled=true;
			}
		}
    }
    window.onload=checkboxenable;
