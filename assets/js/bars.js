function highlight() {
    var bar_id = d3.select(this).attr('id');
    $('#'+bar_id + '.hidden-label').show();
}

function unhighlight() {
    var bar_id = d3.select(this).attr('id');
    $('#'+bar_id + '.hidden-label').hide();
}


function barChart() {

    var y_label = '';

    function chart(selection) {


        selection.each(function(data) {

        var margin = {top: 20, right: 20, bottom: 30, left: 50};

        var pWidth = $(d3.select(this)[0]).width(),
            pHeight = pWidth / 2.35;

        var  width = pWidth - margin.left - margin.right,
            height = pHeight - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")

        var yAxis = d3.svg.axis()
            .scale(y)
            .tickFormat(y_format)
            .orient("left")
            .ticks(10);

        var svg = d3.select(this).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        x.domain(data.map(_x));

        var y_extent = [d3.min(data,_y), d3.max(data, _y)];

        if (y_extent[0] < 0) {

            var m = Math.max(Math.abs(y_extent[0]),y_extent[1]);

            y.domain([-m,m]).nice();

        } else {

            y.domain([0,y_extent[1]]).nice();

        }


          var x_labels = svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + y(0) + ")")
              .call(xAxis);


            x_labels
              .selectAll('text')

                .attr('id',function(d){return d;})
                .on('mouseover',highlight)
                .on('mouseout',unhighlight)
                .attr('cursor','default')
              .attr('transform','translate(0,' + (height - y(0)) + ')')

            x_labels
                .selectAll('.tick > line')
                .attr('transform','translate(0,' + (height - y(0)) + ')')



          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "translate(-40," + height/2 + ") rotate(-90)")
              .style("text-anchor", "middle")
              .text(y_label);

          svg.selectAll(".bar")
              .data(data)
              .enter().append("rect")
              .attr("class", "bar")
              .attr('id',function(d){ return _x(d);})
              .attr("x", function(d) { return x(_x(d)); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return Math.min(y(0),y(_y(d))); })
              .attr("height", function(d) { return Math.abs(y(0) - y(_y(d))); });


          svg.selectAll('.labels')
                  .data(data)
                  .enter()
                  .append('text')
                  .attr('class',data.length > 10 ? 'hidden-label' : 'bar-label')
                  .attr('text-anchor','middle')
                  .attr('id',function(d){ return _x(d);})
                  .attr('y',function(d) {return data.length > 10 ? 0 : y(_y(d));})
                  .attr('dy',function(d) { return _y(d) < 0 && data.length < 10? 12:-3;})
                  .attr('x',function(d){return x(_x(d)) + (width / (2*data.length)-4);})
                  .text(function(d){return y_format(_y(d));});


          if (data.length > 10) {

              x_labels
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-0.5em")
            .attr("dy", "0.15em")
            .attr("transform", function(d) {

                return "translate(0," + (height - y(0)) + ") rotate(-45)"
                });

            svg.selectAll('.bar')
                .on('mouseover',highlight)
                .on('mouseout',unhighlight);
          }
        });

    }

    chart.x = function(_) {
        if (!arguments.length) return xValue;
        xValue = _;
        return chart;
    };

    chart.y = function(_) {
        if (!arguments.length) return yValue;
        yValue = _;
        return chart;
    };

    chart.title = function(_) {
        if (!arguments.length) return title;
        title = _;
        return chart;
    };

    chart._x = function(_) {
        if (!arguments.length) return _x;
        _x = _;
        return chart
    };

    chart._y = function(_) {
        if (!arguments.length) return _y;
        _y = _;
        return chart
    };

    chart.y_label = function(_) {
        if (!arguments.length) return y_label;
        y_label = _;
        return chart;
    }

    chart.y_format = function(_) {
        if (!arguments.length) return y_format;
        y_format = _;
        return chart;
    }

    return chart;

};
