///Ja gribesi savienot ar json tad to funkcju liksi seit




///lai tas stradatu ieliec saite <div id="ColumnChart"></div>
window.onload = function () {
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {
	  var data = google.visualization.arrayToDataTable([
		  ///tasks (varesi nemt no json)
	  ['Task', 'Hours per Day'],
	  ///seit liksi informaciju (pac vai json)
	  ['2013', 8],
	  ['2014', 2],
	  ['2015', 4],
	  ['2016', 2],
	  ['2017', 8],
	  ['2018', 8],
	  ['2019', 8],
	  ['2020', 8]
	  ///
	]);
	  ///seit vari mainit izmeru un nosaukumu un krasu
	  /// saite prieks krasam https://www.color-hex.com/
	  var options = {'title':'Statistika', 'width':720, 'height':480, 'colors':['#000000']};
	  ///tev vajag LineChart vai ColumnChart ↓
	  var chart = new google.visualization.ColumnChart(document.getElementById('ColumnChart'));
	  chart.draw(data, options);
	}
}
