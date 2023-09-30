import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Legend } from "recharts";

const Statistics = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];
    const totalItems = useLoaderData() || [];

    const myDonations = favoriteItems.length;
    const totalDonations = totalItems.length;
    // const myDonationsPercentage = (
    //     (myDonations / totalDonations) *
    //     100
    // ).toFixed(1);

    const data = [
        { name: "Your Donations", value: myDonations },
        { name: "Total Donations", value: totalDonations - myDonations },
    ];

    const COLORS = ["#0088FE", "#00C49F"];

    const renderLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div className="flex justify-center items-center h-[115] text-2xl">
            <PieChart width={600} height={600}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={180}
                    fill="#8884d8"
                    label={renderLabel}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;
