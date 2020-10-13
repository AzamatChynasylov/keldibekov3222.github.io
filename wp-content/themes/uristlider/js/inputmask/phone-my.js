/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Belgian Phone extension.
 */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["../inputmask"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("../inputmask"));
	} else {
		factory(window.Inputmask);
	}
}
(function (Inputmask) {
	Inputmask.extendAliases({
		"phonemy": {
			alias: "abstractphone",
			phoneCodes: [
				//{ "mask": "+0 (###) ###-##-##", "cc": "no", "cd": "no", "desc_en": "", "name_ru": "", "desc_ru": "" },
				{ "mask": "+7 (###) ###-##-##", "cc": "ru", "cd": "Russia", "desc_en": "", "name_ru": "", "desc_ru": "" },
				//{ "mask": "8 (###) ###-##-##", "cc": "ru", "cd": "Russia", "desc_en": "", "name_ru": "", "desc_ru": "" },
			 ]
		}
	});

	return Inputmask;
}));
