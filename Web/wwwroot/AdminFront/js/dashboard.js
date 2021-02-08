(function ($) {
  'use strict';
  $(function () {
    var primaryColor = getComputedStyle(document.body).getPropertyValue('--primary');
    var secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary');
    var successColor = getComputedStyle(document.body).getPropertyValue('--success');
    var warningColor = getComputedStyle(document.body).getPropertyValue('--warning');
    var dangerColor = getComputedStyle(document.body).getPropertyValue('--danger');
    var infoColor = getComputedStyle(document.body).getPropertyValue('--info');
    var darkColor = getComputedStyle(document.body).getPropertyValue('--dark');
    if ($("#sales-status").length) {
      var myChart = new Chart(document.getElementById('sales-status'), {
        type: 'doughnut',
        animation: {
          animateScale: true
        },
        data: {
          labels: ["Import", "Export", "Return", "Revenue"],
          datasets: [{
            label: 'Visitor',
            data: [100, 70, 100, 80],
            backgroundColor: [
              successColor,
              infoColor,
              warningColor,
              dangerColor,
            ]
          }]
        },
        options: {
          responsive: true,
          legend: false,
          cutoutPercentage: 50,
          legendCallback: function (chart) {
            var legendHtml = [];
            legendHtml.push('<ul class="row">');
            var item = chart.data.datasets[0];
            for (var i = 0; i < item.data.length; i++) {
              legendHtml.push('<li class="col-6">');
              legendHtml.push('<span class="chart-legend" style="border-color:' + item.backgroundColor[i] + '"></span>');
              legendHtml.push('<span class="chart-legend-label-text">' + chart.data.labels[i] + '&nbsp;' + item.data[i]);
              legendHtml.push('</li>');
            }

            legendHtml.push('</ul>');
            return legendHtml.join("");
          },
          tooltips: {
            enabled: true,
            mode: 'label',
            callbacks: {
              label: function (tooltipItem, data) {
                var indice = tooltipItem.index;
                return data.labels[indice] + data.datasets[0].data[indice];
              }
            }
          },
        }
      });
      $('#sales-status-legend').html(myChart.generateLegend());
    }
    if ($("#product-sales").length) {
      Chart.defaults.global.legend.labels.usePointStyle = true;
      var ctx = document.getElementById('product-sales').getContext("2d");

      var gradientStrokeFill_1 = ctx.createLinearGradient(1, 1, 1, 400);
      gradientStrokeFill_1.addColorStop(0, successColor);
      gradientStrokeFill_1.addColorStop(1, infoColor);

      var gradientStrokeFill_2 = ctx.createLinearGradient(1, 1, 1, 250);
      gradientStrokeFill_2.addColorStop(0, successColor);
      gradientStrokeFill_2.addColorStop(1, infoColor);

      var ProductSalesCanvas = $("#product-sales").get(0).getContext("2d");
      var ProductSales = new Chart(ProductSalesCanvas, {
        type: 'line',
        data: {
          labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          datasets: [{
              label: 'Shoes',
              data: [0, 16, 3, 5, 2, 12, 9, 3],
              borderColor: successColor,
              backgroundColor: gradientStrokeFill_1,
              fill: true,
              borderWidth: 2
            },
            {
              label: 'Watches',
              data: [0, 23, 7, 12, 40, 17, 26, 5],
              borderColor: successColor,
              backgroundColor: gradientStrokeFill_2,
              fill: true,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          elements: {
            point: {
              radius: 0
            }
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          legendCallback: function (chart) {
            var text = [];
            text.push('<ul>');
            for (var i = 0; i < chart.data.datasets.length; i++) {
              text.push('<li><span class="chart-color" style="border-color:' +
                chart.data.datasets[i].borderColor + '"></span>');
              text.push('<span class="chart-label"> ' + chart.data.datasets[i].label + '</span>');
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join("");
          },
          legend: false,
          stepsize: 100,
          scales: {
            xAxes: [{
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
                display: false
              }
            }],
            yAxes: [{
              display: false,
              gridLines: {
                color: 'rgba(0, 0, 0, 0.05)',
                display: false
              }
            }]
          }
        }
      });
      $('#product-sales-legend').html(ProductSales.generateLegend());
    }
    if ($('#morris-line-example').length) {
      var GraphLines = Morris.Line({
        element: 'morris-line-example',
        resize: true,
        lineColors: [infoColor, successColor],
        data: [{
            y: '2006',
            a: 50,
            b: 0
          },
          {
            y: '2007',
            a: 75,
            b: 78
          },
          {
            y: '2008',
            a: 30,
            b: 12
          },
          {
            y: '2009',
            a: 35,
            b: 50
          },
          {
            y: '2010',
            a: 70,
            b: 100
          },
          {
            y: '2011',
            a: 78,
            b: 65
          }
        ],
        grid: false,
        xkey: 'y',
        pointSize: 0,
        lineWidth: 2,
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: "always"
      });
      $(window).on("resize", function () {
        GraphLines.redraw();
      });
    }
    if ($('#dashboard-sales-chart').length) {
      var GraphBar = Morris.Bar({
        element: 'dashboard-sales-chart',
        data: [{
            y: '01',
            a: 79,
            b: 40
          },
          {
            y: '02',
            a: 60,
            b: 65
          },
          {
            y: '03',
            a: 80,
            b: 100
          },
          {
            y: '04',
            a: 79,
            b: 50
          }
        ],
        barColors: [successColor, infoColor],
        barGap: 3,
        grid: false,
        barSizeRatio: 0.40,
        xkey: 'y',
        ykeys: ['a', 'b'],
        gridTextSize: 0,
        padding: 1,
        labels: ['Series A', 'Series B']
      });
      $(window).on("resize", function () {
        GraphBar.redraw();
      });
    }
  });
})(jQuery);