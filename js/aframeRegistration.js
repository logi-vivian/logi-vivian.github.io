//This file creates component events and functions used across the demo.
//Component events can be called upon in the by appending them as attributes in the a-entities


//Following line must be included to fix a bug of the ar.js library.
THREEx.ArToolkitContext.baseURL = 'https://rawgit.com/jeromeetienne/ar.js/master/three.js/';

//Event component to register when a marker is found or lost and propagate changes in the modal (change of text or image).
AFRAME.registerComponent('registerevents', {

    init: function () {

        var marker = this.el;

        //Event that is triggered when the marker moves into the camera view.
        marker.addEventListener('markerFound', function () {

            var markerId = marker.getAttribute('data-name');

            console.log('markerFound', markerId);

            text = marker.children[0];

            // For swapping the text and image of the modal, mainly used for the onboardingConcept.html
            document.getElementById("infoImg").src = text.getAttribute('data-infoImgSrc');
            document.getElementById("testtext").innerText = text.getAttribute('data-textValue');


            // For displaying a nearby recycling overlay, triggered only on one marker code's ID
            if (markerId == 'recycle') {

                document.getElementById("map").style.display = 'block';
                document.getElementById("modal").style.display = 'none';

            }



        });

        //Event that is triggered when the marker moves out of the camera view.
        marker.addEventListener('markerLost', function () {
            document.getElementById("map").style.display = 'none';
            document.getElementById("modal").style.display = 'block';
        });

    }
});


//Redirect function connecting overlays to the www.
//Takes in an index that refers to a url stored at the index of the array.

function directTo(index) {
    var urlArray = ['https://support.logi.com/hc/en-us/articles/360025337813-FAQ-G910-Orion-Spectrum-RGB-Mechanical-Gaming-Keyboard',
        'https://support.logi.com/hc/en-us/articles/360025407993-Spare-Parts-G910-Orion-Spectrum-RGB-Mechanical-Gaming-Keyboard',
        'https://www.logitech.com/en-us/sustainability/recycling.html',
        'https://buy.logitech.com/store?Action=DisplayPage&Locale=en_US&SiteID=logib2c&id=ThreePgCheckoutShoppingCartPage',
        'https://buy.logitech.com/store/logib2c/AddItemRefID/pageType.shoppingCart/externalRefID.993-001468/Locale.en_US/quantity.1',
        'https://buy.logitech.com/store/logib2c/AddItemRefID/pageType.shoppingCart/externalRefID.993-001576/Locale.en_US/quantity.1',
        'https://buy.logitech.com/store/logib2c/AddItemRefID/pageType.shoppingCart/externalRefID.993-000293/Locale.en_US/quantity.1'
    ];

    window.open(urlArray[index]);
}