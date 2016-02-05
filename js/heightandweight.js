/**
 * Created by lenovo on 15-12-20.
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
        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
        'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('heightandweight'));
        var myChart1 = ec.init(document.getElementById('heightandweight1'));
        option = {
            title : {
                text: '身高与体重关系图',
                subtext: '数据来自本人多年的记忆(跟实际可能有所偏差)',
                x: 'center'
            },
            tooltip : {
                trigger: 'axis',
                formatter: function(params) {
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + ' (cm) <br/>'
                        + params[1].seriesName + ' : ' + -params[1].value + ' (kg)';
                }
            },
            legend: {
                data:['身高','体重'],
                x: 'left'
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            dataZoom : {
                show : true,
                realtime : true,
                start : 0,
                end : 100
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: false},
                    data : [
                        '0year', '1year', '2year', '3year', '4year', '5year',
                        '6year', '7year', '8year', '9year', '10year',
                        '11year', '12year', '13year', '14year', '15year',
                        '16year', '17year', '18year', '19year', '20year',
                        '21year', '22year','23year','24year','25year',
                        '26year','27year'
                    ]
                }
            ],
            yAxis : [
                {
                    name : '身高(cm)',
                    type : 'value',
                    max : 200
                },
                {
                    name : '体重(kg)',
                    type : 'value',
                    axisLabel : {
                        formatter: function(v){
                            return  -v;
                        }
                    }

                }
            ],
            series : [
                {
                    name:'身高',
                    type:'line',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[
                        50,75,85,95,102,110,
                        115,120,125,130,140,
                        143,146,150,160,170,
                        175,177,178,180,181,
                        181,181,181,181,181,
                        181,181
                    ]
                },
                {
                    name:'体重',
                    type:'line',
                    yAxisIndex:1,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data: (function(){
                        var oriData = [
                            3,11,12,14,16,18,
                            20,20,21,21,22,
                            23,23,25,31,37,
                            43,48,55,62,63,
                            66,68,68,70,68,72,73
                        ];
                        var len = oriData.length;
                        while(len--) {
                            oriData[len] *= -1;
                        }
                        return oriData;
                    })()
                }
            ]
        };


        // 为echarts对象加载数据
        myChart.setOption(option);
        myChart1.setOption(option);
    }
);