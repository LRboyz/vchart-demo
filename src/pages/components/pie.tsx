
import { VChart } from '@visactor/react-vchart';
import { IInitOption, ISpec } from '@visactor/vchart'


export default function PieChart() {
    const spec: ISpec = {
        data: {
            id: "pie-chart",
            values: [
                { type: 'oxygen', value: '46.60' },
                { type: 'silicon', value: '27.72' },
                { type: 'aluminum', value: '8.13' },
                { type: 'iron', value: '5' },
                { type: 'calcium', value: '3.63' },
                { type: 'sodium', value: '2.83' },
                { type: 'potassium', value: '2.59' },
                { type: 'others', value: '3.5' }
            ]
        },
        animationAppear: {
            duration: 2000
        },
        title: {
            visible: true,

            textType: 'rich'
        },
        type: 'pie',
        outerRadius: 0.8,
        innerRadius: 0.5,
        padAngle: 0.6,
        valueField: "value",
        categoryField: "type",
        pie: {
            style: {
                cornerRadius: 10
            },
            state: {
                hover: {
                    outerRadius: 0.85,
                    stroke: '#000',
                    lineWidth: 1
                },
                selected: {
                    outerRadius: 0.85,
                    stroke: '#000',
                    lineWidth: 1
                }
            }
        },
        legends: {
            visible: true,
            orient: 'right'
        },
        label: {
            visible: true
        },
        tooltip: {
            mark: {
                content: [
                    {
                        key: datum => datum?.['type'],
                        value: datum => datum?.['value'] + '人'
                    }
                ]
            }
        }
    }
    const options: IInitOption = {
        dom: 'pie-chart'
    }

    return <div id='pie-chart' className='w-full h-full'>
        <VChart spec={spec} options={options} />
    </div>
}
