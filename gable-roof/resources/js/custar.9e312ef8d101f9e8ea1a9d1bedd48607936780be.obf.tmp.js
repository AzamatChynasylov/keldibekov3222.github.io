/** НЕИЗМЕНЯЕМЫЙ КОД { **/
function isExists(data, requeredFieldsNames) {
    // Вернет false если не все обязательные поля представлены и true - если все на месте 

    var existsFieldsNames = Object.keys(data);

    for (var i = 0; i < requeredFieldsNames.length; i++) {
        if (existsFieldsNames.indexOf(requeredFieldsNames[i]) === -1) {
            return false;
        }
    }

    return true;
}


function isFullFilled(data, requeredFilledFieldsNames) {
    var fieldsNames = Object.keys(data);


    for (var i = 0; i < fieldsNames.length; i++) {
        if (requeredFilledFieldsNames.indexOf(fieldsNames[i]) > -1 && (data[fieldsNames[i]] === '' || data[fieldsNames[i]] === null || typeof data[fieldsNames[i]] === 'undefined')) {
            return false;
        }
    }

    return true;
}

function toNumerical(data) {
    var fieldsNames = Object.keys(data);

    for (var i = 0; i < fieldsNames.length; i++) {
        data[fieldsNames[i]] = data[fieldsNames[i]].replace(/,/g, '.');
        data[fieldsNames[i]] = data[fieldsNames[i]].replace(/[-\/;":'a-zA-Zа-яА-Я]/g, '');
        if (data[fieldsNames[i]] === '') data[fieldsNames[i]] = 0;
    }

    return data;
}
/** } НЕИЗМЕНЯЕМЫЙ КОД **/


function calculate(data) {
    /** Функция берется из исходного калькулятора, а результат расчета форматируется в псевдо-JSON **/
    /** По большей части будет изменяться только эта функция
     *   поля type, area, parameter должны присутствовать в передаваемых данных и всегда должны
     *   быть заполнены, иначе нельзя будет произвести расчет, поэтому их нужно перечислить 
     *   в функциях isExists и isFullFilled, представленных ниже
     **/

     
    /** НЕИЗМЕНЯЕМЫЙ КОД { **/
    // Если того требует расчет проверим, что все поля присутствуют
    // !!! Меняется список полей в зависимости от калькулятора

    if (isExists(data, ['cableGrade','cableLength','typeDrum']) === false) {
        return {
            error: 'Ошибка: Не все начальные данные переданы для расчета'
        }
    }

    // Преобразовать все параметры в числовые значения
    data = toNumerical(data);

    // Если того требует расчет, проверим, что все поля заполнены
    // !!! Меняется список полей в зависимости от калькулятора
    if (isFullFilled(data, ['cableGrade','cableLength','typeDrum']) === false) {
        return {
            error: 'Ошибка: Не все начальные данные содержат необходимые значения'
        }
    }
    /** } НЕИЗМЕНЯЕМЫЙ КОД **/
    
    
    /** ПЕРЕМЕННЫЕ И АЛГОРИТМЫ РАСЧЕТА **/

    dataArray = new Array();
    dataArray[0] = 0;
    dataArray[1] = 43;
    dataArray[2] = 96;
    dataArray[3] = 132;
    dataArray[4] = 217;
    dataArray[5] = 308;
    dataArray[6] = 367;
    dataArray[7] = 535;
    dataArray[8] = 763;
    dataArray[9] = 965;

    var cableGradeVar = data.cableGrade;
    var cableLengthVar = data.cableLength;
    var typeDrumVar = data.typeDrum;

    if(isNaN())
    var res = cableGradeVar * cableLengthVar + dataArray[typeDrumVar];
    var res_1km = cableGradeVar * 1000;
    var res_kg = 1 / cableGradeVar;

    if(isFinite(res_kg)){
        res_kg = res_kg.toFixed(2);
        res_kg = res_kg.toString(); 
        res_kg = res_kg.replace('\.', '.'); 
        res_kg = res_kg + " м";  
      
    }else{
        res_kg = "0.00 м";  
    }

    if(isNaN(res)){
        res = "0.00";
        res_1km = "0.00";
    }else{
        res = res.toFixed(2);
        res = res.toString();
        res = res.replace('\.', '.');
        res = res + " кг";
        res_1km = res_1km.toFixed(2);
        res_1km = res_1km.toString();
        res_1km = res_1km.replace('\.', '.');
        res_1km = res_1km + " кг";
       
    }

    var result = {
        res: res,
        res_1km: res_1km,
        res_kg: res_kg,
    };

    return result;
}






function showResult(data) {
    /** Можно кастомизировать/форматировать результаты для визуализации расчета каждого конкретного калькулятора. Часть функционала функции можно заимствовать из исходного калькулятора. **/
    var msg = "";
    if (data.error) {
        msg = '<span>' + data.error + '</span>';
    } else {
        // Эта часть правится в зависимости от выдачи результата расчета
    msg = '<div>Вес кабеля (общий): ' + data.res + '<br />Вес кабеля (1000 м): ' + data.res_1km + '<br />Длина кабеля (1 кг): ' + data.res_kg + '</div>';

    }
  
    $('#js--resultDataContent').html(msg);
}

function form2json(jsForm) {
    var formArr = jsForm.serializeArray();

    var res = {};
    for (var i = 0; i < formArr.length; i++) {
        res[formArr[i].name] = formArr[i].value;
    }

    return res;
}

/** ---------- ВХОДНАЯ ТОЧКА: Отсюда начинается расчет (после нажатия на кнопку submit в форме калькулятора) ---------  **/
$("#js--calcModelForm").submit(function(event) {
    event.preventDefault();

    /** Получить входные данные **/
    var modelData = form2json($(this));

    /** Псевдо-запрос на сервер **/
    var resultData = calculate(modelData);

    /** Показать результаты расчета (может быть кастомизирована в реализации для отображения данных в нужном виде) **/
    showResult(resultData);
});

(function(){
    $("#js--calcModelForm").submit();
})();