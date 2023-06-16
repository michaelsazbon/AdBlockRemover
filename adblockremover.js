
function showPopup(config) {

    document.body.style.overflow = "hidden";
    var a = document.createElement("div");
    a.innerHTML = `
    <div class="ad-block-remover-overlay ${config.overlay_class}"></div>
        <div class="ad-block-remover-modal ${config.modal_class}">
        <h2>${config.title}</h2>
        <p>${config.text}</p>
        <div class="ad-block-remover-buttons">
            <button class="${config.button_class}" onclick="location.reload()">${config.button_text}</button>
        </div>
    </div>
    `; 
    document.body.append(a);
}


function AdBlockRemover(config) {

    var _config = {
        title:		'We see you’re using an ad blocker',
        text:			'This website relies on advertising to bring you rich content. <br />To continue using this website, please add it to the safe sites in your ad blocker or disable your ad blocker.',
        modal_class: '',
        overlay_class: '',
        button_class : '',
        button_text:		'I disabled my ad blocker',
        loop_check_time: 5000,
        loop_max_check: 10,
        wait_to_check_time: 3000
    };

    if(config !== undefined && config) {
        Object.keys(config).forEach(key => {
            _config[key] = config[key];
          });
    }

    var loopNumber = 0;

    setTimeout(function() {

        var intervalCheck = setInterval(function ad_block_remover_check() {

            loopNumber++;
            if(loopNumber > _config.loop_max_check) {
                clearInterval(intervalCheck)
            }
            
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
           
            b.onerror = function() {
                clearInterval(intervalCheck)
                showPopup(_config); 
            };

            if(loopNumber % 2 == 1) {
                b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" + "?r=" + Math.floor(Math.random() * 1000000000);
            } else {
                b.src = "https://acdn.adnxs.com/prebid/prebid.js" + "?r=" + Math.floor(Math.random() * 1000000000);
            }

            document.body.append(b);

            return ad_block_remover_check;

        }(), _config.loop_check_time)

    }, _config.wait_to_check_time )
}
