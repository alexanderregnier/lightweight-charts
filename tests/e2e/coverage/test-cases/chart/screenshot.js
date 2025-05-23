function interactionsToPerform() {
	return [];
}

let chart;

function beforeInteractions(container) {
	chart = LightweightCharts.createChart(container);

	const mainSeries = chart.addSeries(LightweightCharts.HistogramSeries);

	mainSeries.setData(generateHistogramData());

	return new Promise(resolve => {
		requestAnimationFrame(resolve);
	});
}

function afterInteractions() {
	chart.takeScreenshot();
	return Promise.resolve();
}
