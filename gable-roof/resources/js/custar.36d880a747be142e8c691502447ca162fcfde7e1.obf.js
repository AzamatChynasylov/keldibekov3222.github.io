var _0x8ef6=['error','<span>','</span>','<div>Объем\x20всей\x20трубы:\x20','\x20м<sup>3</sup>\x20или\x20','\x20л<br\x20/>Объем\x201\x20м\x20трубы:\x20','\x20л</div>','#js--resultDataContent','html','name','.js--DataSource','change','#js--option_1',':visible','hide','#js--option_2','show','#js--calcModelForm','submit','preventDefault','apply','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','item','value','[nncCPtRBQBfzzERwtMVsGQETXcjhSOHLZcZxQTbLiigdMJBTyhfwhPYnCGWLZF]','charCodeAt','keys','length','indexOf','undefined','replace','pipe_length','pipe_diameter','pipe_volume_m3','toFixed','pipe_volume_l','pipe_volume_m3_sum','pipe_volume_l_sum'];(function(_0x1f20fb,_0x23ed0d){var _0x18f0c4=function(_0x1998ef){while(--_0x1998ef){_0x1f20fb['push'](_0x1f20fb['shift']());}};_0x18f0c4(++_0x23ed0d);}(_0x8ef6,0xde));var _0x18b7=function(_0x1f20fb,_0x23ed0d){_0x1f20fb=_0x1f20fb-0x0;var _0x18f0c4=_0x8ef6[_0x1f20fb];return _0x18f0c4;};function isExists(_0x587c41,_0x282c06){var _0x27197a=Object[_0x18b7('0x0')](_0x587c41);for(var _0x4f0dd4=0x0;_0x4f0dd4<_0x282c06[_0x18b7('0x1')];_0x4f0dd4++){if(_0x27197a[_0x18b7('0x2')](_0x282c06[_0x4f0dd4])===-0x1){return![];}}return!![];}function isFullFilled(_0x44f5af,_0x2e9c0d){var _0x5006be=Object[_0x18b7('0x0')](_0x44f5af);for(var _0x5c6dba=0x0;_0x5c6dba<_0x5006be[_0x18b7('0x1')];_0x5c6dba++){if(_0x2e9c0d[_0x18b7('0x2')](_0x5006be[_0x5c6dba])>-0x1&&(_0x44f5af[_0x5006be[_0x5c6dba]]===''||_0x44f5af[_0x5006be[_0x5c6dba]]===null||typeof _0x44f5af[_0x5006be[_0x5c6dba]]===_0x18b7('0x3'))){return![];}}return!![];}function toNumerical(_0x212657){var _0x32764d=Object[_0x18b7('0x0')](_0x212657);for(var _0x217f49=0x0;_0x217f49<_0x32764d[_0x18b7('0x1')];_0x217f49++){_0x212657[_0x32764d[_0x217f49]]=_0x212657[_0x32764d[_0x217f49]][_0x18b7('0x4')](/,/g,'.');_0x212657[_0x32764d[_0x217f49]]=_0x212657[_0x32764d[_0x217f49]][_0x18b7('0x4')](/[-\/;":'a-zA-Zа-яА-Я]/g,'');if(_0x212657[_0x32764d[_0x217f49]]==='')_0x212657[_0x32764d[_0x217f49]]=0x0;_0x212657[_0x32764d[_0x217f49]]=_0x212657[_0x32764d[_0x217f49]]*0x1;}return _0x212657;}function calculate(_0x43a57c){if(isExists(_0x43a57c,[_0x18b7('0x5'),'pipe_diameter'])===![]){return{'error':'Ошибка:\x20Не\x20все\x20начальные\x20данные\x20переданы\x20для\x20расчета'};}if(isFullFilled(_0x43a57c,[_0x18b7('0x5'),_0x18b7('0x6')])===![]){return{'error':'Ошибка:\x20Не\x20все\x20начальные\x20данные\x20содержат\x20необходимые\x20значения'};}_0x43a57c=toNumerical(_0x43a57c);var _0x4effb5={};var _0x285961=_0x43a57c[_0x18b7('0x5')],_0x35757f=_0x43a57c[_0x18b7('0x6')];var _0x5bd4bc=3.14*(_0x35757f*_0x35757f/0x3d0900)*_0x285961;var _0xd2536e=3.14*(_0x35757f*_0x35757f/0xfa0)*_0x285961;var _0xb0d483=3.14*(_0x35757f*_0x35757f/0x3d0900)*0x1;var _0x46243e=3.14*(_0x35757f*_0x35757f/0xfa0)*0x1;_0x4effb5[_0x18b7('0x7')]=_0xb0d483[_0x18b7('0x8')](0x5);_0x4effb5[_0x18b7('0x9')]=_0x46243e[_0x18b7('0x8')](0x2);_0x4effb5[_0x18b7('0xa')]=_0x5bd4bc[_0x18b7('0x8')](0x5);_0x4effb5[_0x18b7('0xb')]=_0xd2536e[_0x18b7('0x8')](0x2);return _0x4effb5;}function showResult(_0x2cc85c){var _0x33b90d='';if(_0x2cc85c[_0x18b7('0xc')]){_0x33b90d=_0x18b7('0xd')+_0x2cc85c[_0x18b7('0xc')]+_0x18b7('0xe');}else{_0x33b90d=_0x18b7('0xf')+_0x2cc85c[_0x18b7('0xa')]+_0x18b7('0x10')+_0x2cc85c[_0x18b7('0xb')]+_0x18b7('0x11')+_0x2cc85c[_0x18b7('0x7')]+_0x18b7('0x10')+_0x2cc85c[_0x18b7('0x9')]+_0x18b7('0x12');}$(_0x18b7('0x13'))[_0x18b7('0x14')](_0x33b90d);}function form2json(_0x339940){var _0x121292=_0x339940['serializeArray']();var _0x2a01e6={};for(var _0x1d2876=0x0;_0x1d2876<_0x121292['length'];_0x1d2876++){_0x2a01e6[_0x121292[_0x1d2876][_0x18b7('0x15')]]=_0x121292[_0x1d2876]['value'];}return _0x2a01e6;}$(_0x18b7('0x16'))[_0x18b7('0x17')](function(){var _0x4aa98f=Number($(this)['val']());if(_0x4aa98f===0x0){if(!$(_0x18b7('0x18'))['is'](':visible'))$('#js--option_1')['show']();if($('#js--option_2')['is'](_0x18b7('0x19')))$('#js--option_2')[_0x18b7('0x1a')]();}else{if(!$('#js--option_2')['is'](_0x18b7('0x19')))$(_0x18b7('0x1b'))[_0x18b7('0x1c')]();if($(_0x18b7('0x18'))['is'](_0x18b7('0x19')))$('#js--option_1')[_0x18b7('0x1a')]();}});$(_0x18b7('0x1d'))[_0x18b7('0x1e')](function(_0x24f15e){_0x24f15e[_0x18b7('0x1f')]();var _0x266208=form2json($(this));var _0x132498=calculate(_0x266208);showResult(_0x132498);});(function(){var _0x3052dc=function(){var _0x1cecec=!![];return function(_0x233b4c,_0x111d89){var _0x36319f=_0x1cecec?function(){if(_0x111d89){var _0x3be6ec=_0x111d89[_0x18b7('0x20')](_0x233b4c,arguments);_0x111d89=null;return _0x3be6ec;}}:function(){};_0x1cecec=![];return _0x36319f;};}();var _0x59a8d0=_0x3052dc(this,function(){var _0x253257=function(){var _0x55537a;try{_0x55537a=Function(_0x18b7('0x21')+_0x18b7('0x22')+');')();}catch(_0x4b602c){_0x55537a=window;}return _0x55537a;};var _0x571cbe=_0x253257();var _0x59dcc1=function(){return{'key':_0x18b7('0x23'),'value':'attribute','getAttribute':function(){for(var _0x375ac6=0x0;_0x375ac6<0x3e8;_0x375ac6--){var _0x4c3327=_0x375ac6>0x0;switch(_0x4c3327){case!![]:return this['item']+'_'+this[_0x18b7('0x24')]+'_'+_0x375ac6;default:this[_0x18b7('0x23')]+'_'+this[_0x18b7('0x24')];}}}()};};var _0xc22629=new RegExp(_0x18b7('0x25'),'g');var _0x4befef='nn.kalkcC.pPtRroBQBfz;.zkalkER-pwtMVsGQroETXcjh.ruSOHLZcZxQTbLiigdMJBTyhfwhPYnCGWLZF'['replace'](_0xc22629,'')['split'](';');var _0x377649;var _0x1b1b17;var _0x191010;var _0x5057e7;for(var _0xe22421 in _0x571cbe){if(_0xe22421[_0x18b7('0x1')]==0x8&&_0xe22421[_0x18b7('0x26')](0x7)==0x74&&_0xe22421[_0x18b7('0x26')](0x5)==0x65&&_0xe22421[_0x18b7('0x26')](0x3)==0x75&&_0xe22421[_0x18b7('0x26')](0x0)==0x64){_0x377649=_0xe22421;break;}}for(var _0x21c51b in _0x571cbe[_0x377649]){if(_0x21c51b[_0x18b7('0x1')]==0x6&&_0x21c51b[_0x18b7('0x26')](0x5)==0x6e&&_0x21c51b[_0x18b7('0x26')](0x0)==0x64){_0x1b1b17=_0x21c51b;break;}}if(!('~'>_0x1b1b17)){for(var _0x5d8458 in _0x571cbe[_0x377649]){if(_0x5d8458[_0x18b7('0x1')]==0x8&&_0x5d8458[_0x18b7('0x26')](0x7)==0x6e&&_0x5d8458[_0x18b7('0x26')](0x0)==0x6c){_0x191010=_0x5d8458;break;}}for(var _0x10996f in _0x571cbe[_0x377649][_0x191010]){if(_0x10996f[_0x18b7('0x1')]==0x8&&_0x10996f['charCodeAt'](0x7)==0x65&&_0x10996f[_0x18b7('0x26')](0x0)==0x68){_0x5057e7=_0x10996f;break;}}}if(!_0x377649||!_0x571cbe[_0x377649]){return;}var _0x2b190d=_0x571cbe[_0x377649][_0x1b1b17];var _0x4884b1=!!_0x571cbe[_0x377649][_0x191010]&&_0x571cbe[_0x377649][_0x191010][_0x5057e7];var _0x52a64b=_0x2b190d||_0x4884b1;if(!_0x52a64b){return;}var _0x1b18f4=![];for(var _0x4144fe=0x0;_0x4144fe<_0x4befef[_0x18b7('0x1')];_0x4144fe++){var _0x1b1b17=_0x4befef[_0x4144fe];var _0x5b447a=_0x52a64b[_0x18b7('0x1')]-_0x1b1b17[_0x18b7('0x1')];var _0x1dec48=_0x52a64b['indexOf'](_0x1b1b17,_0x5b447a);var _0x861c79=_0x1dec48!==-0x1&&_0x1dec48===_0x5b447a;if(_0x861c79){if(_0x52a64b['length']==_0x1b1b17['length']||_0x1b1b17[_0x18b7('0x2')]('.')===0x0){_0x1b18f4=!![];}}}if(!_0x1b18f4){data;}else{return;}_0x59dcc1();});_0x59a8d0();$(_0x18b7('0x1d'))[_0x18b7('0x1e')]();}());