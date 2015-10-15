function lineChart() {



    var margin = {top: 10, right: 10, bottom: 30, left: 30},
        cwidth = 600,
        cheight = 320,
        xValue = function(d) { return d[0]; },
        yValue = function(d) { return d[1]; },
        title = function(d) { return d[2]; },
        category = function(d) { return d[3]; },
        xScale = d3.time.scale(),
        yScale = d3.scale.linear(),
        yaxis = '',
        xaxis = '',
        alpha = 0.9;

        var line = d3.svg.line()
            .x(function(d) { return xScale(d[0]);})
            .y(function(d) { return yScale(d[1]);});

    function chart(selection) {


        selection.each(function(data) {

            // Convert data to standard representation greedily;
            // this is needed for nondeterministic accessors.
            data = data.map(function(d, i) {
                return [xValue.call(data, d, i), yValue.call(data, d, i)];
                //, title.call(data,d,i), category.call(data,d,i)];
            });

            var pWidth = $(d3.select(this)[0]).width(),
                pRatio = cwidth/pWidth,
                pHeight = cheight / pRatio;


            var  width = pWidth - margin.left - margin.right,
                 height = pHeight - margin.top - margin.bottom;

                xScale
                .range([0, width]);

                yScale
                .range([height, 0]);

        var color = d3.scale.category10();

        var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom");

        var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");

        var svg = d3.select(this).selectAll("svg").data([data]);

        var gEnter = svg.enter().append("svg");

        gEnter
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);
        svg
                = svg
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        xScale.domain(d3.extent(data, function(d) { return d[0]; })).nice();
        yScale.domain([0,800]);
        //yScale.domain(d3.extent(data, function(d) { return d[1]; })).nice();

        svg
                .append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .append("text")
                .attr("class", "label")
                .attr("x", width)
                .attr("y", -6)
                .style("text-anchor", "end")
                .text(xaxis);

        svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("class", "label")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text(yaxis);

       // svg.selectAll(".line")
         //       .enter()
            svg.append("path")
                .attr("class", "line")
                .attr("d",line(data));


        var need_legend=false;
        color.domain().forEach(function(d) {
            if (d && d.length > 0) {
                need_legend=true;
            }
        });

        if (need_legend == true) {

            var legend = svg.selectAll(".legend")
                    .data(color.domain())
                    .enter().append("g")
                    .attr("class", "legend")
                    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

            legend.append("rect")
                    .attr("x", width - 18)
                    .attr("width", 18)
                    .attr("height", 18)
                    .style("fill", color);

            legend.append("text")
                    .attr("x", width - 24)
                    .attr("y", 9)
                    .attr("dy", ".35em")
                    .style("text-anchor", "end")
                    .text(function(d) { return d; });
        }
        });
    }

      chart.margin = function(_) {
          if (!arguments.length) return margin;
          margin = _;
          return chart;
      };

      chart.width = function(_) {
          if (!arguments.length) return width;
          width = _;
          return chart;
      };

      chart.height = function(_) {
          if (!arguments.length) return height;
          height = _;
          return chart;
      };

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

      chart.category = function(_) {
          if (!arguments.length) return category;
          category = _;
          return chart;
      };

      chart.yaxis = function(_) {
          if (!arguments.length) return yaxis;
          yaxis = _;
          return chart;
      };

      chart.xaxis = function(_) {
          if (!arguments.length) return xaxis;
          xaxis = _;
          return chart;
      };

      return chart;
  };
