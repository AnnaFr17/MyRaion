ymaps.ready(['Panel']).then(function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    var map = new ymaps.Map("map", {
        center: [55.59, 38.11],
        zoom: 13,
        controls: ['zoomControl','rulerControl']
    });
    

    // Создание многоугольника(полигона) как границу города Жуковский
    var myPolygon = new ymaps.Polygon([
        [[55.598929,38.143233],
        [55.613871,38.106680],
        [55.613688,38.106415],
        [55.614103,38.105220],
        [55.612867,38.103847],
        [55.612443,38.105078],
        [55.610707,38.103108],
        [55.610805,38.102824],
        [55.610127, 38.102333],
        [55.610378, 38.101662],
        [55.60936, 38.100089],
        [55.610575, 38.094406],
        [55.610816, 38.094657],
        [55.611223, 38.09157],
        [55.610891, 38.091405],
        [55.611307, 38.088432],
        [55.609126, 38.086055],
        [55.609219, 38.08451],
        [55.609405, 38.084542],
        [55.609469, 38.083093],
        [55.609782, 38.083143],
        [55.609936, 38.083066],
        [55.609933, 38.083066],
        [55.610056, 38.082938],
        [55.610165, 38.082655],
        [55.610205, 38.082375],
        [55.610202, 38.082122],
        [55.610126, 38.081827],
        [55.610126, 38.081826],
        [55.610011, 38.081678],
        [55.609968, 38.08152],
        [55.609686, 38.081317],
        [55.609452, 38.081366],
        [55.609409, 38.081196],
        [55.609586, 38.077991],
        [55.610961, 38.07276],
        [55.612272, 38.073888],
        [55.612504, 38.072826],
        [55.612252, 38.072622],
        [55.612903, 38.070275],
        [55.611862, 38.069274],
        [55.611293, 38.071487],
        [55.609578, 38.069841],
        [55.608729, 38.069186],
        [55.607392, 38.069217],
        [55.607234, 38.069045],
        [55.607304, 38.068829],
        [55.607348, 38.068569],
        [55.607133, 38.067547],
        [55.608058, 38.066358],
        [55.608401, 38.065594],
        [55.607389, 38.06022],
        [55.606514, 38.059341],
        [55.606413, 38.059318],
        [55.605901, 38.059500],
        [55.605878, 38.059255],
        [55.605347, 38.059366],
        [55.605333, 38.058971],
        [55.59953, 38.057059],
        [55.598481, 38.058164],
        [55.598134, 38.058281],
        [55.597734, 38.058577],
        [55.597267, 38.058796],
        [55.596963, 38.058993],
        [55.596076, 38.058752],
        [55.594866, 38.057509],
        [55.595026, 38.056592],
        [55.59499, 38.054582],
        [55.593517, 38.050031],
        [55.590827, 38.044353],
        [55.590316, 38.042682],
        [55.590226, 38.041217],
        [55.590297, 38.03963],
        [55.591392, 38.033313],
        [55.591734, 38.02887],
        [55.590225, 38.026727],
        [55.589638, 38.026377],
        [55.589088, 38.026584],
        [55.583088, 38.035754],
        [55.578921, 38.038112],
        [55.574322, 38.037551],
        [55.569937, 38.03517],
        [55.568458, 38.038985],
        [55.565946, 38.043195],
        [55.572222, 38.057173],
        [55.569403, 38.061776],
        [55.553663, 38.081529],
        [55.549064, 38.086807],
        [55.546369, 38.09246],
        [55.545848, 38.091672],
        [55.545424, 38.092505],
        [55.545729, 38.093009],
        [55.542991, 38.099066],
        [55.541914, 38.103842],
        [55.545363, 38.10455],
        [55.546542, 38.107297],
        [55.547726, 38.109569],
        [55.545352, 38.11217],
        [55.544753, 38.11327],
        [55.544749, 38.113263],
        [55.544757, 38.113263],
        [55.544385, 38.114465],
        [55.544071, 38.118873],
        [55.544216, 38.122778],
        [55.544472, 38.124639],
        [55.546355, 38.130463],
        [55.549205, 38.136677],
        [55.549528, 38.140329],
        [55.54925, 38.143014],
        [55.548576, 38.14449],
        [55.546155, 38.146959],
        [55.540693, 38.150659],
        [55.536752, 38.154452],
        [55.534997, 38.158276],
        [55.534376, 38.162885],
        [55.534056, 38.172449],
        [55.533745, 38.17436],
        [55.532829, 38.176332],
        [55.532168, 38.1769],
        [55.52908, 38.17715],
        [55.529035, 38.179134],
        [55.524515, 38.188081],
        [55.530704, 38.198787],
        [55.5408, 38.179115],
        [55.542658, 38.182099],
        [55.544185, 38.178551],
        [55.54479, 38.180219],
        [55.545176, 38.180493],
        [55.546045, 38.18024],
        [55.546898, 38.179725],
        [55.547215, 38.178619],
        [55.54841, 38.178433],
        [55.548547, 38.178275],
        [55.548646, 38.178078],
        [55.548758, 38.177611],
        [55.54851, 38.176987],
        [55.548695, 38.176579],
        [55.548562, 38.175031],
        [55.548318, 38.174195],
        [55.548437, 38.173621],
        [55.545602, 38.169428],
        [55.549796, 38.16097],
        [55.554379, 38.162721],
        [55.554301, 38.163022],
        [55.560197, 38.167633],
        [55.563306, 38.168989],
        [55.563562, 38.170765],
        [55.566867, 38.17169],
        [55.5671, 38.173926],
        [55.567563, 38.177111],
        [55.569341, 38.177123],
        [55.569098, 38.17235],
        [55.568951, 38.171529],
        [55.569756, 38.171736],
        [55.570217, 38.17146],
        [55.570957, 38.170684],
        [55.571251, 38.170841],
        [55.571393, 38.171098],
        [55.57154, 38.171056],
        [55.571745, 38.171358],
        [55.571881, 38.171475],
        [55.572215, 38.171393],
        [55.572538, 38.170581],
        [55.572786, 38.170642],
        [55.572852, 38.170736],
        [55.573959, 38.168641],
        [55.574503, 38.167756],
        [55.574573, 38.167659],
        [55.576925, 38.161208],
        [55.578674, 38.156349],
        [55.581253, 38.149199],
        [55.581533, 38.148204],
        [55.581717, 38.148077],
        [55.58373, 38.148385],
        [55.583181, 38.144271],
        [55.583288, 38.143761],
        [55.583637, 38.14335],
        [55.584762, 38.141776],
        [55.584917, 38.141679],
        [55.585422, 38.141681],
        [55.58872, 38.142341],
        [55.590256, 38.142692],
        [55.590922, 38.142893],
        [55.592764, 38.143175],
        [55.593797, 38.143334],
        [55.594324, 38.142096],
        [55.595203, 38.140018],
        [55.597947, 38.142488],
        [55.598447, 38.142588], ]
    ], {style: "polygon#Example", 
        hasHint:false,
        hasBalloon: false
    },
     // Создание стиля для многоугольника(полигона)
    {
        fillColor: "#da7e8928",
        strokeColor: "#da7e8990"
    });
    //Добавление многугольника(полигона) на карту 
    map.geoObjects.add(myPolygon);



// Создадим и добавим балун на карту.
var panel = new ymaps.Panel();
map.controls.add(panel, {
  float: 'right'
});



// Контейнер для меню.
menu = $(   '<div class="menu">'
                +'<div class="menu" id="needed">'
                +'<h1 class="heading">Мой Район</h1>'

                +'<input id="onebut" type="submit" value="Дети"/>'
                +'<div id="one" class ="Kids" style="display: none;">'
                +'</div>'

                +'<input id="twobut" type="submit" value="Спорт"/>'
                +'<div id="two" class ="Sport" style="display: none;">'
                +'</div>'

                +'<input id="threebut" type="submit" value="Развитие"/>'
                +'<div id="three" class ="Education" style="display: none;">'
                +'</div>'

                +'<input id="fourbut" type="submit" value="Питомцы"/>'
                +'<div id="four" class ="Pets" style="display: none;">'
                +'</div>'

                +'<input id="fivebut" type="submit" value="Магазины"/>'
                +'<div id="five" class ="Shops" style="display: none;">'
                +'</div>'

                +'<input id="sixbut" type="submit" value="Эко"/>'
                +'<div id="six" class ="Eco" style="display: none;">'
                +'</div>'

                +'<input id="sevenbut" type="submit" value="Парки"/>'
                +'<div id="seven" class ="Parks" style="display: none;">'
                +'</div>'

                +'<a href="https://docs.google.com/document/d/1d0RL4lE263fLTOEyrib-uj4xtSl3YHZjsbu1wYZ_4ZE/edit?usp=sharing" target="_blank" class="spravka">Справка</a>'
                +'</div>'
                +'<script src="submenuopenscript.js" type="text/javascript"></script></div>');


for (var i = 0, n = groups.length; i < n; i++) {
     createMenuGroup(groups[i]);
}


function createMenuGroup (group) {
    // Пункт меню.
    //var menuItem = $('<input id="1but" type="submit" value="otkrit"/><div id="1" style="display: none;"><li><a href="#">' + group.name + '</a></li></div>');
    var menuItem = $('<li><a href="#">' + group.name + '</a></li>');
    //создаем коллекцию в которую занесем метки и будем их вызывать
    var collectionTwo = new ymaps.GeoObjectCollection(null, { hasBalloon: false});

    // Добавляем коллекцию на карту.
    // Добавляем элементы меню.

    menuItem
    .appendTo(menu)
    // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
    .find('a')
    .bind('click', function () { //если ключевое слово не активно(не нажали), тогда убираем марки
        if (collectionTwo.getParent()) {
            map.geoObjects.remove(collectionTwo);
        } else {
            map.geoObjects.add(collectionTwo)
        }
    });
  
    
    //заполняет коллекцию информацией о метках
    for (var j = 0, m = group.items.length; j < m; j++) {
        createPlacemark(group.items[j], collectionTwo, group);
    };

    // Подпишемся на событие клика по коллекции.
    collectionTwo.events.add('click', function (e) {
    // Получим ссылку на геообъект, по которому кликнул пользователь.
    var target = e.get('target');
    // Зададим контент балуна.
    panel.setContent(target.properties.get('balloonContent'));
    // Переместим центр карты по координатам метки с учётом заданных отступов.
    map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
    });
    
    // Добавляем меню в тэг BODY.
    menu.appendTo($('body'));
    if (group.name == "Детские площадки" || group.name == "Детские комнаты" || group.name == "Детские центры") {
        $('.Kids').append(menuItem);
    }else if(group.name == "Спортивные площадки" || group.name == "Бассейны"){
        $('.Sport').append(menuItem);
    }else if(group.name == "Центры изучения иностранных языков" || group.name == "Школы танцев"){
        $('.Education').append(menuItem);
    }else if(group.name == "Площадки для выгула собак" || group.name == "Питомники" || group.name == "Гостиницы для животных"|| group.name == "Ветеринарные клиники"){
        $('.Pets').append(menuItem);
    }else if(group.name == "Торговые центры" ){
        $('.Shops').append(menuItem);
    }else if(group.name == "Пункты приема вторсырья" ){
        $('.Eco').append(menuItem);
    }else if(group.name == "Парки и скверы" ){
        $('.Parks').append(menuItem);
    }
}




function createPlacemark (item, collection, group) {
// Создаем метку
        //сначала определяем подкатегорию

        if ((item.name == "Детская площадка")||(item.name == "Cпортивная площадка")||(item.name == "Площадка для выгула собак")||(item.name == "Бассейн")){
           var safetyRating = ratingDefenition(item.condition.safety);
           var modernRating = ratingDefenition(item.condition.modern);
           var conditionRating = ratingDefenition(item.condition.condition);
           var clearityRating = ratingDefenition(item.condition.clearity);
           var photoElements = photoDefenition(item.photo);
           var name = item.name;
           var adress = item.adress;

           var template = template100
           var featuresDefenition = '';
            Object.keys(item.features).forEach(i => {
                featuresDefenition +=  `<li>${item.features[i]}</li>` 
            });
            
            var commentsDefenition = '';
            Object.keys(item.comments).forEach(i => {
                commentsDefenition +=  `<p>${item.comments[i]}</p>` 
            });
        
           //$.globalEval(photoElements,name,adress,safetyRating,modernRating,conditionRating,clearityRating,featuresDefenition,commentsDefenition);
    

        }
       
        let template100 =  
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
        +'<li>Современность ' 
            +`<div class="rating-mini">${modernRating}` 
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

        placemark = new ymaps.Placemark(item.center, { balloonContent: template},{ iconLayout: 'default#image', iconImageHref: `${group.name}.svg`});
    // Добавляем метку в коллекцию.
    collection.add(placemark);      
}

function ratingDefenition(condition){
    let elem = '';
    if (condition) {
        for (let i = 0; i < 5; i++) {
            if (i < condition) {
                elem += '<span class="active"></span>';   
            }
            else{
                elem += '<span></span>';
            }
        }
    }
    return elem;
    
}

function photoDefenition(photos){
    let elem = '';
    if (photos > 0) {
        for (let i = 0; i < photos; i++) {
                elem += `<img src="Photos/${group.name}/${item.address} ${i+1}.png">`;    
        }
    }
    return elem;
    
}
}); 

