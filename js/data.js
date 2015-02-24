var dataSet = [
    ['Ресторант "Рубаят"','София','НДК',''],
    ['Ресторант "Ниагара"','София','Лозенец, ул. "Кричим" 1',''],
    ['Бар "Клуб Конте" / CLUB CONTE','София','Студентски град, ул.Йордан Йосифов - пред стол 4','Пуши се след 23ч'],
];



$(document).ready(function() {
    $('#offenders').dataTable( {
        "data": dataSet,
				"language": lang_bg,
        "columns": [
            { "title": "Име на заведението" },
            { "title": "Град" },
            { "title": "Адрес" },
            { "title": "Коментар" }
        ]
    } );
} );

var lang_bg = {
	"sEmptyTable":     "Не са намерени данни",
	"sInfo":           "Показани са от _START_ до _END_ от общо _TOTAL_",
	"sInfoEmpty":      "Показани са от 0 до 0 от общо 0",
	"sInfoFiltered":   "(филтрирани от общо _MAX_)",
	"sInfoPostFix":    "",
	"sInfoThousands":  ",",
	"sLengthMenu":     "Покажи по _MENU_ на страница",
	"sLoadingRecords": "Зареждане...",
	"sProcessing":     "Моля, изчакайте...",
	"sSearch":         "Търсене:",
	"sZeroRecords":    "Не са намерени резултати",
	"oPaginate": {
		"sFirst":    "Първа",
		"sLast":     "Последна",
		"sNext":     "Следваща",
		"sPrevious": "Предишна"
	},
	"oAria": {
		"sSortAscending":  ": сортиране във възходящ ред",
		"sSortDescending": ": сортиране в низходящ ред"
	}
};

