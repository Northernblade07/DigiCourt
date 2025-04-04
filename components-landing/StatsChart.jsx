import React, { useEffect } from "react";
import * as echarts from "echarts";

const StatsChart = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("statsChart"));
    const option = {
      animation: false,
      title: {
        text: "Case Statistics 2025",
        textStyle: {
          fontFamily: "Inter",
          fontSize: 16,
          fontWeight: 500,
        },
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Filed Cases", "Resolved Cases"],
      },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Filed Cases",
          type: "line",
          data: [150, 230, 224, 218, 135, 147],
          smooth: true,
        },
        {
          name: "Resolved Cases",
          type: "line",
          data: [120, 182, 191, 234, 190, 130],
          smooth: true,
        },
      ],
    };
    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Section: Title and Stats */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              Proven Track Record of Excellence
            </h2>
            <p className="text-gray-600 mb-8">
              Our platform has helped numerous courts across the country improve
              their efficiency and provide better service to the public. See how
              our solutions have made a difference.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-indigo-50">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600">User Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-indigo-50">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  50%
                </div>
                <div className="text-gray-600">Faster Processing</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-indigo-50">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  1M+
                </div>
                <div className="text-gray-600">Cases Processed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-indigo-50">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  200+
                </div>
                <div className="text-gray-600">District Courts Served</div>
              </div>
            </div>
          </div>

          {/* Right Section: Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div id="statsChart" style={{ width: "100%", height: "400px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsChart;
