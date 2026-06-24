import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";
import axios from "axios";
import PageHeader from "../../components/shared/PageHeader";
import SectionCard from "../../components/shared/SectionCard";
import StatCard from "../../components/shared/StatCard";

function Analytics() {
    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAnalytics = async () => {
            try {
                const user = JSON.parse(localStorage.getItem("user") || "{}");
                const userId = user.id || 1;

                const res = await axios.get(
                    `https://interviewaceai-rpmo.onrender.com/api/analytics/${userId}`
                );
                setData(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError("Failed to load performance analytics.");
                setLoading(false);
            }
        };
        loadAnalytics();
    }, []);

    if (loading) return (
        <div className="flex flex-col items-center justify-center p-12 w-full text-center">
            <span className="text-3xl animate-pulse">⏳</span>
            <h2 className="text-lg font-bold text-slate-700 mt-4">Loading Analytics...</h2>
            <p className="text-sm text-slate-400 mt-1 max-w-md">
                If this is the first load in a while, it may take up to a minute for the Render backend server to wake up.
            </p>
        </div>
    );

    if (error) return (
        <div className="flex flex-col items-center justify-center p-12 w-full text-center">
            <span className="text-3xl">⚠️</span>
            <h2 className="text-lg font-bold text-red-650 mt-4">{error}</h2>
            <button
                onClick={() => window.location.reload()}
                className="mt-4 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow hover:brightness-110 active:scale-98 transition cursor-pointer"
            >
                Retry Connection
            </button>
        </div>
    );

    return (
        <div className="flex flex-col w-full gap-6">
            <PageHeader 
                title="Performance Analytics" 
                subtitle="Review historical mock session scores and skill progress index graphs."
            />

            {/* Stats Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                <StatCard label="Total Interviews" value={data.totalInterviews} />
                <StatCard label="Average Score" value={`${data.averageScore}/10`} />
                <StatCard label="Highest Score" value={`${data.highestScore}/10`} />
                <StatCard label="Lowest Score" value={`${data.lowestScore}/10`} />
            </div>

            {/* Performance Trend Chart */}
            <SectionCard 
                title="Performance Trend" 
                description="Visual analysis of ratings across consecutive interview sessions. X-Axis tracks session progression, Y-Axis tracks rating score."
            >
                <div className="w-full overflow-x-auto mt-4 p-4 md:p-6 bg-slate-50/50 border border-slate-100 rounded-2xl flex flex-col items-center justify-center">
                    <div className="min-w-[650px] w-full flex items-center justify-center">
                        <LineChart
                            width={650}
                            height={300}
                            data={data.sessions}
                            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis
                                dataKey="id"
                                stroke="#64748b"
                                fontSize={12}
                                label={{
                                    value: "Interview Session Index",
                                    position: "insideBottom",
                                    offset: -10,
                                    fill: "#64748b",
                                    fontSize: 12,
                                    fontWeight: "bold"
                                }}
                            />
                            <YAxis
                                stroke="#64748b"
                                fontSize={12}
                                domain={[0, 10]}
                                tickCount={6}
                                label={{
                                    value: "Rating Score (0-10)",
                                    angle: -90,
                                    position: "insideLeft",
                                    offset: 15,
                                    fill: "#64748b",
                                    fontSize: 12,
                                    fontWeight: "bold"
                                }}
                            />
                            <Tooltip 
                                contentStyle={{
                                    backgroundColor: "#1e293b",
                                    borderColor: "#334155",
                                    borderRadius: "12px",
                                    color: "#fff",
                                    fontSize: "12px"
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="score"
                                stroke="#6366f1"
                                strokeWidth={3}
                                activeDot={{ r: 8 }}
                                dot={{ stroke: "#6366f1", strokeWidth: 2, r: 4, fill: "#fff" }}
                            />
                        </LineChart>
                    </div>
                </div>
            </SectionCard>
        </div>
    );
}

export default Analytics;