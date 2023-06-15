import React from 'react';
import { ResponsiveStream } from '@nivo/stream'

const Chart = ({ data /* see data tab */ }) => (
	<ResponsiveStream
        data={data}
        keys={[
            'btc',
        ]}
        margin={{ right: 0, bottom: 0, left: 0 }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        offsetType="silhouette"
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.85}
				isInteractive={false}
				enableStackTooltip={false}
        borderColor='red'
				curve='linear'
        defs={[
					{
						id: 'gradient',
						type: 'linearGradient',
						colors: [
							{ offset: 0, color: '#ff0000' },
							{ offset: 100, color: '#000000' },
						],
					},
				]}
				fill={[{ match: '*', id: 'gradient' }]}
        dotSize={8}
        dotColor={{ from: 'color' }}
        dotBorderWidth={2}
				borderWidth={3}
        dotBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.7
                ]
            ]
        }}
        legends={[]}
    />
)

export default Chart;