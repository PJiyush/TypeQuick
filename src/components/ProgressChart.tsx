import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import { useStore } from "@/context/StorageContext";
import { useTheme } from "@/context/ThemeContext";

const chartConfig = {
    accuracy: {
        label: "Accuracy",
        color: "hsl(var(--chart-1))",
    },
    wpm: {
        label: "WPM",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function ProgressChart() {
    const {items} = useStore()||{};
    const {isDarkMode} = useTheme()||{};
    const itemData = items?.map((item)=>{
        return {
            time: item.date,
            accuracy: item.accuracy,
            wpm: item.wpm
        }
    })
    if(itemData && itemData.length===0){
        itemData?.push({
            time: new Date().toISOString(),
            accuracy: 0,
            wpm: 0
        })
    }
    return (
        <Card className={`w-2/3 h-auto ${isDarkMode?' bg-neutral-900':''} `}>
            <CardHeader>
                <CardTitle className={`w-2/3 h-auto ${isDarkMode?' text-nightThemeSecondary':''} `}>My Progress</CardTitle>
                <CardDescription>{itemData && itemData.length>0 && `from ${itemData.length>0 &&  itemData[0].time.slice(0,9)} to ${ itemData.length>0 && itemData[itemData.length-1].time.slice(0,9)}`}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={itemData}
                        margin={{
                            left: 12,
                            right: 12,
                            top: 10
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 10)}
                        />
                        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="wpm"
                            type="monotone"
                            stroke="var(--color-wpm)"
                            strokeWidth={2}
                            dot={true}
                        />
                        <Line
                            dataKey="accuracy"
                            type="monotone"
                            stroke="var(--color-accuracy)"
                            strokeWidth={2}
                            dot={true}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            considering {itemData?.length} records
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
