
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


AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;

        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);
            text = marker.children[0];

            document.getElementById("infoImg").src = text.getAttribute('data-infoImgSrc');

            document.getElementById("testtext").innerText = text.getAttribute('data-textValue');

            if (markerId == 0) {
                document.getElementById("map").style.display = 'block';
   
            }



        });
        marker.addEventListener('markerLost', function () {
            document.getElementById("map").style.display = 'none';
        });

    }
});


function directTo(index) {
    var urlArray = ['https://support.logi.com/hc/en-us/articles/360025337813-FAQ-G910-Orion-Spectrum-RGB-Mechanical-Gaming-Keyboard','https://support.logi.com/hc/en-us/articles/360025407993-Spare-Parts-G910-Orion-Spectrum-RGB-Mechanical-Gaming-Keyboard', 'https://www.logitech.com/en-us/sustainability/recycling.html'];
    window.open(urlArray[index]);
}