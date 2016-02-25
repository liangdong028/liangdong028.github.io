/**
 * Created by lenovo on 16-2-23.
 */
    // 路径配置
require.config({
    paths: {
        echarts: 'js/echarts/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
       // 'echarts/theme/helianthus',
        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
        'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec,theme) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('result'),theme);
        option = {
            title : {
                text: '商务委员会投票结果',
                subtext: 'IT支持部技术支持'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['','当前票数']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.9]
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['测试1','测试2','测试3','测试4','测试5','测试6','测试7','测试8','测试9','商委总有效票数']
                }
            ],
            series : [

                {
                    name:'当前票数',
                    type:'bar',
                    data:[144, 77, 99, 111, 222, 33, 131, 99, 55, 777]
                }
            ]
        };
        option1 = {
            title : {
                text: '商务委员会投票结果',
                subtext: 'IT支持部技术支持'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:[ '2012年']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.01]
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['巴西','印尼','美国','印度','中国','世界人口(万)']
                }
            ],
            series : [
                {
                    name:'2012年',
                    type:'bar',
                    data:[18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name:'2012年',
                    type:'bar',
                    data:[19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option,'helianthus');
    }
);