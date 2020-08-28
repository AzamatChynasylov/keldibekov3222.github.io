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

    if (isExists(data, ['topLayerSoil','сlimateCoefficient','bottomLayerSoil','numberVertsEarthingSwitch','depthUpperLayerSoil','lengthVerticalEarthing','depthHorizontalGrounding','lengthConnectingStrip','diameterVertical','horizontalGrounding']) === false) {
        return {
            error: 'Ошибка: Не все начальные данные переданы для расчета'
        }
    }

    // Преобразовать все параметры в числовые значения
    data = toNumerical(data);

    // Если того требует расчет, проверим, что все поля заполнены
    // !!! Меняется список полей в зависимости от калькулятора
    if (isFullFilled(data, ['topLayerSoil','сlimateCoefficient','bottomLayerSoil','numberVertsEarthingSwitch','depthUpperLayerSoil','lengthVerticalEarthing','depthHorizontalGrounding','lengthConnectingStrip','diameterVertical','horizontalGrounding']) === false) {
        return {
            error: 'Ошибка: Не все начальные данные содержат необходимые значения'
        }
    }
    /** } НЕИЗМЕНЯЕМЫЙ КОД **/
    
    
    /** ПЕРЕМЕННЫЕ И АЛГОРИТМЫ РАСЧЕТА **/

    var topLayerSoilVar = data.topLayerSoil; // verh
    var сlimateCoefficientVar = data.сlimateCoefficient; // k_verh
    var bottomLayerSoilVar = data.bottomLayerSoil; // nign
    var numberVertsEarthingSwitchVar = data.numberVertsEarthingSwitch; // vert

    var depthUpperLayerSoilVar = data.depthUpperLayerSoil; // g_verh
    var lengthVerticalEarthingVar = data.lengthVerticalEarthing; // l_vert
    var depthHorizontalGroundingVar = data.depthHorizontalGrounding; // g_gorizont
    var lengthConnectingStripVar = data.lengthConnectingStrip; // l_gorizont
    var diameterVerticalVar = data.diameterVertical; // b_vert
    var horizontalGroundingVar = data.horizontalGrounding; // b_gorizont
    var voltage = data.voltage;

    var a = document.getElementById('topLayerSoil');
    var a = a.selectedIndex;
    var b = document.getElementById('сlimateCoefficient');
    var b = b.selectedIndex;
    var c = document.getElementById('bottomLayerSoil');
    var c = c.selectedIndex;
    var d = ""; 


    if (сlimateCoefficientVar == 1.9) d = 5.75;
    if (сlimateCoefficientVar == 1.7) d = 4;  
    if (сlimateCoefficientVar == 1.45) d = 2.25;
    if (сlimateCoefficientVar == 1.3) d = 1.75;

    var e = document.getElementById('numberVertsEarthingSwitch');
    var e = e.selectedIndex;

    var e1 = "";

    if (numberVertsEarthingSwitchVar == 1) e1= 1;
    if (numberVertsEarthingSwitchVar == 1.68) e1= 2;  
    if (numberVertsEarthingSwitchVar == 2.28) e1= 3;
    if (numberVertsEarthingSwitchVar == 2.84) e1= 4;
    if (numberVertsEarthingSwitchVar == 3.35) e1= 5;
    if (numberVertsEarthingSwitchVar == 3.9) e1= 6;  
    if (numberVertsEarthingSwitchVar == 4.41) e1= 7;
    if (numberVertsEarthingSwitchVar == 4.88) e1= 8;
    if (numberVertsEarthingSwitchVar == 5.31) e1= 9;
    if (numberVertsEarthingSwitchVar == 5.7) e1= 10;  
    if (numberVertsEarthingSwitchVar == 6.16) e1= 11;
    if (numberVertsEarthingSwitchVar == 6.6) e1= 12;
    if (numberVertsEarthingSwitchVar == 7.02) e1= 13;
    if (numberVertsEarthingSwitchVar == 7.42) e1= 14;  
    if (numberVertsEarthingSwitchVar == 7.8) e1= 15;
    if (numberVertsEarthingSwitchVar == 8.16) e1= 16;
    if (numberVertsEarthingSwitchVar == 8.5) e1= 17;
    if (numberVertsEarthingSwitchVar == 8.82) e1= 18;  
    if (numberVertsEarthingSwitchVar == 9.12) e1= 19;
    if (numberVertsEarthingSwitchVar == 9.4) e1= 20;


    var Precision = 5;
    var var1 = depthUpperLayerSoilVar; 
    var var2 = lengthVerticalEarthingVar; 
    var var3 = depthHorizontalGroundingVar; 
    var var4 = lengthConnectingStripVar; 
    var var5 = (var2 * (e1 - 1)) - (-var4); 
    var var6 = diameterVerticalVar; 
    var var7 = horizontalGroundingVar; 
    var var8 = (topLayerSoilVar * сlimateCoefficientVar * bottomLayerSoilVar * var2) / (((topLayerSoilVar * сlimateCoefficientVar) * (var2 - var1 - (-var3))) + (bottomLayerSoilVar * (var1 - var3)));


    var var9 = var8 / (2 * Math.PI * var2);
    var var10 = var8 * d / (Math.PI * var5);
    var var11 = Math.log((2 * var2) / var6);
    var var12 = Math.log(((4 * ((var2 / 2) - (-var3))) - (-var2)) / ((4 * ((var2 / 2) - (-var3))) - var2));
    var var13 = Math.log(var5 / Math.sqrt(var7 * var3));

    var resist_ud = var8;
    var resist_vert = var9 * (var11 + (var12 / 2));
    var dlina_gor = var5;
    var dlina_ver = (lengthVerticalEarthingVar*1).toFixed(2);
    var resist_gor = var10 * var13;
    var resist = ((resist_vert / numberVertsEarthingSwitchVar) * resist_gor) / ((resist_vert / numberVertsEarthingSwitchVar) + resist_gor);

    resist_ud = (resist_ud).toFixed(2);
    resist_vert = (resist_vert).toFixed(2);
    dlina_gor = (dlina_gor).toFixed(2);
    resist_gor = (resist_gor).toFixed(2);
    resist = (resist).toFixed(2);

    if (voltage == 220 || voltage == 380) {
        if (resist > 4) {
            var alert = '<b style = "color: red;">Общее сопротивление растеканию заземлителей не должно превышать 4 Ом</b>';
        } else {
            var alert = '<b style = "color: green;">Оптимальные параметры заземляющего устройства</b>';
        
        } 
        } else if (voltage == 660) {
        if (resist > 2) {   
            var alert = '<b style = "color: red;">Общее сопротивление растеканию заземлителей не должно превышать 2 Ом</b>';
        } else {
            var alert = '<b style = "color: green;">Оптимальные параметры заземляющего устройства</b>'; 
        }
    }

    var res = 'Удельное электрическое сопротивление грунта: ' + resist_ud + ' Ом⋅м</br>' 
    + 'Длина горизонтального заземлителя: ' + dlina_gor + ' м</br>' 
    + 'Длина вертикального заземлителя: ' + dlina_ver + ' м</br><br />'     
    + 'Сопротивление растеканию тока вертикального заземлителя: ' + resist_vert + ' Ом</br>' 
    + 'Сопротивление растеканию тока горизонтального заземлителя: ' + resist_gor + ' Ом</br>' 
    + 'Общее сопротивление заземляющего устройства: ' + resist + ' Ом<br /><br />'
    + alert;

    var result = {
        res: res
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
    msg = data.res;

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