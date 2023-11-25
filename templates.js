let template1 =  
'<div id="js-carousel-1">'
    +'<div class="owl-carousel">'
        +`<div class="carousel-item">${$.photoElements}</div>`
    +'</div>'
    +'<p>'
        +'<button class="js-prev"><</button>'
        +'<button class="js-next">></button>'
    +'</p>'
+'</div>'
    +'<script'
        +'src="https://code.jquery.com/jquery-3.6.3.min.js"'
        +'integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="'
        +'crossorigin="anonymous">'
    +'</script>'
    +'<script src="owl.carousel.min.js"></script>'
    +'<script src="photoWheel.js" type="text/javascript"></script>'
    +`<h1 style="font-weight: 500;" class="SideMenu NameOfMarker">${$.name}</h1>`
    +`<p class="SideMenu Address">${$.address}</p>`
    +'<hr>'
    +'<p class="SideMenu ConditionsOfPlaygrounds">Состояние</p>'
    +'<ul class="ConditionsOfPlaygroundsList">'
    +'<li>Безопасность ' 
        +`<div class="rating-mini">${$.safetyRating}` 
    +'</div></li>'
    +'<li>Современность ' 
        +`<div class="rating-mini">${$.modernRating}` 
    +'</div></li>'
    +'<li>Состояние ' 
        +`<div class="rating-mini">${$.conditionRating}` 
    +'</div></li>'
    +'<li>Чистота ' 
        +`<div class="rating-mini">${$.clearityRating}` 
    +'</div></li>'
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Особенности</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${$.featuresDefenition}`
    +'</ul>'
    +'<hr>'
    +'<div class="reviewbox">'
    +'<div class="reviews">'
        +`${$.commentsDefenition}`
    +'</div>'
    +'<form name="publish">'
        +'<input id="userNameMessage" type="text" name="message" placeholder="Ваше Имя" maxlength="50"/><br>'
        +'<input id="message" type="text" name="messages" placeholder="Ваш отзыв" maxlength="300"/>'
        +'<input id="coord" type="text" value="[55.571262,38.097365]" style="display: none;"/>'
        +'<p style="display: none;" id ="hiddenElement">Отзыв отправлен на проверку</p>'
        +'<input id="submit" type="submit" value="Отправить"/>'
    +'</form>'
    +'</div>'
    +'<script src="reviews.js" type="text/javascript"></script>';


let template2 =  
'<div id="js-carousel-1">'
    +'<div class="owl-carousel">'
        +`<div class="carousel-item">${$.photoElements}</div>`
    +'</div>'
    +'<p>'
        +'<button class="js-prev"><</button>'
        +'<button class="js-next">></button>'
    +'</p>'
+'</div>'
    +'<script'
        +'src="https://code.jquery.com/jquery-3.6.3.min.js"'
        +'integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="'
        +'crossorigin="anonymous">'
    +'</script>'
    +'<script src="owl.carousel.min.js"></script>'
    +'<script src="photoWheel.js" type="text/javascript"></script>'
    +`<h1 style="font-weight: 500;" class="SideMenu NameOfMarker">${$.name}</h1>`
    +`<p class="SideMenu Address">${$.address}</p>`
    +'<hr>'
    +'<p class="SideMenu Features">Магазины</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${$.shopsDefenition}`
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Кафе</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${$.cafeDefenition}`
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Организации</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${$.organizationsDefenition}`
    +'</ul>'
    +'<p class="SideMenu Features">Особенности</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${$.featuresDefenition}`
    +'</ul>'
    +'<hr>'
    +'<div class="reviewbox">'
    +'<div class="reviews">'
        +`${$.commentsDefenition}`
    +'</div>'
    +'<form name="publish">'
        +'<input id="userNameMessage" type="text" name="message" placeholder="Ваше Имя" maxlength="50"/><br>'
        +'<input id="message" type="text" name="messages" placeholder="Ваш отзыв" maxlength="300"/>'
        +'<input id="coord" type="text" value="[55.571262,38.097365]" style="display: none;"/>'
        +'<p style="display: none;" id ="hiddenElement">Отзыв отправлен на проверку</p>'
        +'<input id="submit" type="submit" value="Отправить"/>'
    +'</form>'
    +'</div>'
    +'<script src="reviews.js" type="text/javascript"></script>';

let template3 =
'<div id="js-carousel-1">'
    +'<div class="owl-carousel">'
        +`<div class="carousel-item">${photoElements}</div>`
    +'</div>'
    +'<p>'
        +'<button class="js-prev"><</button>'
        +'<button class="js-next">></button>'
    +'</p>'
+'</div>'
    +'<script'
        +'src="https://code.jquery.com/jquery-3.6.3.min.js"'
        +'integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="'
        +'crossorigin="anonymous">'
    +'</script>'
    +'<script src="owl.carousel.min.js"></script>'
    +'<script src="photoWheel.js" type="text/javascript"></script>'
    +`<h1 style="font-weight: 500;" class="SideMenu NameOfMarker">${item.name}</h1>`
    +`<p class="SideMenu Address">${item.address}</p>`
    +'<hr>'
    +'<p class="SideMenu Features">Программы</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${programsDefenition}`
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Особенности</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${featuresDefenition}`
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Организации</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${contactsDefenition}`
    +'</ul>'
    +'<hr>'
    +'<div class="reviewbox">'
    +'<div class="reviews">'
        +`${commentsDefenition}`
    +'</div>'
    +'<form name="publish">'
        +'<input id="userNameMessage" type="text" name="message" placeholder="Ваше Имя" maxlength="50"/><br>'
        +'<input id="message" type="text" name="messages" placeholder="Ваш отзыв" maxlength="300"/>'
        +'<input id="coord" type="text" value="[55.571262,38.097365]" style="display: none;"/>'
        +'<p style="display: none;" id ="hiddenElement">Отзыв отправлен на проверку</p>'
        +'<input id="submit" type="submit" value="Отправить"/>'
    +'</form>'
    +'</div>'
    +'<script src="reviews.js" type="text/javascript"></script>';

    let template4 =
'<div id="js-carousel-1">'
    +'<div class="owl-carousel">'
        +`<div class="carousel-item">${photoElements}</div>`
    +'</div>'
    +'<p>'
        +'<button class="js-prev"><</button>'
        +'<button class="js-next">></button>'
    +'</p>'
+'</div>'
    +'<script'
        +'src="https://code.jquery.com/jquery-3.6.3.min.js"'
        +'integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="'
        +'crossorigin="anonymous">'
    +'</script>'
    +'<script src="owl.carousel.min.js"></script>'
    +'<script src="photoWheel.js" type="text/javascript"></script>'
    +`<h1 style="font-weight: 500;" class="SideMenu NameOfMarker">${item.name}</h1>`
    +`<p class="SideMenu Address">${item.address}</p>`
    +'<hr>'
    +'<p class="SideMenu Features">Услуги</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${servicesDefenition}`
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Особенности</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${featuresDefenition}`
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Контакты</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${contactsDefenition}`
    +'</ul>'
    +'<hr>'
    +'<div class="reviewbox">'
    +'<div class="reviews">'
        +`${commentsDefenition}`
    +'</div>'
    +'<form name="publish">'
        +'<input id="userNameMessage" type="text" name="message" placeholder="Ваше Имя" maxlength="50"/><br>'
        +'<input id="message" type="text" name="messages" placeholder="Ваш отзыв" maxlength="300"/>'
        +'<input id="coord" type="text" value="[55.571262,38.097365]" style="display: none;"/>'
        +'<p style="display: none;" id ="hiddenElement">Отзыв отправлен на проверку</p>'
        +'<input id="submit" type="submit" value="Отправить"/>'
    +'</form>'
    +'</div>'
    +'<script src="reviews.js" type="text/javascript"></script>';

    let template5 =
    '<div id="js-carousel-1">'
    +'<div class="owl-carousel">'
        +`<div class="carousel-item">${photoElements}</div>`
    +'</div>'
    +'<p>'
        +'<button class="js-prev"><</button>'
        +'<button class="js-next">></button>'
    +'</p>'
+'</div>'
    +'<script'
        +'src="https://code.jquery.com/jquery-3.6.3.min.js"'
        +'integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="'
        +'crossorigin="anonymous">'
    +'</script>'
    +'<script src="owl.carousel.min.js"></script>'
    +'<script src="photoWheel.js" type="text/javascript"></script>'
    +`<h1 style="font-weight: 500;" class="SideMenu NameOfMarker">${item.name}</h1>`
    +`<p class="SideMenu Address">${item.address}</p>`
    +'<hr>'
    +'<p class="SideMenu ConditionsOfPlaygrounds">Состояние</p>'
    +'<ul class="ConditionsOfPlaygroundsList">'
    +'<li>Безопасность ' 
        +`<div class="rating-mini">${safetyRating}` 
    +'</div></li>'
    +'<li>Озелененность ' 
        +`<div class="rating-mini">${landscapingRating}` 
    +'</div></li>'
    +'<li>Расположение ' 
        +`<div class="rating-mini">${locationRating}` 
    +'</div></li>'
    +'<li>Состояние ' 
        +`<div class="rating-mini">${conditionRating}` 
    +'</div></li>'
    +'<li>Чистота ' 
        +`<div class="rating-mini">${clearityRating}` 
    +'</div></li>'
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Особенности</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${featuresDefenition}`
    +'</ul>'
    +'<hr>'
    +'<div class="reviewbox">'
    +'<div class="reviews">'
        +`${commentsDefenition}`
    +'</div>'
    +'<form name="publish">'
        +'<input id="userNameMessage" type="text" name="message" placeholder="Ваше Имя" maxlength="50"/><br>'
        +'<input id="message" type="text" name="messages" placeholder="Ваш отзыв" maxlength="300"/>'
        +'<input id="coord" type="text" value="[55.571262,38.097365]" style="display: none;"/>'
        +'<p style="display: none;" id ="hiddenElement">Отзыв отправлен на проверку</p>'
        +'<input id="submit" type="submit" value="Отправить"/>'
    +'</form>'
    +'</div>'
    +'<script src="reviews.js" type="text/javascript"></script>';

     let template6 =
     '<div id="js-carousel-1">'
    +'<div class="owl-carousel">'
        +`<div class="carousel-item">${photoElements}</div>`
    +'</div>'
    +'<p>'
        +'<button class="js-prev"><</button>'
        +'<button class="js-next">></button>'
    +'</p>'
+'</div>'
    +'<script'
        +'src="https://code.jquery.com/jquery-3.6.3.min.js"'
        +'integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="'
        +'crossorigin="anonymous">'
    +'</script>'
    +'<script src="owl.carousel.min.js"></script>'
    +'<script src="photoWheel.js" type="text/javascript"></script>'
    +`<h1 style="font-weight: 500;" class="SideMenu NameOfMarker">${item.name}</h1>`
    +`<p class="SideMenu Address">${item.address}</p>`
    +'<hr>'
    +'<p class="SideMenu Features">Породы</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${breedsDefenition}`
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Услуги</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${servicesDefenition}`
    +'</ul>'
    +'<hr>'
    +'<p class="SideMenu Features">Контакты</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${contactssDefenition}`
    +'</ul>'
    +'<p class="SideMenu Features">Особенности</p>'
    +`<ul class="FeaturesOfPlaygroundsList">${featuresDefenition}`
    +'</ul>'
    +'<hr>'
    +'<div class="reviewbox">'
    +'<div class="reviews">'
        +`${commentsDefenition}`
    +'</div>'
    +'<form name="publish">'
        +'<input id="userNameMessage" type="text" name="message" placeholder="Ваше Имя" maxlength="50"/><br>'
        +'<input id="message" type="text" name="messages" placeholder="Ваш отзыв" maxlength="300"/>'
        +'<input id="coord" type="text" value="[55.571262,38.097365]" style="display: none;"/>'
        +'<p style="display: none;" id ="hiddenElement">Отзыв отправлен на проверку</p>'
        +'<input id="submit" type="submit" value="Отправить"/>'
    +'</form>'
    +'</div>'
    +'<script src="reviews.js" type="text/javascript"></script>';
    
    let template7 =
    '<div id="js-carousel-1">'
   +'<div class="owl-carousel">'
       +`<div class="carousel-item">${photoElements}</div>`
   +'</div>'
   +'<p>'
       +'<button class="js-prev"><</button>'
       +'<button class="js-next">></button>'
   +'</p>'
+'</div>'
   +'<script'
       +'src="https://code.jquery.com/jquery-3.6.3.min.js"'
       +'integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="'
       +'crossorigin="anonymous">'
   +'</script>'
   +'<script src="owl.carousel.min.js"></script>'
   +'<script src="photoWheel.js" type="text/javascript"></script>'
   +`<h1 style="font-weight: 500;" class="SideMenu NameOfMarker">${item.name}</h1>`
   +`<p class="SideMenu Address">${item.address}</p>`
   +'<hr>'
   +'<p class="SideMenu Features">Что можно сдавать</p>'
   +`<ul class="FeaturesOfPlaygroundsList">${itemsforrecyclingDefenition}`
   +'</ul>'
   +'<hr>'
   +'<p class="SideMenu Features">Куда пойдут вещи</p>'
   +`<ul class="FeaturesOfPlaygroundsList">${whereitgoDefenition}`
   +'</ul>'
   +'<hr>'
   +'<p class="SideMenu Features">Контакты</p>'
   +`<ul class="FeaturesOfPlaygroundsList">${contactssDefenition}`
   +'</ul>'
   +'<hr>'
   +'<div class="reviewbox">'
   +'<div class="reviews">'
       +`${commentsDefenition}`
   +'</div>'
   +'<form name="publish">'
       +'<input id="userNameMessage" type="text" name="message" placeholder="Ваше Имя" maxlength="50"/><br>'
       +'<input id="message" type="text" name="messages" placeholder="Ваш отзыв" maxlength="300"/>'
       +'<input id="coord" type="text" value="[55.571262,38.097365]" style="display: none;"/>'
       +'<p style="display: none;" id ="hiddenElement">Отзыв отправлен на проверку</p>'
       +'<input id="submit" type="submit" value="Отправить"/>'
   +'</form>'
   +'</div>'
   +'<script src="reviews.js" type="text/javascript"></script>';
   
