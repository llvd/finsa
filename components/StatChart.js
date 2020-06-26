import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default class StatChart extends React.Component{
    render(){
        return(
            <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'Sun'],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43,10],
                
                }
              ]
            }}
            width={Dimensions.get("window").width=312} // from react-native
            height={215}
            fromZero
            yAxisLabel="Rp."
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#C9FCF0",
              backgroundGradientTo: "#EBFFFF",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 100) => `rgba(0, 199, 173, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 199, 173, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "3",
                strokeWidth: "2",
              }
            }}
            bezier
            style={{
              borderRadius: 16
            }}
          />
        )
    }
}