
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

AFRAME.registerComponent('autoscale', {schema: {type: 'number', default: 1},
    init: function () {
        this.scale();this.el.addEventListener('object3dset', () => this.scale());},scale: function () {
        const el = this.el;
        const span = this.data;
        const mesh = el.getObject3D('mesh');
        if (!mesh) return;
        const bbox = new THREE.Box3().setFromObject(mesh);
        const scale = span / bbox.getSize().length();
        var sx = this.el.getAttribute('scale').x;
        var sy = this.el.getAttribute('scale').y;
        var sz = this.el.getAttribute('scale').z;

        var rx = this.el.getAttribute('rotation').x * (Math.PI / 180);
        var ry = this.el.getAttribute('rotation').y * (Math.PI / 180);
        var rz = this.el.getAttribute('rotation').z * (Math.PI / 180);
        mesh.rotation.set(rx,ry,rz);
        mesh.scale.set(scale*sx, scale*sy, scale*sz);

        var a = new THREE.Box3().setFromObject(this.el.object3D);
        var cx = (a.min.x + a.max.x)/2;
        var cy = (a.min.y + a.max.y)/2;
        var cz = (a.min.z + a.max.z)/2;
        var posx = this.el.object3D.position.x;
        var posy = this.el.object3D.position.y;
        var posz = this.el.object3D.position.z;
        console.log("boundingBox xyz: x: "+cx+", y: "+cy+" z: "+cz);
        console.log("box position xyz: x: "+posx+", y: "+posy+" z: "+posz);
        var translateX = posx - cx;
        var translateY = posy - cy;
        var translateZ = posz - cz;
        this.el.object3DMap.mesh.translateX(translateX/sx);
        this.el.object3DMap.mesh.translateY(translateY/sy);
        this.el.object3DMap.mesh.translateZ(translateZ/sz);
    }
});

AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;

        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);
            text = marker.children[0];
            console.log(text.getAttribute('data-infoImgSrc'));

            document.getElementById("infoImg").src = text.getAttribute('data-infoImgSrc');

            document.getElementById("testtext").innerText = text.getAttribute('data-textValue');

            if (markerId == 0) {
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