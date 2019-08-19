
THREEx.ArToolkitContext.baseURL = 'https://rawgit.com/jeromeetienne/ar.js/master/three.js/';

AFRAME.registerComponent('trigger', {

    init: function () {
        document.addEventListener('keydown', evt => {
            if (evt.keyCode === 32) {
                this.trigger();
            }
        });
        document.addEventListener('click', () => {
            this.trigger();
        });
    },

    trigger: function () {
        this.el.emit('particleplayerstart', {
            position: new THREE.Vector3(
                (Math.random() - 0.5) * 7,
                Math.random() * 2,
                -5 - Math.random() * 2
            ),
            rotation: new THREE.Euler(Math.random() * 1 - .5, 0, 0)
        });
    }


});


AFRAME.registerComponent('changegif', {
    init: function () {
        var marker = this.el;

        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);
            text = marker.children[0];
            console.log(text.getAttribute('data-infoImgSrc'));

            document.getElementById("infoImg").src = text.getAttribute('data-infoImgSrc');

            document.getElementById("testtext").innerText = text.getAttribute('data-textValue');

        });

    }
});


AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;

        marker.addEventListener('markerFound', function () {
            var markerId = marker.getAttribute('data-name');
            console.log('markerFound', markerId);

            text = marker.children[0];
            console.log(text.getAttribute('data-infoImgSrc'));

            document.getElementById("infoImg").src = text.getAttribute('data-infoImgSrc');

            document.getElementById("testtext").innerText = text.getAttribute('data-textValue');


            if (markerId == 'recycle') {
                console.log("changing style");
                document.getElementById("map").style.display = 'block';
                document.getElementById("modal").style.display = 'none';

            }



        });
        marker.addEventListener('markerLost', function () {
            document.getElementById("map").style.display = 'none';
            document.getElementById("modal").style.display = 'block';
        });

    }
});




function directTo(index) {
    var urlArray = ['https://support.logi.com/hc/en-us/articles/360025337813-FAQ-G910-Orion-Spectrum-RGB-Mechanical-Gaming-Keyboard',
        'https://support.logi.com/hc/en-us/articles/360025407993-Spare-Parts-G910-Orion-Spectrum-RGB-Mechanical-Gaming-Keyboard',
        'https://www.logitech.com/en-us/sustainability/recycling.html',
        'https://buy.logitech.com/store?Action=DisplayPage&Locale=en_US&SiteID=logib2c&id=ThreePgCheckoutShoppingCartPage',
        'https://buy.logitech.com/store/logib2c/AddItemRefID/pageType.shoppingCart/externalRefID.993-001468/Locale.en_US/quantity.1',
    //    tilt leg
    'https://buy.logitech.com/store/logib2c/AddItemRefID/pageType.shoppingCart/externalRefID.993-001576/Locale.en_US/quantity.1',
        // 'usb'
        'https://buy.logitech.com/store/logib2c/AddItemRefID/pageType.shoppingCart/externalRefID.993-000293/Locale.en_US/quantity.1'
    ];

    window.open(urlArray[index]);
}