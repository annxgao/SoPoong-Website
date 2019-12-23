//When the document is ready
$(document).ready(function(){
  var windowWidth = $(window).width();

  //when click next, you can see the next photos
  var foodimages = [
  "images/food-gallery/ddukbokki.jpg", //index 0
  "images/food-gallery/jjajang.jpg", //index 1
  "images/food-gallery/kimbap.jpg", //index 2
  "images/food-gallery/spicynoodle.jpg", //index 3
  "images/food-gallery/spicypork.jpg", //index 4
  "images/food-gallery/udon.jpg" //index 5
  ];

  var foodname = ["ddukbokki", "jjajang", "kimbap", "spicynoodle", "spicypork", "udon"]

  //The index of three images for food
  var currentIndex1 = 0;
  var currentIndex2 = 1;
  var currentIndex3 = 2;

  $("#foodgalleryNext").on("click", function () {
    $("#description1").addClass("hidden");
    $("#description2").addClass("hidden");
    $("#description3").addClass("hidden");
    $("#foodimage1").removeClass("hidden");
    $("#foodimage2").removeClass("hidden");
    $("#foodimage3").removeClass("hidden");

    if (currentIndex3 == 0) {
      currentIndex1 +=1;
      currentIndex2 = 0;
      currentIndex3 = 1;
    } else if (currentIndex3 ==1) {
      currentIndex1 = 0;
      currentIndex2 = 1;
      currentIndex3 = 2;
    } else if (currentIndex3 < foodimages.length - 1) {
      currentIndex1 +=1;
      currentIndex2 +=1;
      currentIndex3 +=1;
    } else if (currentIndex3 == foodimages.length - 1) {
      currentIndex1 +=1;
      currentIndex2 +=1;
      currentIndex3 = 0;
    }

    $("#foodimage1").attr("src",foodimages[currentIndex1]);
    $("#foodimage2").attr("src",foodimages[currentIndex2]);
    $("#foodimage3").attr("src",foodimages[currentIndex3]);
    $("#foodimage1").attr("alt",foodname[currentIndex1]);
    $("#foodimage2").attr("alt",foodname[currentIndex2]);
    $("#foodimage3").attr("alt",foodname[currentIndex3]);
  });

  //when click the picture, you can see the description

  var description = [
    "This is Ddukboki. It consists of rice cakes and fish cakes with spicy sauce. You can add cheese, egg or any meat.",
    "This is Jia Jang Udon. It has udon noodles, with onion, potatoes and black bean sauce. You can add egg, shrimp tempura or any meat.",
    "This is Kimbap. It has rice, carrot, spinach, pickled radish and egg rolled in dried seaweed. You currently have 7 options: sausage, tuna, spicy tuna, beef, chicken, spicy pork, veggie.",
    "This is Bibim Udon. It is cold udon noodles with egg and vegetables with spicy sauce. You can add any meat",
    "This is Jaeyook Bokeum Bap. It is pork and vegetables, stir-fried in spicy sauce, and served over rice with a fried egg.",
    "This is Udon. It has udon noodles with vegetable broth. You can add any meat, egg or shrimp tempura."]

  $("#description1").addClass("hidden");
  $("#description2").addClass("hidden");
  $("#description3").addClass("hidden");

  //first photo
  $("#foodimage1").on("mouseover", function () {
    $("#foodimage1").addClass("hidden");
    $("#description1").removeClass("hidden");
    document.getElementById("text1").innerHTML=description[currentIndex1];
  });

  $("#description1").on("mouseout", function () {
    $("#foodimage1").removeClass("hidden");
    $("#description1").addClass("hidden");
  });

  //second photo
  $("#foodimage2").on("mouseover", function () {
    $("#foodimage2").addClass("hidden");
    $("#description2").removeClass("hidden");
    document.getElementById("text2").innerHTML=description[currentIndex2];
  });

  $("#description2").on("mouseout", function () {
    $("#foodimage2").removeClass("hidden");
    $("#description2").addClass("hidden");

  });

  //third photo
  $("#foodimage3").on("mouseover", function () {
    $("#foodimage3").addClass("hidden");
    $("#description3").removeClass("hidden");
    document.getElementById("text3").innerHTML=description[currentIndex3];
  });

  $("#description3").on("mouseout", function () {
    $("#foodimage3").removeClass("hidden");
    $("#description3").addClass("hidden");

  });

  //INTERIOR JS

  var interiorimages = [
  "images/food-gallery/inside1.jpg", //index 0
  "images/food-gallery/inside2.jpg", //index 1
  "images/food-gallery/inside3.jpg", //index 2
  "images/food-gallery/inside4.jpg", //index 3
  "images/food-gallery/inside5.jpg", //index 4
  ];

  var interiornum = ["inside1", "inside2", "inside3", "inside4", "inside5"]

  //The index of three interior images
  var currentIndex1 = 0;
  var currentIndex2 = 1;
  var currentIndex3 = 2;

  $("#insidegalleryNext").on("click", function () {
    $("#descriptionInt1").addClass("hidden");
    $("#descriptionInt2").addClass("hidden");
    $("#descriptionInt3").addClass("hidden");
    $("#interiorimage1").removeClass("hidden");
    $("#interiorimage2").removeClass("hidden");
    $("#interiorimage3").removeClass("hidden");

    if (currentIndex3 == 0) {
      currentIndex1 +=1;
      currentIndex2 = 0;
      currentIndex3 = 1;
    } else if (currentIndex3 ==1) {
      currentIndex1 = 0;
      currentIndex2 = 1;
      currentIndex3 = 2;
    } else if (currentIndex3 < interiorimages.length - 1) {
      currentIndex1 +=1;
      currentIndex2 +=1;
      currentIndex3 +=1;
    } else if (currentIndex3 == interiorimages.length - 1) {
      currentIndex1 +=1;
      currentIndex2 +=1;
      currentIndex3 = 0;
    }

    $("#interiorimage1").attr("src",interiorimages[currentIndex1]);
    $("#interiorimage2").attr("src",interiorimages[currentIndex2]);
    $("#interiorimage3").attr("src",interiorimages[currentIndex3]);
    $("#interiorimage1").attr("alt",interiornum[currentIndex1]);
    $("#interiorimage2").attr("alt",interiornum[currentIndex2]);
    $("#interiorimage3").attr("alt",interiornum[currentIndex3]);
  });

  //on click of the picture, you can see the description of the image

  var descriptionInt = [
  "Seating area and the food stall.",
  "Seating area and some interior decorations.",
  "Where you go to place an order for food.",
  "Window seating and some interior decorations.",
  "Close up of the menu."]

  $("#descriptionInt1").addClass("hidden");
  $("#descriptionInt2").addClass("hidden");
  $("#descriptionInt3").addClass("hidden");

  //first photo
  $("#interiorimage1").on("mouseover", function () {
    $("#interiorimage1").addClass("hidden");
    $("#descriptionInt1").removeClass("hidden");
    document.getElementById("textInt1").innerHTML=descriptionInt[currentIndex1];
  });

  $("#descriptionInt1").on("mouseout", function () {
    $("#interiorimage1").removeClass("hidden");
    $("#descriptionInt1").addClass("hidden");
  });

  //second photo
  $("#interiorimage2").on("mouseover", function () {
    $("#interiorimage2").addClass("hidden");
    $("#descriptionInt2").removeClass("hidden");
    document.getElementById("textInt2").innerHTML=descriptionInt[currentIndex2];
  });

  $("#descriptionInt2").on("mouseout", function () {
    $("#interiorimage2").removeClass("hidden");
    $("#descriptionInt2").addClass("hidden");

  });

  //third photo
  $("#interiorimage3").on("mouseover", function () {
    $("#interiorimage3").addClass("hidden");
    $("#descriptionInt3").removeClass("hidden");
    document.getElementById("textInt3").innerHTML=descriptionInt[currentIndex3];
  });

  $("#descriptionInt3").on("mouseout", function () {
    $("#interiorimage3").removeClass("hidden");
    $("#descriptionInt3").addClass("hidden");
  });


  if (windowWidth <= 600) {
    //when click next, you can see the next photos

    var foodimages = [
    "images/food-gallery/ddukbokki.jpg", //index 0
    "images/food-gallery/jjajang.jpg", //index 1
    "images/food-gallery/kimbap.jpg", //index 2
    "images/food-gallery/spicynoodle.jpg", //index 3
    "images/food-gallery/spicypork.jpg", //index 4
    "images/food-gallery/udon.jpg" //index 5
    ];

    var foodname = ["ddukbokki", "jjajang", "kimbap", "spicynoodle", "spicypork", "udon"]

    //The index of three images for food
    var currentIndex1 = 0;
    var currentIndex2 = 1;
    var currentIndex3 = 2;

    $("#foodgalleryNext").on("click", function () {
      $("#description1").addClass("hidden");
      $("#description2").addClass("hidden");
      $("#description3").addClass("hidden");
      $("#foodimage1").removeClass("hidden");
      $("#foodimage2").removeClass("hidden");
      $("#foodimage3").removeClass("hidden");

      if (currentIndex3 == 0) {
        currentIndex1 +=1;
        currentIndex2 = 0;
        currentIndex3 = 1;
      } else if (currentIndex3 ==1) {
        currentIndex1 = 0;
        currentIndex2 = 1;
        currentIndex3 = 2;
      } else if (currentIndex3 < foodimages.length - 1) {
        currentIndex1 +=1;
        currentIndex2 +=1;
        currentIndex3 +=1;
      } else if (currentIndex3 == foodimages.length - 1) {
        currentIndex1 +=1;
        currentIndex2 +=1;
        currentIndex3 = 0;
      }

      $("#foodimage1").attr("src",foodimages[currentIndex1]);
      $("#foodimage2").attr("src",foodimages[currentIndex2]);
      $("#foodimage3").attr("src",foodimages[currentIndex3]);
      $("#foodimage1").attr("alt",foodname[currentIndex1]);
      $("#foodimage2").attr("alt",foodname[currentIndex2]);
      $("#foodimage3").attr("alt",foodname[currentIndex3]);
    });

    //when click the picture, you can see the description

    var description = [
      "This is Ddukboki. It consists of rice cakes and fish cakes with spicy sauce. You can add cheese, egg or any meat.",
      "This is Jia Jang Udon. It has udon noodles, with onion, potatoes and black bean sauce. You can add egg, shrimp tempura or any meat.",
      "This is Kimbap. It has rice, carrot, spinach, pickled radish and egg rolled in dried seaweed. You currently have 7 options: sausage, tuna, spicy tuna, beef, chicken, spicy pork, veggie.",
      "This is Bibim Udon. It is cold udon noodles with egg and vegetables with spicy sauce. You can add any meat",
      "This is Jaeyook Bokeum Bap. It is pork and vegetables, stir-fried in spicy sauce, and served over rice with a fried egg.",
      "This is Udon. It has udon noodles with vegetable broth. You can add any meat, egg or shrimp tempura."]

    $("#description1").addClass("hidden");
    $("#description2").addClass("hidden");
    $("#description3").addClass("hidden");

    //first photo
    $("#foodimage1").on("touchstart", function () {
      $("#foodimage1").addClass("hidden");
      $("#description1").removeClass("hidden");
      document.getElementById("text1").innerHTML=description[currentIndex1];
    });

    $("#description1").on("touchstart", function () {
      $("#foodimage1").removeClass("hidden");
      $("#description1").addClass("hidden");
    });

    //second photo
    $("#foodimage2").on("touchstart", function () {
      $("#foodimage2").addClass("hidden");
      $("#description2").removeClass("hidden");
      document.getElementById("text2").innerHTML=description[currentIndex2];
    });

    $("#description2").on("touchstart", function () {
      $("#foodimage2").removeClass("hidden");
      $("#description2").addClass("hidden");

    });

    //third photo
    $("#foodimage3").on("touchstart", function () {
      $("#foodimage3").addClass("hidden");
      $("#description3").removeClass("hidden");
      document.getElementById("text3").innerHTML=description[currentIndex3];
    });

    $("#description3").on("touchstart", function () {
      $("#foodimage3").removeClass("hidden");
      $("#description3").addClass("hidden");

    });

    //INTERIOR JS

    var interiorimages = [
    "images/food-gallery/inside1.jpg", //index 0
    "images/food-gallery/inside2.jpg", //index 1
    "images/food-gallery/inside3.jpg", //index 2
    "images/food-gallery/inside4.jpg", //index 3
    "images/food-gallery/inside5.jpg", //index 4
    ];

    var interiornum = ["inside1", "inside2", "inside3", "inside4", "inside5"]

    //The index of three interior images
    var currentIndex1 = 0;
    var currentIndex2 = 1;
    var currentIndex3 = 2;

    $("#insidegalleryNext").on("touchstart", function () {
      $("#descriptionInt1").addClass("hidden");
      $("#descriptionInt2").addClass("hidden");
      $("#descriptionInt3").addClass("hidden");
      $("#interiorimage1").removeClass("hidden");
      $("#interiorimage2").removeClass("hidden");
      $("#interiorimage3").removeClass("hidden");

      if (currentIndex3 == 0) {
        currentIndex1 +=1;
        currentIndex2 = 0;
        currentIndex3 = 1;
      } else if (currentIndex3 ==1) {
        currentIndex1 = 0;
        currentIndex2 = 1;
        currentIndex3 = 2;
      } else if (currentIndex3 < interiorimages.length - 1) {
        currentIndex1 +=1;
        currentIndex2 +=1;
        currentIndex3 +=1;
      } else if (currentIndex3 == interiorimages.length - 1) {
        currentIndex1 +=1;
        currentIndex2 +=1;
        currentIndex3 = 0;
      }

      $("#interiorimage1").attr("src",interiorimages[currentIndex1]);
      $("#interiorimage2").attr("src",interiorimages[currentIndex2]);
      $("#interiorimage3").attr("src",interiorimages[currentIndex3]);
      $("#interiorimage1").attr("alt",interiornum[currentIndex1]);
      $("#interiorimage2").attr("alt",interiornum[currentIndex2]);
      $("#interiorimage3").attr("alt",interiornum[currentIndex3]);
    });

    //on click of the picture, you can see the description of the image

    var descriptionInt = [
    "Seating area and the food stall.",
    "Seating area and some interior decorations.",
    "Where you go to place an order for food.",
    "Window seating and some interior decorations.",
    "Close up of the menu."]

    $("#descriptionInt1").addClass("hidden");
    $("#descriptionInt2").addClass("hidden");
    $("#descriptionInt3").addClass("hidden");

    //first photo
    $("#interiorimage1").on("touchstart", function () {
      $("#interiorimage1").addClass("hidden");
      $("#descriptionInt1").removeClass("hidden");
      document.getElementById("textInt1").innerHTML=descriptionInt[currentIndex1];
    });

    $("#descriptionInt1").on("touchstart", function () {
      $("#interiorimage1").removeClass("hidden");
      $("#descriptionInt1").addClass("hidden");
    });

    //second photo
    $("#interiorimage2").on("touchstart", function () {
      $("#interiorimage2").addClass("hidden");
      $("#descriptionInt2").removeClass("hidden");
      document.getElementById("textInt2").innerHTML=descriptionInt[currentIndex2];
    });

    $("#descriptionInt2").on("touchstart", function () {
      $("#interiorimage2").removeClass("hidden");
      $("#descriptionInt2").addClass("hidden");

    });

    //third photo
    $("#interiorimage3").on("touchstart", function () {
      $("#interiorimage3").addClass("hidden");
      $("#descriptionInt3").removeClass("hidden");
      document.getElementById("textInt3").innerHTML=descriptionInt[currentIndex3];
    });

    $("#descriptionInt3").on("touchstart", function () {
      $("#interiorimage3").removeClass("hidden");
      $("#descriptionInt3").addClass("hidden");

    });
  }

});
